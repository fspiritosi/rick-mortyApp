const axios = require('axios')

//Promise method

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(result => result.data)
//         .then(data => {
//            let character = {
//                 id: data.id,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species
//            }
//            res.writeHead(200,  {'Content-type' : 'application/json' })
//            res.end(JSON.stringify(character))
//         })
//         .catch(err => 
//             res.writeHead(500, {'Content-type' : 'text/plain'})
//             .end(`Character with ${id} ID not found`)
//             )
// };

//async method

const getCharById = async (req, res) => {
    try{
        const char = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

    let character = {
        id: char.data.id,
        name: char.data.name,
        species: char.data.species,
        gender: char.data.gender,
        image: char.data.image
    }
    res.status(200).send(character)

    }catch(err){
        res.status(400).send(err)
    }

}

module.exports = { getCharById };
