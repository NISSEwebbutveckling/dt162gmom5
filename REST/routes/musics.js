"use strict";
/*
Dt162g, Moment5, projekt
Nils 
nibo1005@student.miun.se
*/

//En del teori att fördjupa sig inom:
//https://play.miun.se/media/DT162G_MongoDB_Uppfoljning/0_liui244o
//https://play.miun.se/media/DT162G_MongoDB_Introduktion/0_0ro07iqf
//https://expressjs.com/en/guide/error-handling.html
//https://expressjs.com/
//https://zellwk.com/blog/async-await-express
/////////////

//Returnerar en fkn.ref. Anropas med express()
var express = require('express');

//Skapar ny router-obj.
var router = express.Router();

//Bodyparser
const bodyParser = require('body-parser');
router.use(
    bodyParser.urlencoded({
        extended: true
    })
)
router.use(bodyParser.json());


/********************************************* 
 * Initialisera databas och anslutning
 *********************************************/
/*En modul för att använda tillsammans med MongoDB är Mongoose, 
denna kan användas för att skapa databasscheman enligt definierade modeller.*/
//Require, mongoose-pkg.
var mongoose = require('mongoose');
//Ansltn. db. collection=musics, db=testar221222ii.
//Nedan DB, global
//mongoose.connect('mongodb://', { useNewUrlParser: true, useUnifiedTopology: true });
//Nedan DB, local
mongoose.connect('mongodb://localhost/testar221222ii', { useNewUrlParser: true, useUnifiedTopology: true });

// Global anv. av mongoose
mongoose.Promise = global.Promise;
var db = mongoose.connection;

//Meddelande vid ej framgångsrik anslutning.
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    // Db-events-lyssnare. 
    //Meddelande vid framgångsrik anslunting.
    console.log("\nDu är nu ansluten till databasen. :)\n\n http://localhost:3000/ \n\n http://localhost:3000/musics/ \n")
        // Skapar DB-schema
    var musicsSchema = mongoose.Schema({
        name: String,
        genre: String,
        url: String,
        year: Number,
        published: Boolean
    }, { timestamps: true });
    // Skapar modell, collection=musics.
    var Music = mongoose.model('Musics', musicsSchema)

    //////////////////////////ROUTES/////////////////////////////////////////
    /*Route, sätts upp för att svara mot en vald request-metod.
    Det kan  här vara GET, POST, PUT, DELETE.*/
    /********************************************* 
     * Get all musics id
     *********************************************/
    router.get('/', function(req, res, next) {
        Music.find(function(err, musics) {
            //Meddelande i konsolen ang. funna poster i db..
            console.log("Hittade dessa poster: " + " " + musics);
            //Felhantering
            if (err) return console.error(err);
            //JSON, konvertera JavaScript till JavaScriptObjectNotation(JSON)string.
            var jsonObj = JSON.stringify(musics);
            //Innehållstyp, application/json
            res.contentType('application/json');
            //Skicka svar, jsonobj.
            res.send(jsonObj);
        });
    });

    /********************************************* 
     * Get unique musics id
     *********************************************/
    //Get-request, by id
    //Dynamskt paramater, sådant som "länkas efter" /musics/ blir id.
    //OBS!!!
    //För att hitta en spec. kurs kan upg. lösas så att det är det id skapat av mongodb om ska anges,
    //vilket synes nedan.
    //Get-request, by _id
    //Dynamskt paramat, allt som läggs efter localhost:3000/musics/ "blir id".
    router.get('/:id', function(req, res, next) {
        //  console.log(req.params.musicId)
        Music.findById(req.params.id)
            .then(data => {
                //Meddelande 200,
                res.status(200).json(data);
            })
            .catch(err => {
                res.json({ message: err });
            });
    });

    /********************************************* 
     * Ta bort musics m.a.p. id
     *********************************************/

    //Del-request, by id
    router.delete('/:id', function(req, res, next) {
        //Mongoose, tar bort det första dokumentet som matchar villkoren.
        Music.deleteOne({ _id: req.params.id })
            .then(data => {
                console.log("En post togs bort med id : " + " " + req.params.id);
                //JSon-resp.
                res.json(data);
            })
            .catch(err => {
                console.error(err);
                // res.status(404).json({ message: err });
            });
    });


    /********************************************* 
     * lägg till nytt
     *********************************************/
    //Post-request
    router.post('/', function(req, res, next) {
        // Skapa ny.
        //Anropar fkn.
        var music1 = new Music({
            //Skickar in obj.
            name: req.body.name,
            genre: req.body.genre,
            url: req.body.url,
            year: req.body.year,
            published: req.body.published ? req.body.published : false
        });
        //Meddelande i konsolen ang. ändring.
        console.log("Tillagd kurs med namn: " + " " + req.body.name);
        // Sparar music till db.
        music1.save(function(err) {
            //Felhant.
            if (err) return console.error(err);
        });
        //JSON, konvertera JavaScript till JavaScriptObjectNotation(JSON)string.
        var jsonObj = JSON.stringify(music1);
        res.contentType('application/json');
        //Json-resp.
        res.send(jsonObj);

    });


    //////////////////////////////////////////
    /*
       //Motsvarande lösning för asynkr.anrop skulle kunna se ut så här.

        router.post('/', async(req, res) => {
            var music1 = new Music({
                //Skickar in objekt
                musicId: req.body.musicId,
                musicPeriod: req.body.musicPeriod,
                musicName: req.body.musicName
            });
            try {
                const savedMusic = await music1.save();
                res.json(savedMusic);
            } catch (err) {
                res.json({ message: err });

            }
        });
    ////////////////////////////


/********************************************* 
 * Updatera spec. muiscs, m.a.p. id
 *********************************************/

    //Uppdtare m.a.p. id.
    router.put('/:id', (req, res) => {
        Music.updateOne({
                //Object för id och för den specifka infon ska ändras.
                _id: req.params.id
            }, {
                $set: {
                    //Vad som ändras och till vad.
                    name: req.body.name,
                    genre: req.body.genre,
                    url: req.body.url,
                    year: req.body.year,
                    published: req.body.published
                }
            })
            //
            .then(data => {
                //Meddelande.
                res.status(200).json(data);
                res.json(Music.updateOne);
                //Meddelande i konsolen ang. ändring.
                console.log("Ändrat kursen med namn: " + " " + req.body.musicName);
            })
            //Vid fel. callback.
            .catch(err => {
                res.json({ message: err });
            });
    });

}); // DB connection, slut });

//Exporting, router
module.exports = router;
