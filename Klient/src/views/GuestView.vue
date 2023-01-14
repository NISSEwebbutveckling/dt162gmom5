<!--Undersida för  musiksamlingen, "gästläge".-->
<template>
<!--DT162G, moment5 - projekt
//Nils, 
//nibo1005@student.miun.se-->
<br><br>
<div class="card">    
<h2>Musiksamlingen, gästsidan</h2>
<p>
Med den här <RouterLink to="/guest">>tjänsten</RouterLink>              
 så är det tänkt att användaren (jag) ska kunna lagra namn, genre och årtal och jag kan också välja att ange om låten har publicerats eller inte. Här finns det även ett val (optional) att ange en länk till publicerad musik.  
Resten av fälten är obligatoriska.
</p>
<p>
På den här sidan så går det endast att läsa datan för besökare.
<br>
För att skapa, uppdatera och radera poster i databasen, så behöver användaren befinna sig på användarsidan.
</p>
<img src="/src/img/pianot.png" alt="piano" >
</div>
<!--
Lyssnar efter emit genom @deleteMusic, ange vad som ska hända, radering. samt vilket id som ska tas bort.
-->
<MusicGuest @deleteMusic="deleteMusic(music._id)" v-for="music in musics" :music="music" :key="music._id" />
</template>
<script>
//Import, Inkluderar nedan
import MusicGuest from "../components/MusicGuest.vue";
export default {
//Skapar dataobj. reaktiv data.
data() {
//return objekt.
return {
//Array som består av att resp. blir obj.
//Listan hämtas in mha Ajax.
musics: []
}           
},
//Anger inkluderat även nedan.
    components: {
        MusicGuest
         },
//Property, methods i denna skapas fkn. getMusics för att hämta.
         methods: {
            //Asyncron.
            async getMusics() {
               //Variabel responsen, lagras från api.
               //Await fetch för göra fetchanrop. restwebbtjänst. Nedan för lokal anstltn.
               const resp = await fetch("http://localhost:3000/musics");
               //Lagra data, response-json..
               //Väntar in svar, omvandla till json, lagra i var. data.
               const data = await resp.json();
//Data lagras i data property, reaktiva data.
this.musics = data;
},
},

//Metod som körs när laddats in helt och hållet. 
mounted() {
   //Ovan körs och sparas i reaktiva data. i state för komponenten.
    //this används innanför exporten.
    this.getMusics();
}
}

</script>
<!--Style scoped, gäller för endast denna komponent.-->
<style scoped>
h2 {
    padding: 0.2em;
}
</style>
