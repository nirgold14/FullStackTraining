var express = require('express');
var bodyParser = require('body-parser');

var app = express();

/*.use is a middleware where the request pass before the actual destination*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
})) /*make sure the incoming data is valid*/


var ingerdients = [
    {
        "id": "232kAk",
        "text": "Eggs",
    },
    {
        "id": "dkP345",
        "text": "Milk",
    },
    {
        "id": "dkcuu7",
        "text": "Bacon",
    },
    {
        "id": "73hdy",
        "text": "Frog Legs",
    }
];


app.get('/ingredients', function (req, res) {
    /*(from where the request came, req from user, res to user)*/

    res.send(ingerdients);

});

app.put('/ingredients/:ingerdientId', function (req, res) {

    var newText = req.body.text;
    if (!newText || newText === "") {
        res.status(500).send({
            error: "You must provide ingerdient text"
        })
    } else {
        var objectFound = false;
        for (var x = 0; x < ingerdients.length; x++) {
            var ing = ingerdients[x];
            if (ing.id === req.params.ingerdientId) {
                ingerdients[x].text = newText;
                objectFound = true;
                break;
            }
        }
        if (!objectFound) {
            res.status(500).send({
                error: "Ingrediant id not found"
            })
        } else {
            res.send(ingerdients);
        }
    }

});

app.post('/ingredients', function (req, res) {
    var ingerdient = req.body;
    if (!ingerdient || ingerdient.text === "") {
        res.status(500).send({
            error: "Your ingerdient must have text"
        });
    } else {
        ingerdients.push(ingerdient);
        res.status(200).send(ingerdients);
    }

});

app.listen(3000, function () {
    /*Opening a connection to specific port*/
    console.log("First API is running at port 3000");
});