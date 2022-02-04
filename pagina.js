const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Recomeçar'
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

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Quantas libertadores o cruzeiro tem?',
    answers: [
      { text: '3', correct: false },
      { text: '5', correct: false },
      { text: '1', correct: false },
      { text: '2', correct: true }
    ]
  },
  {
    question: 'Quantas Copas do Brasil o cruzeiro tem?',
    answers: [
      { text: '6', correct: true },
      { text: '5', correct: false },
      { text: '4', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'Qual é o segundo maior de Minas?',
    answers: [
      { text: 'Tupi', correct: false },
      { text: 'Tricordiano', correct: false },
      { text: 'America-Mg', correct: true },
      { text: 'Coimbra', correct: false }
    ]
  },
  {
    question: 'O Cruzeiro é?',
    answers: [
      { text: 'seleção', correct: true },
      { text: 'maior time do mundo', correct: true },
      { text: 'melhor que o timeco de vespasiano', correct: true },
      { text: 'GIGANTESCO', correct: true }
    ]
  },
  {
   question: 'Quem mais fez gols pelo clube?',
    answers: [
      { text: 'Dirceu lopes', correct: false },
      { text: 'Tostão', correct: true },
      { text: 'Wellington Paulista', correct: false },
      { text: 'Marcelo Ramos', correct: false }
    ]
  },
  {
    question: 'Em que ano foi fundado a Sociedade Esportiva Palestra Itália ( Cruzeiro )?',
     answers: [
       { text: '1912', correct: false },
       { text: '1921', correct: true },
       { text: '1935', correct: false },
       { text: '1945', correct: false }
     ]
   },
   {
    question: 'Existe algum time maior que o Cruzeiro?',
     answers: [
       { text: 'NÃO', correct: true },
       { text: 'Talvez', correct: false },
       { text: 'Obviamente que não', correct: true },
       { text: 'kkkkkk...Claro que não', correct: true }
     ]
   },
   {
    question: 'Qual foi a data do Primeiro título do Cruzeiro?',
     answers: [
       { text: '30 de julho de 1976', correct: false },
       { text: '12 de junho de 1954', correct: false },
       { text: '16 de outubro de 1987', correct: false },
       { text: '30 de novembro de 1966', correct: true }
     ]
   },
   {
    question: 'Complete:  Amamos o Cruzeiro é oque interessa. O mundo inteiro ....... Seremos campeões e não se esqueça ',
     answers: [
       { text: '"... Treme em ver a Besta Negra...', correct: false },
       { text: '"... Que se enlouqueça...', correct: false },
       { text: '"... Teme a Raposa Negra...', correct: false },
       { text: '"... Teme lá Bestia Negra..', correct: true }
     ]
   },

    
]