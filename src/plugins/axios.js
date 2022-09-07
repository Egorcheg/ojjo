import axios from 'axios';

export default {
    install: (app, options) => {
        const api = axios.create({
            baseURL: options.baseURL,
        });

        app.provide('$api', api);
    },
};
