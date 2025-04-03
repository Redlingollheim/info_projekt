<template>
   <h1></h1>
    <div class="home">
     
      <router-link to="/validdata">Validierung des Formulars!</router-link>
    </div>
  </template>
  
  <script>
  import FormComponent from '@/components/FormComponent.vue';
  
  export default {
    name: 'Home',
    components: {
      FormComponent
    }
  }
  </script>
  
  <style scoped>
  h1 {
  
    margin-left: 25px;
  }
  </style>