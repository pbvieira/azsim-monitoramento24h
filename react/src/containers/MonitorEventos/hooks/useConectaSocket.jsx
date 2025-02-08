/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Swal from 'sweetalert2';
import config from '../../../config';
import api from '../../../services/api';

const MAX_ITENS = 250;
const RECONNECT_INTERVAL = 5000;
const RECONNECT_TIMEOUT = 15 * 60 * 1000;

const useConectaSocket = (setOcorrencias, setEventos) => {
    const stompClientRef = useRef(null);
    const reconnectTimeoutRef = useRef(null);
    const connectionStartTimeRef = useRef(null);

    useEffect(() => {
        let socket

        const connect = () => {
            socket = new SockJS(`${config.baseUrl}/monitor-websocket`);
            const client = Stomp.over(socket);

            const connectCallBack = async () => {
                console.log("Conexão WebSocket estabelecida com sucesso!");
                stompClientRef.current = client;

                // Limpa qualquer tentativa de reconexão pendente
                if (reconnectTimeoutRef.current) {
                    clearTimeout(reconnectTimeoutRef.current);
                    reconnectTimeoutRef.current = null;
                }

                client.subscribe("/topic/eventos", (message) => {
                    const dadosRecebidos = JSON.parse(message.body);
                    setEventos((prevEventos) => {
                        const newEventos = [...prevEventos];
                        if (newEventos.length >= MAX_ITENS) {
                            newEventos.pop();
                        }

                        newEventos.unshift(dadosRecebidos)
                        return newEventos;
                    });
                });

                client.subscribe("/topic/ocorrencias", (message) => {
                    const dadosRecebidos = JSON.parse(message.body);
                    if (dadosRecebidos.evento.idcliente != null) {
                        setOcorrencias((prevOcorrencias) => {
                            const newOcorrencias = [...prevOcorrencias];
                            if (newOcorrencias.length >= MAX_ITENS) {
                                newOcorrencias.pop();
                            }
                            newOcorrencias.unshift(dadosRecebidos);
                            const somOcorrencia = new Audio('/azsim/audio/somOcorrencia.mp3');
                            somOcorrencia.play();

                            Swal.fire({
                                title: "Nova ocorrência recebida!",
                                text: `Nova ocorrência recebida de ${dadosRecebidos.evento.nmcliente}`,
                                icon: "warning",
                                confirmButtonText: "Ok",
                            });

                            return newOcorrencias;
                        });
                    }
                });

                try {
                    const ocorrenciasResponse = await api.get("/ocorrencias");
                    setOcorrencias(
                        Array.isArray(ocorrenciasResponse.data)
                            ? ocorrenciasResponse.data.slice(-MAX_ITENS)
                            : []
                    );

                    const eventosResponse = await api.get("/eventos");
                    setEventos(
                        Array.isArray(eventosResponse.data)
                            ? eventosResponse.data.slice(-MAX_ITENS)
                            : []
                    );
                } catch (error) {
                    console.error("Erro ao buscar dados iniciais:", error);
                }
            };

            const errorCallBack = (error) => {
                console.error("Erro na conexão WebSocket:", error);
                attemptReconnect();
            };

            client.connect({}, connectCallBack, errorCallBack);

            socket.onclose = () => {
                connectionStartTimeRef.current = Date.now();
                console.warn("Socket fechado. Tentando reconectar...");
                attemptReconnect();
            };

        };

        const attemptReconnect = () => {
            // Verifica se o tempo máximo de reconexão foi atingido
            if (Date.now() - connectionStartTimeRef.current >= RECONNECT_TIMEOUT) {
                console.error("Não foi possível reconectar ao websocket.");
                Swal.fire({
                    title: "Erro!",
                    text: "Não foi possível reconectar com o servidor. Entre em contato com o suporte!",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                return;
            }

            // Tenta reconectar após o intervalo definido
            reconnectTimeoutRef.current = setTimeout(() => {
                console.log("Tentando reconectar...");
                connect();
            }, RECONNECT_INTERVAL);
        };

        connect();

        return () => {
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
            if (socket) {
                socket.close();
            }
            if (stompClientRef.current) {
                stompClientRef.current.disconnect();
            }
        };
    }, [setEventos, setOcorrencias]);
};

export default useConectaSocket;
