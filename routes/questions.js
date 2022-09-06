const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 
const questionsController = require('../controllers/questions') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, questionsController.getQuestions)

router.post('/createQuestion', questionsController.createQuestion)

router.post('/createSet', questionsController.createSet)

router.put('/markComplete', questionsController.markComplete)

router.put('/markIncomplete', questionsController.markIncomplete)

router.put('/editQuestion', questionsController.editQuestion)

router.delete('/deleteQuestion', questionsController.deleteQuestion)

router.get('/:questionSetId', ensureAuth, questionsController.getQuestionSet)



module.exports = router