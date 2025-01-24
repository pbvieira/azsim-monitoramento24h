const config = {
    baseUrl:
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_URL_BASE_DEV
            : import.meta.env.VITE_URL_BASE_PROD,
    mode: import.meta.env.MODE,
};

export default config;
