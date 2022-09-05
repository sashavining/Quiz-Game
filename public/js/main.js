const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')


document.querySelector('.answerBtn').addEventListener('click', showAnswer)
document.querySelector('.questionBtn').addEventListener('click', showQuestion)
document.querySelector('.nextBtn').addEventListener('click', showNext)
document.querySelector('.previousBtn').addEventListener('click', showPrevious)

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteQuestion)
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
    //not yet implimented
}
function showPrevious() {
    // not yet implimented
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