const questions = [
  // SCIENCE - CŒUR
 {
    theme: "Relation - amour",
    question: "Date d'anniversaire de Nesrine  ?",
    answers: [
      { text: "Le 15/08/2004", correct: true },
      { text: "Le 15/09/2004", correct: false },
      { text: "Le 05/08/2004", correct: false },
      { text: "Le 15/08/2024", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Date d'anniversaire de Wail  ?",
    answers: [
      { text: "Le 06/07/1998", correct: true },
      { text: "Le 07/07/1998", correct: false },
      { text: "Le 08/07/2004", correct: false },
      { text: "Le 05/07/1998", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Prénom de notre fille  ?",
    answers: [
      { text: "Ellyne lilya", correct: true },
      { text: "Ellyne", correct: false },
      { text: "Ellyne Lujain", correct: false },

    ]
  },
 {
    theme: "Relation - amour",
    question: "Prénom de notre deuxieme fille  ?",
    answers: [
      { text: "lujain rahaf", correct: true },
      { text: "lujain ", correct: false },
      { text: "lujain ellye", correct: false },

    ]
  },
 {
    theme: "Relation - amour",
    question: "Que préfére nesrine ?",
    answers: [
      { text: "salé plus que sucré", correct: true },
      { text: "Sucrée plus que salé", correct: false },
      { text: "mixte des deux", correct: false },
      { text: "grignotage", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Que préfére wail ?",
    answers: [
      { text: "salé plus que sucré", correct: true },
      { text: "Sucrée plus que salé", correct: false },
      { text: "mixte des deux", correct: false },
      { text: "grignotage", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Que préfére  wail ?",
    answers: [
      { text: "pizza sauce blanche", correct: true },
      { text: "chawarma", correct: false },
      { text: "soufflé", correct: false },
      { text: "makloub poulet", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Que préfére Nesrine ?",
    answers: [
      { text: "pizza sauce blanche", correct: false },
      { text: "burger", correct: false },
      { text: "tacos gratiné", correct: true },
      { text: "méxicain", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Que n'aime pas Nesrine ?",
    answers: [
      { text: "sardine", correct: true },
      { text: "haricot", correct: false },
      { text: "crevette", correct: false },
      { text: "Saumon", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Que n'aime pas Wail ?",
    answers: [
      { text: "mloukhiya", correct: true },
      { text: "frite", correct: false },
      { text: "pizza", correct: false },
      { text: "Saumon", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Que préfére Nesrine en général?",
    answers: [
      { text: "gout chocolat ", correct: true },
      { text: "gout fraise", correct: false },
      { text: "gout vanilla", correct: false },
      { text: "gout citron", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Que préfére Nesrine fi 9ahwa le plus?",
    answers: [
      { text: "chocolat chaud ", correct: true },
      { text: "lait", correct: false },
      { text: "thé", correct: false },
      { text: "café", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "couleur préféré de nesrine",
    answers: [
      { text: "rose + violet ", correct: true },
      { text: "vert + blanc", correct: false },
      { text: "noir + beige", correct: false },
      { text: "rouge + violet", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "couleur préféré de wail",
    answers: [
      { text: "rose + blanc ", correct: true },
      { text: "vert + bleue", correct: false },
      { text: "noir + beige", correct: false },
      { text: "noir + violet", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "quelle habille préfére nesrine",
    answers: [
      { text: "les robe ", correct: true },
      { text: "tenue classic simple", correct: false },
      { text: "pantalon", correct: false },
      { text: "rien de tout cela", correct: false },
    ]
  },
 {
    theme: "Relation - amour",
    question: "Nesrine tbghi boisson",
    answers: [
      { text: "chaude ", correct: true },
      { text: "froide", correct: false },

    ]
  },
 {
    theme: "Relation - amour",
    question: "que resprésente nesrine a wail ?",
    answers: [
      { text: "Tout elle est ca vie", correct: true },
      { text: "une femme qu'il aime ", correct: true },
      { text: "ca fille et maman", correct: true },
      { text: "sont oxygene", correct: true },
    ]
  }
 ];

// Éléments du DOM
const questionElement = document.getElementById("question");
const themeElement = document.getElementById("theme");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.createElement("div");
const progressBar = document.createElement("div");
const progressContainer = document.createElement("div");

// Variables d'état
let currentQuestionIndex = 0;
let score = 0;
let quizEnded = false;

// Initialisation du quiz
function initQuiz() {
  // Configuration de l'affichage du score
  scoreDisplay.id = "score-display";
  updateScore();
  
  // Configuration de la barre de progression
  progressContainer.id = "progress-container";
  progressBar.id = "progress-bar";
  progressContainer.appendChild(progressBar);
  
  // Insertion des éléments dans le DOM
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.insertBefore(progressContainer, themeElement);
  quizContainer.insertBefore(scoreDisplay, themeElement);
  
  startQuiz();
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizEnded = false;
  updateScore();
  updateProgress();
  nextButton.textContent = "Suivant";
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  
  themeElement.textContent = currentQuestion.theme;
  questionElement.textContent = currentQuestion.question;

  // Mélanger les réponses pour plus de variété
  const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
  
  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  // Supprime tous les boutons de réponse
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  
  // Cache le bouton Suivant
  nextButton.style.display = "none";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  
  // Applique les styles en fonction de la réponse
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    updateScore();
  } else {
    selectedBtn.classList.add("incorrect");
    // Trouve et met en évidence la bonne réponse
    highlightCorrectAnswer();
  }

  // Désactive tous les boutons
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
  });

  // Affiche le bouton Suivant
  nextButton.style.display = "block";
}

function highlightCorrectAnswer() {
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct-highlight");
    }
  });
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}/${questions.length}`;
}

function updateProgress() {
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function handleNextButton() {
  currentQuestionIndex++;
  updateProgress();
  
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizEnded = true;
  resetState();
  
  themeElement.textContent = "Résultat final";
  questionElement.innerHTML = `
    <div class="result-container">
      <h2>Votre score final</h2>
      <div class="final-score">${score} / ${questions.length}</div>
      <div class="percentage">${Math.round((score / questions.length) * 100)}% de bonnes réponses</div>
      <div class="feedback">${getFinalFeedback()}</div>
    </div>
  `;
  
  nextButton.textContent = "Recommencer";
  nextButton.style.display = "block";
}

function getFinalFeedback() {
  const percentage = (score / questions.length) * 100;
  
  if (percentage >= 80) return "Excellent habibti ";
  if (percentage >= 60) return "Bon score martie <3";
  if (percentage >= 40) return "Pas mal bébé .";
  return "ohhhh :/ .";
}

// Événements
nextButton.addEventListener("click", () => {
  if (quizEnded) {
    startQuiz();
  } else {
    handleNextButton();
  }
});

// Démarrer le quiz
initQuiz();