var express = require('express');
var router = express.Router();
const sequelize = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET CREDITS

router.get('/credits', function(req, res, next) {
  res.render('credits', { author: 'Blanca Baselga' });
});

// GET QUIZZES

router.get('/quizzes', function(req, res, next) {

	//const quizzes = sequelize.models.quiz.findAll();
	//res.render('quizzes', { quizzes });
sequelize.models.quiz.findAll().
    then( quizzes => {
        res.render('quizzes', {quizzes});
    })
        .catch(error => {
        });
});

module.exports = router;
