<template>
  <div id="app">
    <Header />
    <FormComponent />
    <router-view /> <!-- Hier wird der Inhalt der aktuellen Route gerendert -->
    <Footer /> <!-- Fügt die Footer-Komponente hinzu -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; 
import FormComponent from './components/FormComponent.vue'; 

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FormComponent
  },
};
</script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>