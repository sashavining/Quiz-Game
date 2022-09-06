const BankiQuestion = require('../models/BankiQuestion')

module.exports = {
    getBankiQuestions: async (req,res)=>{
        console.log(req.user)
        try{

            const questions = await BankiQuestion.aggregate([{$sample: {size: 20}}]) // to do: make it return a random 20 (w/aggregate?)
            const completedBanki = await BankiQuestion.countDocuments({userId:req.user.id, completed: false})
            res.render('banki.ejs', {questions: questions, left: completedBanki, user: req.user, questionsJson: JSON.stringify(questions)})
        } catch(err){
            console.log(err)
        }
    },
    getBankiQuestionsToEdit: async (req,res)=>{
        console.log(req.user)
        try{
            const questions = await BankiQuestion.find({}) // to do: make it return a random 20 (w/aggregate?)
            res.render('editBankiQuestions.ejs', {questions: questions, user: req.user})
        } catch(err){
            console.log(err)
        }
    },
    editBankiQuestion: async (req, res)=>{
        console.log(`editing ${req.body.id} with ${req.body.question} and ${req.body.answer}`)
        try{
            await BankiQuestion.findOneAndUpdate({_id:req.body.id},{
                Question: req.body.question,
                Answer: req.body.answer
            })
            console.log('Edited')
            res.json('Edited!')
        }catch(err){
            console.log(err)
        }
    }
}    