const deleteBtn = document.querySelectorAll('.del')

const deleteBankiBtn = document.querySelectorAll('.del-banki')

const editBankiModalBtn = document.querySelectorAll('.edit-banki-modal-open')
const editBankiSubmitButton = document.querySelector("#edit-banki-question-submit")

const editQuestionModalBtn = document.querySelectorAll('.edit-modal-open')
const editQuestionSubmitButton = document.querySelector("#edit-question-submit")


const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
let counter = 0

if (document.querySelector('.answerBtn')) {
    document.querySelector('.answerBtn').addEventListener('click', showAnswer)
    document.querySelector('.questionBtn').addEventListener('click', showQuestion)
    document.querySelector('.nextBtn').addEventListener('click', showNext)
    document.querySelector('.previousBtn').addEventListener('click', showPrevious)
}

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteQuestion)
})
if (editBankiSubmitButton) {
    Array.from(editBankiModalBtn).forEach((el)=>{
        el.addEventListener('click', openEditBankiPopUp)
    })
    editBankiSubmitButton.addEventListener('click', submitEditBanki)
}


Array.from(editQuestionModalBtn).forEach((el)=>{
    el.addEventListener('click', openEditQuestionPopUp)
})


Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

editQuestionSubmitButton.addEventListener('click', submitEditQuestion)


function showAnswer() {
    document.querySelector('.card__side--front').style.transform = 'rotateY(-180deg)'
    document.querySelector('.card__side--back').style.transform = 'rotateY(0)'
}
function showQuestion() {
    document.querySelector('.card__side--front').style.transform = 'rotateY(0)'
    document.querySelector('.card__side--back').style.transform = 'rotateY(180deg)'
}

function showNext() {
    counter === questionsArr.length - 1 ? counter = 0 : counter++
    document.querySelector('.card__subject').innerText = questionsArr[counter].Question
    document.querySelector('.card__details').innerText = questionsArr[counter].Answer
    showQuestion()

}
function showPrevious() {
    counter === 0 ? counter = questionsArr.length - 1 : counter--
    document.querySelector('.card__subject').innerText = questionsArr[counter].Question
    document.querySelector('.card__details').innerText = questionsArr[counter].Answer
    showQuestion()
    
}


function openEditBankiPopUp() {
    let questionText = this.parentNode.dataset.question
    let answerText = this.parentNode.dataset.answer
    const questionId = this.parentNode.dataset.id


    const editBankiQuestionInput = document.querySelector("#edit-banki-question")
    const editBankiAnswerInput = document.querySelector("#edit-banki-question-answer")
    const modal = document.querySelector('#edit-banki-question-modal')

    editBankiQuestionInput.value = questionText
    editBankiAnswerInput.value = answerText
    modal.dataset.id = questionId
}

function openEditQuestionPopUp() {
    let questionText = this.parentNode.dataset.question
    let answerText = this.parentNode.dataset.answer
    const questionId = this.parentNode.dataset.id


    const editQuestionInput = document.querySelector("#edit-question")
    const editAnswerInput = document.querySelector("#edit-question-answer")
    const modal = document.querySelector('#edit-question-modal')

    editQuestionInput.value = questionText
    editAnswerInput.value = answerText
    modal.dataset.id = questionId
}


async function submitEditBanki() {
    let questionText = this.parentNode.dataset.question
    let answerText = this.parentNode.dataset.answer
    const questionId = document.querySelector('#edit-banki-question-modal').dataset.id

    const editBankiQuestionInput = document.querySelector("#edit-banki-question").value || questionText
    const editBankiAnswerInput = document.querySelector("#edit-banki-question-answer").value || answerText

    try{
        const response = await fetch('editBanki', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': questionId,
                'question': editBankiQuestionInput,
                'answer': editBankiAnswerInput
            })
        }).then(response => window.location = response.url)
        .catch(err => console.log(err))
        // const data = await response.json()
        // console.log(data)
    } catch(err){
        console.log(err)
    }
}

async function submitEditQuestion() {
    let questionText = this.parentNode.dataset.question
    let answerText = this.parentNode.dataset.answer
    const questionId = document.querySelector('#edit-question-modal').dataset.id

    const editBankiQuestionInput = document.querySelector("#edit-question").value || questionText
    const editBankiAnswerInput = document.querySelector("#edit-question-answer").value || answerText

    try{
        const response = await fetch('editQuestion', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': questionId,
                'question': editBankiQuestionInput,
                'answer': editBankiAnswerInput
            })
        }).then(response => window.location = response.url)
        .catch(err => console.log(err))
        // const data = await response.json()
        // console.log(data)
    } catch(err){
        console.log(err)
    }
}


async function deleteQuestion(){
    const questionId = this.parentNode.dataset.id
    try{
        const response = await fetch('deleteQuestion', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'questionIdFromJSFile': questionId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// async function deleteBankiQuestion(){
//     const questionId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('deleteBankiQuestion', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'id': questionId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }


async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}