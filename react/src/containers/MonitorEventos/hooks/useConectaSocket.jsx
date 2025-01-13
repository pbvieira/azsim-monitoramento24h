/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Swal from 'sweetalert2';
import config from '../../../config';
import api from '../../../services/api';

const useConectaSocket = (setOcorrencias, setEventos) => {

    const stompClientRef = useRef(null);

    useEffect(() => {
        const socket = new SockJS(`${config.baseUrl}/monitor-websocket`);
        const client = Stomp.over(socket);

        const connectCallBack = async () => {
            console.log('Conexão WebSocket estabelecida com sucesso!');
            stompClientRef.current = client;
            
            client.subscribe('/topic/eventos', (message) => {
                const dadosRecebidos = JSON.parse(message.body);
                setEventos((eventos) => [dadosRecebidos, ...eventos]);
            });

            client.subscribe('/topic/ocorrencias', (message) => {
                const dadosRecebidos = JSON.parse(message.body);
                if (dadosRecebidos.evento.idcliente != null) {
                    setOcorrencias((ocorrencias) => [dadosRecebidos, ...ocorrencias]);
                }
            });

            try {
                const ocorrenciasResponse = await api.get('/ocorrencias');
                setOcorrencias(Array.isArray(ocorrenciasResponse.data) ? ocorrenciasResponse.data : []);

                const eventosResponse = await api.get('/eventos');
                setEventos(Array.isArray(eventosResponse.data) ? eventosResponse.data : []);
            } catch (error) {
                console.error('Erro ao buscar dados iniciais:', error);
            }
        };

        const connect = () => {
            client.connect({}, connectCallBack, (error) => {
                console.error('Erro ao conectar no servidor do monitor de eventos:', error);
                setTimeout(() => {
                    if (!stompClientRef.current || !stompClientRef.current.connected) {
                        Swal.fire({
                            title: 'Erro!',
                            text: 'Erro ao conectar. Por favor, tente novamente.',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        });
                    }
                }, 5000);
            });
        };

        const reconnect = () => {
            if (stompClientRef.current !== null) {
                stompClientRef.current.disconnect();
            }
            connect();
        };

        socket.onclose = () => {
            reconnect();
        };

        connect();

        return () => {
            socket.close();
            if (stompClientRef.current !== null) {
                stompClientRef.current.disconnect();
            }
        };
    }, []);
};

export default useConectaSocket;
