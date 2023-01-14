
# Dt162g, moment5 - projekt
 Nils, 
 nibo1005@student.miun.se


# Moment5, Projekt
## Uppgiften ingår i kursen ”Javascriptbaserad webbutveckling”

### Syftet med uppgiften är att:
*    Tillämpa de kunskaper som jag tidigare har lärt mig under kursen, för att skapa en mer omfattande och användbar webbplats.
*    Lära sig att skapa och konsumera webbtjänster med hjälp av Node.js, Express och MongoDB.
*    Lära sig att skapa en webb-applikation som använder något JavaScript-baserat frontend-ramverk (React, Angular/AngularJs eller Vue).
*    Skapa en en projektrapport som beskriver arbetet med projektuppgiften.
*    Skapa en enklare presentation av arbetet i videoformat.

##  Steg 1 - Utformning av REST-webbtjänst (API), Express
Började med att planera vilken data som jag tänkte lagra i MongoDb-databasen.
Här nyttjade jag bl.a. Mongoose för att underlätta skapandet av s.k. databasscheman.
Färdigställde därefter REST-api, CRUD (dvs möjlighet att skapa, läsa, uppdatera och radera poster) m.h.a. Node.js och Express.
Testkörde sedan denna webbtjänst med Thunder Client via >Visual Studio Code (VSC). 

## Funktionella krav
### Bl.a. så terfinns följande funktionalitet i lösningen:
*    Att applikationen är en Single-Page-Application med Vues routing-system för navigering.
*    Applikationen är uppbygd med lämpliga komponenter.
*    Att webbtjänsten konsumeras med Fetch API och skrivs ut i lämpligt format.
*    Det finns möjlighet att hämta, radera, lägga till och updatera data genom Fetch-anrop till webbtjänsten.
*    Webbplatsen fungerar väl på stora som små skärmar.
*    Jag har arbetat med komponent-specifik (scoped) CSS på lämpligt sätt.
*    Jag har även använt CSS-ramverket Bootstrap som grund för designen. 
*    README.md fil med beskrivning av ditt repository finns tillgänglig i repot.

----------------


## Projektuppgift
### "Musiksamlingen"
Med den här tjänsten så är det tänkt att användaren ska kunna lagra olika detaljer, exemeplvis namn, årtal, webbblänk för 
låtar som har skapats. Användaren (jag) kan även sätta värdet true eller false, genom en kryssrutan, beronde på
om musiken har publicerats eller inte.

## Länk
En liveversion av tjänsten finns tillgänglig på följande URL: 
[   ]

## Övrigt
### Det finns guider på Internet som förklarar hur du sätter ihop en utvecklingsmiljö baserad på Vuejs, Express, m.m, beroende på OS, etc.
Denna uppgift är skapad i utbildningssyfte.
(Jag kan inte ta ansvar över vad du åstadkommer om du försöker att återskapa detta och jag har inte tid/möjlighet med ev. support.)
Samtliga bilder och video följer ej med detta repo.

## Instruktioner, för att återskapa denna tjänst, klient- och serversidan.
### Vue, frontend

1. Gå in i mappen där det klonade projektet återfinns.
2. Kör kommandot: "npm install" och därefter "npm run dev".
Du bör nu kunna starta upp projektet lokalt, http://localhost:5173/. Stäng genom ctrl+c
3. Det går att köra "npm run build" för att bygga upp projektet.

### Express, MongoDB, back-end (server)
4. Du behöver ha satt upp en databas (MongoDB) som du kan hämta/skicka data mot.
5. Tabell bör skapas enligt nedan.
|Tabell-collection|Fält  |
|--|--|
|musics  | **Pk - _id** (string), **name** (varchar(64), **genre** (varchar(255), **url** (varchar(255), **year** (integer), **published** (tinyint(1)), **createdAt** (timestamp), **updatedAt** (timestamp), **__V** (integer),    |

6. Varje MongoDB-document måste ha ett unikt _id-fält.
Fungerar likt ”primary key” i ett RDBMS.
7. Gå in i mappen där det klonade projektet återfinns.
8. Kör kommandot: "npm install" och därefter "npm start".
Du bör nu kunna starta upp projektet lokalt, http://localhost:3000/. Stäng genom ctrl+c

## Användning
Webbplatsen är uppbygd på så sätt att denna konsumerar webbtjänsten m.h.a. Fetch API.

Om en användare önskar göra en request (GET) för att komma åt datan sparad,
då ser anropet ut så här, lokalt:
http://localhost:3000/musics

Via exemepelvis ThundeClient i VSC, så går det att utföra requests; GET, POST, PUT och DELETE.
Via webbplastsens forumlär så går det att hämta, lägga till, ändra och ta bort poster.

Det går att testa med exempelvis ThunderClient och olika anrop enl. nedan.

|Metod  |Ändpunkt     	         |Beskrivning                                                                           |
|-------|-----------------------|--------------------------------------------------------------------------------------|
|GET    |/musics/	         |Hämtar alla tillgängliga poster.                                                      |
|GET    |/musics/_ID      	  |Hämtar en specifik post med angivet ID.                                               |
|POST   |/musics/	         |Lagrar en ny post. Kräver att ett info skickas med.                        	    |
|PUT    |/musics/_ID  		 |Uppdaterar en existerande post med angivet ID. Kräver att info skickas med.	    |
|DELETE |/musics/_ID    	 |Raderar en post med angivet ID.                                                       |

Infon på klientsidan skickas som JSON med följande struktur, kan komma att se ut så här:

```
    {
    "name": "Testlåten",
    "genre": "Disco",
    "url": "www",
    "year": 20230101,
    "published": true
}

```

Infon på klientsidan tas emot som JSON med följande struktur, kan komma att se ut så här:

```
    {
 "_id": "BSON-ObjectId-format",
  "name": "Testlåten",
    "genre": "Disco",
    "url": "www",
    "year": 20230101,
    "published": true
    "createdAt": "Datum/tidskod",
    "updatedAt": "Datum/tidskod",
    "__v": 0
}

```
(Varje MongoDB-document måste ha ett unikt _id-fält.
Fungerar likt ”primary key” i ett RDBMS.
Anges inget kommer ett unikt id att skapas automatiskt med typen
BSON ObjectId
)

## Publicering
[https://netlify.com]
Plattformen Netlify bör kunna fungera när det gäller front-end (Vue).
[https://www.heroku.com/], för back-end (Express) samt [https://www.mlabs.io/en] för databasen (MongoDB). 
Ev. kostnader/avgifter kan förekomma vid användande av dessa.

## Länk
En liveversion av webbplatsen finns tillgänglig på följande URL: 
[   ]

En liveversion av API:et finns tillgänglig på följande URL: 
[   ]
