const questions = [
    { question: 'What is the capital of France?', answers: [{ text: 'Berlin', correct: false }, { text: 'Madrid', correct: false }, { text: 'Paris', correct: true }, { text: 'Lisbon', correct: false }] },
    { question: 'What is 2 + 2?', answers: [{ text: '3', correct: false }, { text: '4', correct: true }, { text: '5', correct: false }, { text: '6', correct: false }] },
    { question: 'What is the past tense of "go"?', answers: [{ text: 'Goed', correct: false }, { text: 'Went', correct: true }, { text: 'Gone', correct: false }, { text: 'Going', correct: false }] },
    { question: 'Who wrote "To Kill a Mockingbird"?', answers: [{ text: 'Harper Lee', correct: true }, { text: 'Mark Twain', correct: false }, { text: 'F. Scott Fitzgerald', correct: false }, { text: 'Ernest Hemingway', correct: false }] },
    { question: 'What is the largest planet in our solar system?', answers: [{ text: 'Earth', correct: false }, { text: 'Jupiter', correct: true }, { text: 'Saturn', correct: false }, { text: 'Mars', correct: false }] },
    { question: 'What is the chemical symbol for water?', answers: [{ text: 'O2', correct: false }, { text: 'H2O', correct: true }, { text: 'CO2', correct: false }, { text: 'NaCl', correct: false }] },
    { question: 'What is the fastest land animal?', answers: [{ text: 'Lion', correct: false }, { text: 'Cheetah', correct: true }, { text: 'Horse', correct: false }, { text: 'Elephant', correct: false }] },
    { question: 'What is the smallest prime number?', answers: [{ text: '0', correct: false }, { text: '1', correct: false }, { text: '2', correct: true }, { text: '3', correct: false }] },
    { question: 'Who painted the Mona Lisa?', answers: [{ text: 'Vincent van Gogh', correct: false }, { text: 'Leonardo da Vinci', correct: true }, { text: 'Pablo Picasso', correct: false }, { text: 'Claude Monet', correct: false }] },
    { question: 'What is the square root of 64?', answers: [{ text: '6', correct: false }, { text: '7', correct: false }, { text: '8', correct: true }, { text: '9', correct: false }] },
    { question: 'What is the chemical symbol for gold?', answers: [{ text: 'Au', correct: true }, { text: 'Ag', correct: false }, { text: 'Pb', correct: false }, { text: 'Pt', correct: false }] },
    { question: 'What is the tallest mountain in the world?', answers: [{ text: 'K2', correct: false }, { text: 'Kangchenjunga', correct: false }, { text: 'Mount Everest', correct: true }, { text: 'Lhotse', correct: false }] },
    { question: 'Who developed the theory of relativity?', answers: [{ text: 'Isaac Newton', correct: false }, { text: 'Albert Einstein', correct: true }, { text: 'Galileo Galilei', correct: false }, { text: 'Nikola Tesla', correct: false }] },
    { question: 'What is the largest ocean on Earth?', answers: [{ text: 'Atlantic Ocean', correct: false }, { text: 'Indian Ocean', correct: false }, { text: 'Arctic Ocean', correct: false }, { text: 'Pacific Ocean', correct: true }] },
    { question: 'What is the capital city of Japan?', answers: [{ text: 'Seoul', correct: false }, { text: 'Beijing', correct: false }, { text: 'Tokyo', correct: true }, { text: 'Bangkok', correct: false }] },
    { question: 'What is the speed of light?', answers: [{ text: '300,000 km/s', correct: true }, { text: '150,000 km/s', correct: false }, { text: '200,000 km/s', correct: false }, { text: '250,000 km/s', correct: false }] },
    { question: 'Who discovered penicillin?', answers: [{ text: 'Alexander Fleming', correct: true }, { text: 'Marie Curie', correct: false }, { text: 'Louis Pasteur', correct: false }, { text: 'Albert Einstein', correct: false }] },
    { question: 'What is the hardest natural substance on Earth?', answers: [{ text: 'Diamond', correct: true }, { text: 'Gold', correct: false }, { text: 'Iron', correct: false }, { text: 'Silver', correct: false }] },
    { question: 'What is the largest country by area?', answers: [{ text: 'China', correct: false }, { text: 'USA', correct: false }, { text: 'Russia', correct: true }, { text: 'Canada', correct: false }] },
    { question: 'Who invented the telephone?', answers: [{ text: 'Thomas Edison', correct: false }, { text: 'Alexander Graham Bell', correct: true }, { text: 'Nikola Tesla', correct: false }, { text: 'Albert Einstein', correct: false }] },
    { question: 'What is the main ingredient in guacamole?', answers: [{ text: 'Tomato', correct: false }, { text: 'Onion', correct: false }, { text: 'Avocado', correct: true }, { text: 'Pepper', correct: false }] },
    { question: 'What is the chemical symbol for sodium?', answers: [{ text: 'Na', correct: true }, { text: 'N', correct: false }, { text: 'S', correct: false }, { text: 'So', correct: false }] },
    { question: 'What is the largest continent?', answers: [{ text: 'Africa', correct: false }, { text: 'Asia', correct: true }, { text: 'Europe', correct: false }, { text: 'Australia', correct: false }] },
    { question: 'Who was the first president of the United States?', answers: [{ text: 'Abraham Lincoln', correct: false }, { text: 'George Washington', correct: true }, { text: 'Thomas Jefferson', correct: false }, { text: 'John Adams', correct: false }] },
    { question: 'What is the boiling point of water?', answers: [{ text: '50°C', correct: false }, { text: '100°C', correct: true }, { text: '200°C', correct: false }, { text: '150°C', correct: false }] },
    { question: 'Who wrote "1984"?', answers: [{ text: 'George Orwell', correct: true }, { text: 'Aldous Huxley', correct: false }, { text: 'Ray Bradbury', correct: false }, { text: 'H.G. Wells', correct: false }] },
    { question: 'What is the smallest country in the world?', answers: [{ text: 'Monaco', correct: false }, { text: 'Vatican City', correct: true }, { text: 'San Marino', correct: false }, { text: 'Liechtenstein', correct: false }] },
    { question: 'What is the main gas found in the air we breathe?', answers: [{ text: 'Oxygen', correct: false }, { text: 'Nitrogen', correct: true }, { text: 'Carbon Dioxide', correct: false }, { text: 'Hydrogen', correct: false }] },
    { question: 'What is the hardest rock?', answers: [{ text: 'Granite', correct: false }, { text: 'Marble', correct: false }, { text: 'Diamond', correct: true }, { text: 'Limestone', correct: false }] }
];

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz-container');
const startContainer = document.getElementById('start-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timerElement = document.getElementById('timer');
const endMessage = document.getElementById('end-message');

let shuffledQuestions, currentQuestionIndex;
let timer;
let timeLeft = 120; // 2 minutos

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', restartGame);

function startGame() {
    startButton.classList.add('hide');
    startContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quizContainer.classList.remove('hide');
    timerElement.textContent = `Tiempo restante: 02:00`;
    setNextQuestion();
    startTimer();
}

function startTimer() {
    timeLeft = 120;
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Tiempo restante: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        endGame();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function endGame() {
    clearInterval(timer);
    quizContainer.classList.add('hide');
    endMessage.classList.remove('hide');
}

function restartGame() {
    endMessage.classList.add('hide');
    startContainer.classList.remove('hide');
    startButton.classList.remove('hide');
}
