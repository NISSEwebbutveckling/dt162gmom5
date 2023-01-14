/*Dt162g, Moment5, projekt, Nils
nibo1005@student.miun.se
*/

//Returnerar en funktionsreferens, anropas med express()
var express = require('express');

//Används för att skapa ett nytt routerobjekt.
var router = express.Router();

/* GET, homepage. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//Module är en variabel som representerar den aktuella modulen och export ett objekt.
module.exports = router;
