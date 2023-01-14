<!--DT162G, moment5, projekt 
Nils , 
nibo1005@student.miun.se-->
<!--I denna komponent återfinns det som skrivs ut i tabellform, "hämtas in" av MusicsView, MusicsGuest...-->
<template>
<br>
<hr>
<div class="card">
<br><br>
<!-- 
När proprty skickats med så kan music.name nås åt genom att använda {{}}.
-->
<!--<h2 >{{music.name}}</h2>-->
<article>
    <br>
<!--Tabell-->
<table class="table">
<!-- <br>
<thead> <br><br>
<tr class="table-light">
<th scope="col">ID</th>
</tr>
</thead>
<tbody>
<tr class="table-primary">
    <td>{{music._id}}</td>
    </tr>
</tbody>-->
<thead> <br><br>
<tr class="table-light">
<th scope="col">Namn</th>
</tr>
</thead>
<tbody>
<tr class="table-primary">
    <td>{{music.name}}</td>
    </tr>
</tbody>
<br><br>
<thead>
<tr class="table-light">
    <th scope="col" class="thurl">Url</th>  
</tr>
</thead>
<tbody>
<tr class="table-primary">
<!---Genom att använda {{}}, så går det att komma åt datan.-->
    <td>{{music.url}}</td>
</tr>
</tbody>
<br><br>
<thead>
<tr class="table-light">
     <th scope="col">Genré</th>
</tr>
</thead>
<tbody>
<tr class="table-primary">
    <td>{{music.genre}}</td>
</tr>
</tbody>
<br><br>
<thead>
<tr class="table-light">
     <th scope="col">Datum</th>
</tr>
</thead>
<tbody>
<tr class="table-primary">
    <td>{{music.year}}</td>
</tr>
</tbody>
<br>
<br>
<thead>
<tr class="table-light">
    <th scope="col">Publicerad</th>
</tr>
</thead>
<tbody>
<tr class="table-primary">
    <td>{{music.published}}</td>
</tr>
</tbody>
</table>
<!--Tabell, slut-->
<br>
<p>Klicka på Uppdatera nedan för att uppdatera tabellen.</p>
<p class ="red">För att ta bort denna post så 
<br>klickar du på Ta bort (går ej att ångra).</p>
<br>
</article>
<br><br>
<!--@, eventlyssnare på elementet, vad den ska lyssan på anges här är det klick, vad som ska hända därefter,
 antingen körs en fkn. i komponenter, då skapas i export default, då körs det som står där.
Det går även göra en emit till parent. (till MusicsView, pga där är det som denna, musics, läses in.)
Vill vi använda samma state (data) i flera komponenter behöver vi skicka våra värden med props eller emits.
Props för att skicka nedåt i hierarkin, till en child-komponent.
Emits för att skicka uppåt i hierarkin, till en parent-komponent.
-->
 <button type="button"  onclick="window.location.href='#top3'" @click="$emit('deleteMusic')" title="Klicka här för att ta bort." class="btn btn-danger">Ta bort post</button>
 <button type="button"  onclick="window.location.href='#top2'" @click="$emit('uppdateraMusic1')" title="Klicka här för att uppdpatera." class="btn btn-warning">Uppdatera post</button>
<br>
<div class="toplink2">
        <!--Visar länk längs ned.-->
        <a href="#top" title="Tryck för att gå till toppen av sidan."><span class="glyphicon glyphicon-menu-up"></span>Till sidtoppen</a><br>
    </div><br>
</div><br>
  <div class="toplink">
        <!--Visar länk längs ned, när mobilvy.-->
        <a href="#top" title="Tryck för att gå till toppen av sidan."><span class="glyphicon glyphicon-menu-up"></span>Till toppen</a><br>
    </div>
<br>
</template>

<script>
//Vad som tas emot, objekt.
export default {
props: {
music: Object
},
//Deklarerar emits.
emits: ["deleteMusic", "uppdateraMusic1"],
}
/*ANG props ovan....Då vill vi ju inte ha samma innehåll i varje inlägg, så en del av innehållet i kompontenten måste kunna bytas ut. Vi kan då använda oss utav props.
Props är då attribut vi kan skicka med till komponenten från förälder-komponenten. Det vi måste göra är att definera vilka props komponenten ska kunna ta emot i child-komponenten för att sedan kunna använda det i den komponentens template. 
Det görs med propertyn props som består utav antingen en array eller ett objekt. Används ett objekt går det att kontrollera vad varje prop ska kunna innehålla, till exempel en textsträng eller siffror. */
</script>

<!--Style scoped, gäller för endast denna komponent.-->
<style scoped>
article
{
max-width: 800px;
font-size: 1.2em;
text-align: center;
padding: 0.2em;
background-color: rgb(179, 199, 243);
border: solid 1px grey;
margin : 1em auto 1em;
}
.btn {
    margin: 2%;

}

article:hover
{background-color: rgb(164, 188, 240);
}

@media screen and (max-width: 800px) {
article {
width: 90%;
}
img {
display :none;
}
}

.red {
color: red;
}

img {
width: 60%;
margin: 0%;
}
</style>
