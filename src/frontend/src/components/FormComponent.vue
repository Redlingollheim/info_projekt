<template>
    <div>
      <p>Korrekte Daten eingeben</p>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email:</label>
          <input placeholder="z.B. muster@mann.de" v-model="email"  required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input v-model="name"  required />
        </div>
        <div>
          <label for="datum">Datum:</label>
          <input placeholder="z.B. 2014-03-29" v-model="datum"  required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p v-if="error" style="color: red;">{{ error }}</p>
      <p v-if="successMessage"  style="color: green;">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        name: '',
        datum:'',
        error: null,
        successMessage: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://localhost:3000/validate', {
            email: this.email,
            name: this.name,
            datum: this.datum
          });
          this.successMessage = response.data.message;
          this.error = null;
        } catch (err) {
          this.error = err.response.data.errors || 'An error occurred';
          this.successMessage = '';
        }
      }
    }
  };
  </script>
  <style scoped>
  label,
  p,
  span,
  div {
    padding: 10px;
    margin-bottom: 10px;
    display: block;
    box-sizing: border-box;
  }
  
  input {
    margin-left: 20px;
    padding: 15px 16px;
    border: 2px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    justify-content: space-between;
    flex: 1;
    max-width: 40%;
    transition: border-color 0.3s ease;
    margin-bottom: 20px;
  }
  
  input:focus {
    border-color: #333;
  }
  
  button {
    margin-left: 45%;
    padding: 10px;
    margin-top: 30px;
    display: block;
  }
  
  p {
    color:blue; 
  }
  </style>