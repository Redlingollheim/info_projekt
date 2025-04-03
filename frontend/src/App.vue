<!-- src/App.vue -->
<template>
  <div id="app">
   
    <Eingabe /> <!-- Stelle sicher, dass Eingabe korrekt importiert wurde -->
  </div>
</template>

<script>
import Eingabe from './components/eingabe.vue';  // Importiere die Eingabe-Komponente

export default {
  name: 'App',
  components: {
    Eingabe,  // Registriere sie in den Komponenten
  },
};
</script>

<style>
/* Hier dein CSS */
</style>