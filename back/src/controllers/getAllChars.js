const {Character} = require('../DB_connection')

const getAllChars = async (req, res) => {
    try {
        const allCharacters = await Character.findAll()
        return res.status(200).json(allCharacters);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = getAllChars;