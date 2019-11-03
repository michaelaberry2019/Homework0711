alert("Start Quiz")
var startButton = document.getElementById('start-btn')
var questionContinerElement = document.getElementById
('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort (() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContinerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element)
element.classList.remove('correct')
element.classList.remove('wrong')
var questions = [
    {
        question: 'Did you finish w1?',
        answers: [
            { text: 'yes', correct: true },
            { text: 'no', correct: false },
        ]
    },
    {
        question: 'Did you finish w2?',
        answers: [
            { text: 'yes', correct: true },
            { text: 'no', correct: false },
        ]
    },
    {
        question: 'Did you finish w3?',
        answers: [
            { text: 'yes', correct: true },
            { text: 'no', correct: false },
        ]
    },
    {
        question: 'Did you finish w4?',
        answers: [
            { text: 'yes', correct: true },
            { text: 'no', correct: false },
        ]
    },
]