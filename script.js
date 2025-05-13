const questions = [
  // SCIENCE
  {
    theme: "Science - Cœur",
    question: "Quel organe pompe le sang dans tout le corps ?",
    answers: [
      { text: "Le cœur", correct: true },
      { text: "Le foie", correct: false },
      { text: "Le rein", correct: false },
      { text: "Les poumons", correct: false },
    ]
  },
  {
    theme: "Science - Reins",
    question: "Quelle est la fonction principale des reins ?",
    answers: [
      { text: "Filtrer le sang", correct: true },
      { text: "Pomper le sang", correct: false },
      { text: "Produire des hormones", correct: false },
      { text: "Aider à digérer", correct: false },
    ]
  },

  // ALIMENTS
  {
    theme: "Aliment",
    question: "Quel fruit est riche en vitamine C ?",
    answers: [
      { text: "Orange", correct: true },
      { text: "Banane", correct: false },
      { text: "Pomme", correct: false },
      { text: "Cerise", correct: false },
    ]
  },
  {
    theme: "Aliment",
    question: "Quel aliment est une source de protéines ?",
    answers: [
      { text: "Viande", correct: true },
      { text: "Sucre", correct: false },
      { text: "Farine", correct: false },
      { text: "Beurre", correct: false },
    ]
  },

  // VOYAGE / CAPITALLES
  {
    theme: "Capitale",
    question: "Quelle est la capitale de la France ?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Lyon", correct: false },
      { text: "Marseille", correct: false },
      { text: "Toulouse", correct: false },
    ]
  },
  {
    theme: "Capitale",
    question: "Où se trouve la ville de Tokyo ?",
    answers: [
      { text: "Japon", correct: true },
      { text: "Chine", correct: false },
      { text: "Corée", correct: false },
      { text: "Vietnam", correct: false },
    ]
  },
  {
    theme: "Voyage",
    question: "Quelle ville est célèbre pour la Tour Eiffel ?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
      { text: "Londres", correct: false },
      { text: "Berlin", correct: false },
    ]
  },
  {
    theme: "Voyage",
    question: "Quelle est la capitale de l'Algérie ?",
    answers: [
      { text: "Alger", correct: true },
      { text: "Oran", correct: false },
      { text: "Constantine", correct: false },
      { text: "Tlemcen", correct: false },
    ]
  },
  {
    theme: "Voyage",
    question: "Où se trouve la ville de New York ?",
    answers: [
      { text: "États-Unis", correct: true },
      { text: "Canada", correct: false },
      { text: "Mexique", correct: false },
      { text: "Brésil", correct: false },
    ]
  },
  {
    theme: "Voyage",
    question: "Quelle est la capitale de l'Espagne ?",
    answers: [
      { text: "Madrid", correct: true },
      { text: "Barcelone", correct: false },
      { text: "Valence", correct: false },
      { text: "Séville", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const themeElement = document.getElementById("theme");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Suivant";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  themeElement.innerText = currentQuestion.theme;
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  themeElement.innerText = "Résultat final";
  questionElement.innerText = `Votre score est ${score} sur ${questions.length} !`;
  nextButton.innerText = "Rejouer";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
