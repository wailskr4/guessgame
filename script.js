const questions = [
  // SCIENCE - CŒUR
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
    theme: "Relation - amour",
    question: "Date d'anniversaire de Nesrine  ?",
    answers: [
      { text: "Le 15/08/2004", correct: true },
      { text: "Le 05/08/2004", correct: false },
      { text: "Le 15/11/2000", correct: false },
      { text: "Le 05/08/1998", correct: false },
    ]
  },

  {
    theme: "Science - Cœur",
    question: "Combien de cavités contient le cœur humain ?",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false }
    ]
  },
  {
    theme: "Science - Cœur",
    question: "Quel est le rôle principal du cœur ?",
    answers: [
      { text: "Digérer les aliments", correct: false },
      { text: "Pomper le sang", correct: true },
      { text: "Produire de l'oxygène", correct: false },
      { text: "Contrôler les muscles", correct: false }
    ]
  },
  {
    theme: "Science - Cœur",
    question: "Dans quel organe le sang est-il oxygéné ?",
    answers: [
      { text: "Le foie", correct: false },
      { text: "Le rein", correct: false },
      { text: "Les poumons", correct: true },
      { text: "Le cœur", correct: false }
    ]
  },
  {
    theme: "Science - Cœur",
    question: "Comment appelle-t-on les vaisseaux qui apportent le sang au cœur ?",
    answers: [
      { text: "Veines", correct: true },
      { text: "Artères", correct: false },
      { text: "Capillaires", correct: false },
      { text: "Nerfs", correct: false }
    ]
  },

  // SCIENCE - REINS
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
  {
    theme: "Science - Reins",
    question: "Combien de reins possède normalement un humain ?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false }
    ]
  },
  {
    theme: "Science - Reins",
    question: "Quel est le rôle principal des reins ?",
    answers: [
      { text: "Filtrer le sang", correct: true },
      { text: "Produire du sang", correct: false },
      { text: "Pomper le sang", correct: false },
      { text: "Digérer la nourriture", correct: false }
    ]
  },
  {
    theme: "Science - Reins",
    question: "Comment s'appelle le liquide produit par les reins ?",
    answers: [
      { text: "Le sang", correct: false },
      { text: "La bile", correct: false },
      { text: "L'urine", correct: true },
      { text: "La salive", correct: false }
    ]
  },
  {
    theme: "Science - Reins",
    question: "Quelle machine remplace les reins en cas de problème grave ?",
    answers: [
      { text: "Un respirateur", correct: false },
      { text: "Un défibrillateur", correct: false },
      { text: "Une dialyse", correct: true },
      { text: "Un pacemaker", correct: false }
    ]
  },

  // SCIENCE - CORPS HUMAIN
  {
    theme: "Science - Corps humain",
    question: "Combien d'os possède un adulte humain ?",
    answers: [
      { text: "206", correct: true },
      { text: "305", correct: false },
      { text: "150", correct: false },
      { text: "180", correct: false }
    ]
  },
  {
    theme: "Science - Corps humain",
    question: "Quel organe contrôle le corps humain ?",
    answers: [
      { text: "Le cœur", correct: false },
      { text: "Le foie", correct: false },
      { text: "Le cerveau", correct: true },
      { text: "Les reins", correct: false }
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