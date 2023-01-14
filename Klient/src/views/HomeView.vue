<!--DT162G, moment5 
//Nils, 
//nibo1005@student.miun.se-->
<!--Startvy återfinns här.-->
<!--Setup-->
<script setup>
</script>
<template>
  <br><br>
<div class="card">
<article>
<section>
<h1>Dt162g - Moment 5, projekt</h1>
<h4>
Uppgiften ingår i kursen JavaScriptbaserad webbutveckling.</h4>
<br>
<h2>Musiksamligen</h2>
<p>
Hejsan på er!
<br><br><img src="/src/img/profilenb.png" class="profilimg" alt="Bild på Nils">
Jag har en del fritidsintressen och ett av dessa är att skapa och utveckla musik. 
<br>(Jag är inte professionell, utan det är min hobby.)
<br>
Jag spelar främst piano och gitarr, vilket jag 
har nytta av när jag skapar musiken som dels kan klassas in som, elektronic (dance) music. 
</p>
<p>
Med den här <RouterLink to="/guest">>Musiksamlingen</RouterLink>                       
 så är det tänkt att användaren (jag) ska kunna lagra olika uppgifter för låtar som har skapats. 
</p>
</section>

<section>
<br><br>
<h4>I denna uppgift har jag skapat skapat en webbplats som använder en REST-api som sin datakälla.
</h4>
<ul>
<li>Webbplatsen är av typen, Single-Page-Application (SPA) med <a href="https://vuejs.org/" target="_new">>Vue.js</a>. 
</li>
<li>Webbplatsen är tänkt att visa musik som har skapats/utvecklats av mig.
</li>
<li>Webbplatsen har en genomgående grafisk profil och lämpliga bilder.
</li>
<li>Bild-/video-/musikmaterial har jag valt själv och det är jag som har komponerat/fotograferat/filmat, skapat och redigerat
detta, etc. 
</li>
</ul>
</section>
<br>

<section>
<h4>Syftet med uppgiften är att</h4>
<ul>
    <li>Tillämpa de kunskaper som jag tidigare har lärt mig under <a href="https://webbutveckling.miun.se/ramschema" target="_new">>kursen</a>, för att skapa en mer omfattande och användbar webbplats.</li>
    <li> Lära sig att skapa och konsumera webbtjänster med hjälp av Node.js, Express och MongoDB.</li>
    <li>Lära sig att skapa en webb-applikation som använder något JavaScript-baserat frontend-ramverk (React, Angular/AngularJs eller Vue).</li>
    <li>Skapa en en projektrapport som beskriver arbetet med projektuppgiften.</li>
    <li>Skapa en enklare presentation av arbetet i videoformat.</li>
</ul>
<br>
</section>

<section>
<br><br>
<!--TEstar video-->
<video  loop controls >
<source src="#" type="video/mp4" > 
<p>Din webbläsare störder inte HTML5 video.</p>               
</video>
<figcaption>Testar att infoga video.
</figcaption><br>
</section>
</article>
</div>

</template>

<!--Style scoped, gäller för endast denna komponent.-->
<style scoped>
p {
    padding: 0.3em;
}
video, figcaption{
    border-radius: 3em;
    width: 80%;
  margin-left: 10%;
}
</style>
