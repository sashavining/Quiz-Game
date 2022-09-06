const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') 
const bankiController = require('../controllers/banki')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, bankiController.getBankiQuestions)

// router.get('/editBanki', ensureAuth, bankiController.getBankiQuestionsToEdit)

// router.put('/editBanki', ensureAuth, bankiController.editBankiQuestion)


module.exports = router