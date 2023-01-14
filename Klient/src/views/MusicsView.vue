<!--DT162G, moment5 
//Nils, 
//nibo1005@student.miun.se-->
<!--Undersida för Musiklistan, "användarläge".-->

<!--VIEW-->
<template>
<br><br>
<div class="card">    
<h2>Musiksamlingen, användarsidan</h2>
<p>
Med den här <RouterLink to="/guest">>tjänsten</RouterLink>              
så är det tänkt att jag ska kunna lagra namn och årtal och jag kan även välja ange true/false, beronde på
om musiken har publicerats eller inte. 
<br>Här finns det även ett val (optional) att ange en länk till publicerad musik.  
Resten av fälten är obligatoriska.
</p>
<!--Användaren hamnar här efter att tagit bort post.-->
<div id="top3"></div>
<h3>Nedan går det att:</h3>
<ul>
<li>Lägga till uppgifter om ny musik.</li>
<li>Uppdatera redan inlagd musik.</li>
<li>Ta bort inlagd musik.</li>
</ul>
<!--Meddelande till användaren beoroende på olika val som görs.-->
<div id="messeage4"></div>
<img src="/src/img/elgitarren.png" class="elgitarr" alt="elgitarr" >
</div>
 <!--Inkluderar nedan, kör getMusics-->
<AddMusic @musicAdded="getMusics()" />
<!--<UpdateMusic @musicUpdated="getMusics()" />-->
<!--<UpdateMusic v-for="music in musics" :music="music" :key="music._id" />
-->
<!--
Lyssnar efter emit genom @deleteMusic, ange vad som ska hända, radering. samt vilket id som ska tas bort.
-->

<!--V-for som en en foreach-loop funkar den, var obj. i arrayen skickas med som property till komponent
måste även ange nyckel för varje komponent. Detta behövs för att kunna loopa igenom hämtad data. -->
<!--<Music v-for="music in musics" :music="music" :key="music._id" />

V-for används för att loopa igenom, ange vad som loopas igenom, skicka med property, key för id.-->
<!--Lyssnar efter emitsen. music.id för att veta vilket id som ska skickas med.
-->
<Music @deleteMusic="deleteMusic(music._id)" @uppdateraMusic1="updateMusic1(music._id, music.name, music.url, music.genre, music.year, music.published)"  v-for="music in musics" :music="music" :key="music._id"   />

<div class="card">
  <div clas="cardcard">
<!--Formulär-->
<!--Anger även vilken fkn. som ska köras.  updateMusic.
Händelselyssnare som lyssnar på submit, prevent skapar här en preventdefault, vilket medför att sidan ej laddas om.-->
<form @submit.prevent="updateMusic()">
<label for="addmusic">
</label>
 <div id="top2"></div>
<h2 class="UppdateraH2">Uppdatera musik</h2>
 <br>
<!--
<h4>ID</h4>
<input v-model="_id" type="text" placeholder="" required  readonly>
<br><br>-->
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
<input type="checkbox"  v-model="published">
  <!--<div> {{published}}</div>--></h4>
<br><br>
 <div id="messeage3"></div>
<br>
<!--Skickaknappen-->
<input type="submit" class="btn btn-success" value="Uppdatera">
<br><br>
  <div class="toplink2">
        <!--Visar länk längst ned.-->
        <a href="#top" title="Tryck för att gå till toppen av sidan."><span class="glyphicon glyphicon-menu-up"></span>Till sidtoppen</a><br>
    </div><br>
    <div class="toplink">
        <!--Visar länk längst ned.-->
        <a href="#top" title="Tryck för att gå till toppen av sidan."><span class="glyphicon glyphicon-menu-up"></span>Till sidtoppen</a><br>
    </div><br>
<!--Form, slut--->
</form>
</div>
</div>

</template>

<script>
//Import, inkluderar nedan.
import Music from "../components/Music.vue";
import AddMusic from "../components/AddMusic.vue";

export default {
//STATE//
//Skapar dataobj. reaktiv data.
data() {
//Return objekt.
return {
//Array som består av att resp. "music" blir obj. Varje musiv behöver ID, från api.
//Listan hämtas in mha Ajax.
musics: [],  
////////
_id: "",
name: "",
url: "",
genre: "",
music: "",
year: "",
published: ""
}           
},

//Anger inkluderat ovan, även nedan.
components: {
Music,
AddMusic
},

//Property methods, i denna skapas fkn. getMusics för att hämta info.
methods: {
//ACTION
//Fetchnr. asyncron. events.
async getMusics() {
//Variabel resp, lagras från api.
//Await fetch för att göra fetchanrop.
//Nedan för lokal ansltn.
const resp = await fetch("http://localhost:3000/musics");
//Lagra data, response-json.
//Väntar in svar, omvandla till json, lagra i variabeln; data.
const data = await resp.json();
//Logg, ta bort. //console.log(data);
//Data lagras i data property (komponenten), reaktiva data.
this.musics = data;
},

//////Uppdatering av musik del 1//////
updateMusic1(_id, name, url, genre, year, published) {
console.log("klick..");
this._id = _id;
this.name = name;
this.url = url;
this.genre =genre;
this.year =year;
this.published =published;
console.log(this._id, this.name, this.url, this.year, this.published, this.genre);
//Hanterar DOM, visar berört meddelande, tömmer ev. innehåll.
document.getElementById("messeage3").innerHTML = "";   
},

//////Uppdatering av musik del //////
async updateMusic(_id) {
console.log(this.year);
//If-sats för att kontrollera att något skrivits in >, innan skickar, m.m..
var xyz = this.year;
if(xyz.toString().length == 8)
{
//Vad som ska skickas med. Skapar ett JavScriptobj. Deklareras nedan.
let musicBody = {
_id: this._id,
name: this.name,
url : this.url,
genre : this.genre,
year : this.year,
published : this.published,
//Meddelande, DOM.
};
console.log(this._id);
//Local
const resp = await fetch ("http://localhost:3000/musics/" + this._id, {
//Global
//const resp = await fetch ("", {
//Anger vilken metod som ska skicka, PUT.
method: "PUT",
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
//Fältinställningar, elementet, när fått svar..
//  this._id = this.id;
this.name = this.name;
this.url = this.url;
this.genre =this.genre;
this.year =this.year;
this.published =this.published;

//Hanterar DOM, visar berört meddelande.
document.getElementById("messeage3").innerHTML = "Låten har nu uppdaterats.";         
}
else {
//Hanterar DOM.
document.getElementById("messeage3").innerHTML = "Låten har EJ uppdaterats till, ange datumformat YYYYMMDD.";         
}
//FÖr at ej ska behöva uppdatera sidan manuellt.
this.getMusics();
},
/////////////////////////

//Fkn. för delete
async deleteMusic(_id) {
console.log(_id);
//Asynkron fkn. pga ajax.anr.
//Url till webbtjänst lokal, + _id fångar upp vilket nr (MongoDB, bson => _id).
const resp = await fetch("http://localhost:3000/musics/" + _id, {
/*
Url till webbtjänst global.
const resp = await fetch("" + id, {
*/
//  }
//Vilken metod det gäller, i detta fall DELETE.
method: "DELETE",
//Headers skickas med. Accepts bör underlätta för webbtjänsten.
headers: {
"Accept": "application/json",
//Behövs ev. inte i detta läget, men kan vara bra utifall.
"Content-type": "application/json"
} 
}); 
//Få tillbaka data, väntar på resp, innan görs om till json.
const data = await resp.json();
// Console.log(data);
//Hanterar DOM, visar berört meddelande.
document.getElementById("messeage4").innerHTML = "Låten har nu tagits bort.";
document.getElementById("messeage2").innerHTML = "";        
//Anropar fkn. för att uppdatera reaktiva data, state.
this.getMusics();
}
},
//Metod som körs när komponent laddadts in helt oct hållet, därefter så körs endan. 
mounted() {
//Ovan körs och sparas i reaktiva data, i state för komponenten.
//"this" används innanför exporten.
this.getMusics();
}
}
</script>

<!--Style scoped, gäller då för endast denna komponent.-->
<style scoped>
h2 {
padding: 0.2em;
}
.red, #messeage3, #messeage4
{
color: red;
font-size: 1.6em;
text-align: center;
}
</style>
