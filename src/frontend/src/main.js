import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

// Erstelle die App-Instanz
const app = createApp(App);

// Konfiguration für axios, um das Backend zu erreichen
app.config.globalProperties.$axios = axios.create({
  baseURL: 'http://localhost:3000' // Standardmäßig das Backend auf Port 3000 ansprechen
});

// Verwende den Router in der App
app.use(router);

// Mount der App
app.mount('#app');