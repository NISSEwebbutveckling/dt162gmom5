
<template>
<!--DT162G, moment5 -projekt 
    //Nils, 
    //nibo1005@student.miun.se-->
    <!--I denna fil skapas infosidans innehåll.-->
      <br><br>
<div class="card">
<article>
<section>
<h2>Uppgift</h2>
<p>
Uppgiften gick ut på att skapa en webbplats/webbapplikation med valfritt innehåll, som använder en REST-api som sin datakälla.
<br>REST-api'et skulle ha CRUD(Create, Read, Update och Delete)-funktionalitet och lagra sitt data i en MongoDb-databas.
</p>
<h3>Upplägg</h3>
<ul>
<li> REST-api med Node.js och Express.</li>
<li>  Klientwebbplats med Vue där besökare har möjlighet att läsa poster som lagras i MongoDB.</li>
<li>  Användare har möjlighet att via en särksild sida; läsa, uppdatera, skapa och radera poster som lagras i MongoDB.</li>
</ul>
</section>

<section>
<h3>Steg 1 - Utformning av REST-api</h3>
<p>
Började med att planera vilken data som jag tänkte lagra i MongoDb-databasen.
<br> Här nyttjade jag bl.a. Mongoose för att underlätta skapandet av s.k. databasscheman.
<br>
Färdigställde därefter REST-api, CRUD (dvs möjlighet att skapa, läsa, uppdatera och radera poster) m.h.a. Node.js och Express.
<br>
Testkörde sedan denna webbtjänst med Thunder Client via 
<a href="https://code.visualstudio.com/" target ="_new">>Visual Studio Code (VSC)</a>.
</p>
</section>

<section>
<h3>Steg 2 - Utformning av klient-applikation</h3>
<p>Skapade därefter frontend-webbplatsen med det ramverk jag valt som grund (Vue), och använder här REST-api'et från Steg 1 som datakälla.
<br>
Det var här valfritt att välja hur jag skulle dela upp webbplatsen. (Om jag ville ha en webbplats för frontend, eller flera - som exempelvis en fristående webbplats för att skapa, uppdatera och radera poster i databasen, och en annan fristående för att läsa data för dina besökare.)
<br>
Frivilligt var det också att implementera någon form av inloggningssystem i den färdiga lösningen.
</p>
</section>

<section>
<h3>Publicering</h3>
<p>Det finns möjlighet att använda plattformen <a href="https://netlify.com/" target ="_new">>Netlify</a> när det gäller front-end (Vue).
<br>
<a href="https://www.heroku.com/" target ="_new">>Heroku</a> kan användas för back-end (Express) samt
<a href="https://www.mlabs.io/en" target ="_new">>Mlabs</a> för databasen (MongoDB).
<br>
<p>Värt att nämna är dock att det inte är säkert att samtliga tjänster ovan är kostnadsfria.
<br>Källkoden för webbplatsens olika delar har publicerats på webbtjänst för Git.
</p>
</p>
</section>

<section>
<h2>Videopresentation</h2>
<!--TEstar video-->
<video  loop controls >
<source src="#" type="video/mp4" > 
<p>Din webbläsare störder inte HTML5 video.</p>               
</video>
<figcaption>Testar att infoga videopresentationen för uppgiften här. </figcaption>
<br>
<h3>Här följer en kortare videopresentation av projekttet (c:a 10 minuter). 
</h3>
<h4>Saker som kommer att tas upp i filmen är:</h4>
<ul>
<li>Vilket frontend-ramverk som har valts för uppgiften.
</li><li>Hur webbplatsen är strukturerad, i vilka delar (webbtjänst, klient och så vidare).
</li><li>Vad webbplatsen handlar om och vilka funktioner den har.
</li><li>Vilka erfarenheter som jag har dragit av valt ramverk - vad har varit bra? Vilka fördelar har jag haft av detta ramverk för webbplatsen?
</li><li>Ev. andra saker jag finner lämpliga eller vill lyfta fram.
</li>
</ul>
</section>

<section>
<h3>Övrig info om uppgiften</h3>   
<p>Struktur har skapats för webbplatsen med hjälp av Vue-komponenter. 
<br>Jag har arbetat med komponent-specifik (scoped) CSS på lämpligt sätt. <br> 
Jag har även använt CSS-ramverket <a href="https://getbootstrap.com/" target ="_new">>Bootstrap</a> som grund för designen.
</p>
<p>
Denna uppgift är skapad i utbildningssyfte. 
<br>(Jag kan inte ta ansvar över vad du åstadkommer om du ev. nyttjar denna tjänst och jag har inte tid/möjlihget med ev. support.)
</p>  
<br>
</section>
</article>
<!--Div card-->
</div>

</template>
