const { default: axios } = require('axios');
const { json } = require('body-parser');
const express = require('express');
const { getCharById } = require('./controllers/getCharById');
const app = express();

const PORT = 3001;
const fav = [];


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));




//routes

app.get("//rickandmorty/character/:id", async (req, res)=> {
     
    const id = req.params

    getCharById(res, id)
   
});

app.get("/rickandmorty/detail/:{detailId}", async (req, res) => {
    const detailCharacter = await axios.get(`https://rickandmorty/detail/${detailId}`);

    let charDetail = {
        name: detailCharacter.name,
        status: detailCharacter.status,
        species: detailCharacter.species,
        gender: detailCharacter.gender,
        origin: detailCharacter.origin,
        image: detailCharacter.image
    }

    res.json(detailCharacter)
})

app.get("/rickandmorty/fav", (req, res) => {});

app.post("/rickandmorty/fav", (req, res) => {});

app.delete("/rickandmorty/fav/${id}", (req, res) => {});

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})