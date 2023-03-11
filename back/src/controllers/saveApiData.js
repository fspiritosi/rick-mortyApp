const axios = require('axios')
const {Character} = require('../DB_connection.js');


const getApiData = async () => {
    
    
    try {
        let allCharactersInfoApi = [];

        for(let i = 1; i < 6; i++){
            const apiData =  await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            allCharactersInfoApi.push(apiData);
        }
        allCharactersInfoApi = await Promise.all(allCharactersInfoApi);

        let allCharacterMapped = allCharactersInfoApi.map(response => response.data.results.map(charrac => {
            return{
                id: charrac.id,
                name: charrac.name,
                species: charrac.species,
                status: charrac.status, 
                origin: charrac.origin.name,
                gender: charrac.gender,
                image: charrac.image
            }
        }))

        let allCharacters = allCharacterMapped.flat()

        return allCharacters;

    } catch (error) {
        return {error: error.message}
    }
    
}

const saveApiData = async () => {
    try {
        const characterAll = await getApiData();
        await Character.bulkCreate(characterAll);
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = saveApiData;