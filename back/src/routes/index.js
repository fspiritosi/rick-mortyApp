const { Router } = require('express');

const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail')
const getFavorite = require("../controllers/getFavorite");
const postFavorite = require("../controllers/postFavorite");
const deleteFavorite = require("../controllers/deleteFavorite");
const postFav = require('../controllers/postFav.js')
const getAllChars = require('../controllers/getAllChars')

const router = Router();

router.get('/character/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.get('/fav', getFavorite);
router.post('/fav', postFavorite);
router.delete('/fav/:id', deleteFavorite)
router.post('/fav', postFav);

module.exports = { router }