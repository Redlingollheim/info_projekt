// src/main.js
import './style.css';  // Falls du CSS verwendest
import axios from 'axios'; // Axios importieren
import { createApp } from 'vue';  // Oder eine andere Framework-Library, je nach Bedarf
import App from './App.vue'; // Falls du Vue verwendest (oder eine andere Hauptkomponente)

// Axios Beispiel - einfache GET Anfrage
const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data); // Hier kannst du mit den Daten arbeiten
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
  }
};

// API-Abfrage ausführen
fetchData();

createApp(App).mount('#app');