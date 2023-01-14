<template>
<!--DT162G, moment5 -projekt
    //Nils, 
    //nibo1005@student.miun.se-->
<!--Komponent som påverkar tabellen som visas i "gästläge"-->
<br>
<hr>
<div class="card">
<br><br>
<!--<h2 >{{music.name}}</h2>-->
<article>
<table class="table">
<thead> <br><br>
<tr class="table-light">
<th scope="col">Namn</th>
</tr>
</thead>
<tbody>
<tr class="table-primary">
    <!-- 
När proprty skickats med så kan music kommas åt genom att använda {{}}.
    -->
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
<br><br>
<p class ="red">För att lägga till, uppdatera eller ta bort en post
    <br> så behöver du befinna dig på användarsidan.</p>
<br>
</article>
<div class="toplink2">
        <!--Visar länk längs ned.-->
        <a href="#top" title="Tryck för att gå till toppen av sidan."><span class="glyphicon glyphicon-menu-up"></span>Till sidtoppen</a><br>
    </div><br>
<br>
<br>
</div>
  <div class="toplink">
        <!--Visar länk längs ned, när mobilvy.-->
        <a href="#top" title="Tryck för att gå till toppen av sidan."><span class="glyphicon glyphicon-menu-up"></span>Till toppen</a><br>
    </div>
<br>
</template>
<script>

//Anger vad som "tas emot."
export default {
props: {
music: Object
}
}
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
