<!--DT162G, moment5, projekt 
Nils, 
nibo1005@student.miun.se-->
<!--Komponent för att lägga till poster.-->
<template>
<div class="card">
<!--Formulär-->
<!--Anger även vilken fkn. som ska köras.  AddMusic.
Händelselyssnare som lyssnar på submit, prevent skapar här en preventdefault, vilket medför att sidan ej laddas om.-->
<form @submit.prevent="addMusic()">
<label for="addmusic">
</label>
<h2>Lägg till musik</h2>
<br>
<h4>Låtens namn</h4>
<!--v-model, koppling mellan inmatsningsfällt och dataobj.-->
<input v-model="name" type="text" placeholder="Låtens namn.." required >
<br>
<br>
<h4>Länk till låten (frivilligt)</h4>
<input v-model="url" type="text" placeholder="www" >
<br><br>
<h4>Genre</h4>
<input v-model="genre" type="text" placeholder="EDM, Trance, Future rave..." required>
<br><br>
<h4>Datum, skapad</h4>
<input v-model="year" type="number" placeholder="YYYYMMDD" required>
<br><br>
<br>
<h4>Kryssa i rutan om låten har publicerats.
<input type="checkbox" value="test" v-model="published">
  <!--<div> {{published}}</div>--></h4>
<br>
 <!--Nedan vissas meddelande beroende på olika val av användaren.-->
 <div id="messeage4"></div>
<div id="messeage2"></div>
<!----> 
<br>
<!--Skickaknappen-->
<input type="submit" class="btn btn-success" value="Lägg till">
<!--Form, slut--->
<br><br>
</form>
</div>
</template>

<script>
//Skapar datakomponent. Kopplar till inmatningsfält, kopppling js-kod och DOM. (v-model).
export default {
data() {
//Return obj.
return { 
name: "",
url: "",
genre: "",
music: "",
year: "",
published: ""
}
},
//Deklarerar emits.
emits: ["musicAdded"],
//Skapar method, addMusic.
methods: {
async addMusic() {
console.log(this.year);
console.log(this.published);
//If-sats för att kontrollera att något skrivits in >, innan skickar, m.m..
var xyz = this.year;
if(xyz.toString().length == 8)
{
//Vad som ska skickas med. Skapar ett JavScriptobj. Deklareras nedan.
let musicBody = {
name: this.name,
url : this.url,
genre : this.genre,
year : this.year,
published : this.published,
/*"name" : "test2",
"url" : "www",
"genre" : "edm",
"year" : "20230101",
"published" : "false"
*/
//Meddelande, DOM.
};
//Lokalt.
const resp = await fetch ("http://localhost:3000/musics", {
//Globalt
//const resp = await fetch ("", {
//Anger vilken metod som ska skickas, POST:
method: "POST",
//Anger även headers.
headers: {
"Accept": "application/json",
"Content-type": "application/json"
},
//Gör om till json, json.stringify.
body: JSON.stringify(musicBody)
});
//Väntar svar.
const data = await resp.json();
//Tömmer fält när fått svar.
this.name = "";
this.url = "";
this.genre ="";
this.year ="";
this.published ="";
//För att användaren ej ska behöva ladda om sidan.
//emit till parentkomp. Används för att ej behöva ladda om manuellt.
this.$emit("musicAdded");
//Hanterar DOM, visar berört meddelande.
document.getElementById("messeage2").innerHTML = "Låten har nu lagts till nedan.";         
}
else {
//Hanterar DOM.
document.getElementById("messeage2").innerHTML = "Låten har EJ lagts till, ange datumformat YYYYMMDD.";      
}
}
}
}
</script>

<!--Styling, scoped-->
<style scoped>
form {
max-width: 800px;
margin: 0 auto;
}

.button {
width: 80%;
background-color: chartreuse;
}

.button:hover {
width: 80%;
background-color: rgb(63, 122, 4);
}

/*Responsiv*/
@media screen and (max-width: 800px) {
article {
width: 90%;
}
img {
display :none}
}

.red, #messeage2
{
color: red;
font-size: 1.6em;
}

img {
width: 50%;
margin: 0%;
float :right;
}

</style>
