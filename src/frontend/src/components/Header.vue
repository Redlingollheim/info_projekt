<template>
    <h1>{{ title }}</h1>
  <header>
      <input placeholder="Daten eintragen...">
  </header>
</template>

<script>
  export default {
      name: 'Header',
      props: {
  title: {
    type: String,
    default: 'Registrierung für das Webinar',
  },
},
  }
  
</script>

<style scoped>
header {

background-color: lightskyblue;
margin:20px;
height: 120px;
padding: 16px;
display:flexbox;
align-items: flex-end;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
}

h1 {
margin-left: 35px;
}

</style>