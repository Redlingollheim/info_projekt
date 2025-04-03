<template>
  <div>


    <header>
      <img src="/logo.jpg" alt="Logo" class="logo" />
      Personalverwaltung
    </header>

    <nav>
      <a href="#" @click="showSection('start')">Start</a>
      <a href="#" @click="showSection('galerie')">Galerie</a>
      <a href="#" @click="showSection('ueber-uns')">Über Uns</a>
      <a href="#" @click="showSection('kontakt')">Kontakt</a>
    </nav>

    <div class="container">
      <div class="sidebar">
        <button @click="toggleForm">➕ Daten eingeben</button>
        <button @click="anzeigenDaten">📋 Personaltabelle</button>
      </div>
      <div class="content" id="content">
        <div v-if="showForm">
          <h2>Neue Person hinzufügen</h2>
          <input v-model="inputData.name" placeholder="Name" />
          <input v-model="inputData.position" placeholder="Position" />
          <input v-model="inputData.salary" placeholder="Gehalt" />
          <button @click="addData" :disabled="loading">
            {{ loading ? "Hinzufügen..." : "Hinzufügen" }}
          </button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
        
        <!-- Text für angeklickte Sektionen anzeigen -->
        <div v-if="section !== 'galerie'">
          <p>{{ sectionText }}</p>
        </div>

        <!-- Galerie Sektion -->
        <div v-if="section === 'galerie'">
          <h2>Galerie</h2>
          <div class="gallery-container">
            <button class="arrow left" @click="scrollGallery(-1)">⬅</button>
            <div class="gallery" id="gallery">
              <img v-for="(img, index) in galleryImages" :key="index" :src="img" />
            </div>
            <button class="arrow right" @click="scrollGallery(1)">➡</button>
          </div>
        </div>

      </div>
    </div>

    <!-- Footer mit Texten und Links -->
    <div class="footer">
      &copy; PersonalData GmbH |
      <a href="#" @click="showSection('agb')">AGB</a> |
      <a href="#" @click="showSection('impressum')">Impressum</a> |
      <a href="#" @click="showSection('datenschutz')">Datenschutz</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const inputData = ref({ name: "", position: "", salary: "" });
    const loading = ref(false);
    const errorMessage = ref("");
    const showForm = ref(false);
    const section = ref("start");
    const sectionText = ref("");  // Text für jede Sektion
    const galleryImages = ref([
      "https://picsum.photos/200/125?random=1",
      "https://picsum.photos/200/125?random=2",
    ]);

    const addData = async () => {
      loading.value = true;
      errorMessage.value = "";
      try {
        await axios.post("http://localhost:3000/infos", inputData.value);
        alert("Person hinzugefügt!");
        inputData.value = { name: "", position: "", salary: "" };
      } catch (error) {
        errorMessage.value = "Fehler beim Hinzufügen der Person.";
      } finally {
        loading.value = false;
      }
    };

    const showSection = (newSection) => {
      section.value = newSection;
      // Text basierend auf der Sektion anzeigen
      if (newSection === "start") {
        sectionText.value = "Willkommen auf der Startseite!";
      } else if (newSection === "ueber-uns") {
        sectionText.value = "Erfahren Sie mehr über uns.";
      } else if (newSection === "kontakt") {
        sectionText.value = "Kontaktieren Sie uns.";
      } else if (newSection === "agb") {
        sectionText.value = "Hier finden Sie unsere AGB.";
      } else if (newSection === "impressum") {
        sectionText.value = "Impressum und rechtliche Hinweise.";
      } else if (newSection === "datenschutz") {
        sectionText.value = "Unsere Datenschutzrichtlinien.";
      }
    };

    const toggleForm = () => {
      showForm.value = !showForm.value;
    };

    const scrollGallery = (direction) => {
      if (direction === 1) {
        galleryImages.value.shift();
        galleryImages.value.push(`https://picsum.photos/200/125?random=${Date.now()}`);
      }
    };

    return { inputData, addData, loading, errorMessage, showForm, toggleForm, section, showSection, galleryImages, scrollGallery, sectionText };
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #e1e8f0, #4a90e2);
  color: black;
}

/* Schmaler Streifen oberhalb des Headers */


/* Header */
header {
  background: #2c3e80;
  color: lightblue;
  padding: 30px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  position: relative;
}

/* Logo im Header */
.logo {
  position: absolute;
  top: 11px;
  left: 30px;
  width: 120px;
  height: auto;
}

/* Navigationsstil */
nav {
  position: absolute;
  top: 35%;
  left: 12%;
  padding: 35px;
  background: #2c3e90;
  color: white;
  width: 100px;
  height:420px;
  transform: rotate(-12deg);
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
}

/* Reiter Links */
nav a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-bottom: 18px;
  transition: background 0.3s, box-shadow 0.3s, transform 0.3s;
}

/* Container für Inhalt */
.container {
  display: flex;
  margin-left: 220px;
  margin-right: 20px;
  padding: 40px;
  justify-content: space-between;
}

/* Seitenleiste */
.sidebar button {
  width: 100%;
  padding: 18px;
  font-size: 18px;
  background: #3498db;
  color: white;
  border-radius: 8px;
  transition: background 0.3s, box-shadow 0.3s;
}

/* Content-Bereich */
.content {
  width: 70%;
  padding: 30px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
}

/* Galerie Container */
.gallery-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery {
  display: flex;
  gap: 10px;
}

.gallery img {
  width: 200px;
  height: 125px;
  object-fit: cover;
}

/* Footer */
.footer {
  background: #2c3e82;
  color: white;
  text-align: center;
  padding: 18px;
  position: fixed;
  width: 82%;
  bottom: 0;
}
.footer a {
  color: lightblue;
}
</style>