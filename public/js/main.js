const deleteBtn = document.querySelectorAll('.del')
const deleteBankiBtn = document.querySelectorAll('.del-banki')

const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
let counter = 0

document.querySelector('.answerBtn').addEventListener('click', showAnswer)
document.querySelector('.questionBtn').addEventListener('click', showQuestion)
document.querySelector('.nextBtn').addEventListener('click', showNext)
document.querySelector('.previousBtn').addEventListener('click', showPrevious)

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteQuestion)
})

Array.from(deleteBankiBtn).forEach((el)=>{
    el.addEventListener('click', deleteBankiQuestion)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})


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

async function deleteBankiQuestion(){
    const questionId = this.parentNode.dataset.id
    try{
        const response = await fetch('deleteBankiQuestion', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'id': questionId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


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