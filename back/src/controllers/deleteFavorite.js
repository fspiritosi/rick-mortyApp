const { Favorite } = require('../DB_connection');

const deleteFavorite = async (req, res) => {
    try {
        const {id} = req.params;

        const favoriteDeleted = await Favorite.findByPk(id);
        if(!favoriteDeleted) return res.status(404).json({message: `Id ${id} is not a Favorite `});

        favoriteDeleted.destroy();
        res.status(200).json({message: `Favorite ${id}m deleted successfuly`})

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

module.exports = deleteFavorite;