const questions = [
  // CULTURE GÉNÉRALE - MÉDECINE
{
  theme: "Médecine",
  question: "Quel est le plus grand organe du corps humain ?",
  answers: [
    { text: "La peau", correct: true },
    { text: "Le foie", correct: false },
    { text: "Le cerveau", correct: false },
    { text: "Les poumons", correct: false },
  ]
},
  {
  theme: "Médecine",
  question: "Quel type de sang est considéré comme donneur universel ?",
  answers: [
    { text: "O négatif", correct: true },
    { text: "A positif", correct: false },
    { text: "B négatif", correct: false },
    { text: "AB positif", correct: false },
  ]
},
  {
    theme: "Médecine",
    question: "Combien d’os possède le corps humain adulte ?",
    answers: [
      { text: "206", correct: true },
      { text: "210", correct: false },
      { text: "201", correct: false },
      { text: "190", correct: false },
    ]
  },
  {
    theme: "Médecine",
    question: "Quel est le rôle principal des globules rouges ?",
    answers: [
      { text: "Transporter l’oxygène", correct: true },
      { text: "Combattre les infections", correct: false },
      { text: "Digérer les graisses", correct: false },
      { text: "Produire des hormones", correct: false },
    ]
  },
  {
    theme: "Médecine",
    question: "Quel organe est affecté par l’hépatite ?",
    answers: [
      { text: "Le foie", correct: true },
      { text: "Le cœur", correct: false },
      { text: "Le pancréas", correct: false },
      { text: "Les reins", correct: false },
    ]
  },
  {
    theme: "Médecine",
    question: "Quelle vitamine est produite par la peau au soleil ?",
    answers: [
      { text: "Vitamine D", correct: true },
      { text: "Vitamine A", correct: false },
      { text: "Vitamine C", correct: false },
      { text: "Vitamine B12", correct: false },
    ]
  },

  // CULTURE GÉNÉRALE - VOYAGE
  {
    theme: "Voyage",
    question: "Quel est le pays le plus visité au monde ?",
    answers: [
      { text: "France", correct: true },
      { text: "Italie", correct: false },
      { text: "États-Unis", correct: false },
      { text: "Espagne", correct: false },
    ]
  },
  {
    theme: "Voyage",
    question: "Dans quel pays se trouve la ville de Kyoto ?",
    answers: [
      { text: "Japon", correct: true },
      { text: "Chine", correct: false },
      { text: "Corée du Sud", correct: false },
      { text: "Thaïlande", correct: false },
    ]
  },
  {
    theme: "Voyage",
    question: "Quelle est la capitale du Canada ?",
    answers: [
      { text: "Ottawa", correct: true },
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Montréal", correct: false },
    ]
  },
  {
    theme: "Voyage",
    question: "Quel pays est célèbre pour ses pyramides ?",
    answers: [
      { text: "Égypte", correct: true },
      { text: "Mexique", correct: false },
      { text: "Inde", correct: false },
      { text: "Grèce", correct: false },
    ]
  },

  // CULTURE GÉNÉRALE - CULTURE
  {
    theme: "Culture",
    question: "Qui a peint la Joconde ?",
    answers: [
      { text: "Léonard de Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Claude Monet", correct: false },
    ]
  },
  {
    theme: "Culture",
    question: "Quel écrivain est l’auteur de 'Les Misérables' ?",
    answers: [
      { text: "Victor Hugo", correct: true },
      { text: "Émile Zola", correct: false },
      { text: "Molière", correct: false },
      { text: "Albert Camus", correct: false },
    ]
  },
  {
    theme: "Culture",
    question: "Quel monument est situé à Paris ?",
    answers: [
      { text: "Tour Eiffel", correct: true },
      { text: "Big Ben", correct: false },
      { text: "Statue de la Liberté", correct: false },
      { text: "Colisée", correct: false },
    ]
  },

  // CULTURE GÉNÉRALE - PAYS
  {
    theme: "Pays",
    question: "Quel est le plus grand pays du monde ?",
    answers: [
      { text: "Russie", correct: true },
      { text: "Canada", correct: false },
      { text: "Chine", correct: false },
      { text: "États-Unis", correct: false },
    ]
  },
  {
    theme: "Pays",
    question: "Quel pays a le plus grand nombre d’habitants ?",
    answers: [
      { text: "Chine", correct: true },
      { text: "Inde", correct: false },
      { text: "États-Unis", correct: false },
      { text: "Indonésie", correct: false },
    ]
  },
  {
    theme: "Pays",
    question: "Dans quel continent se trouve l’Argentine ?",
    answers: [
      { text: "Amérique du Sud", correct: true },
      { text: "Amérique du Nord", correct: false },
      { text: "Europe", correct: false },
      { text: "Asie", correct: false },
    ]
  },
  {
    theme: "Pays",
    question: "Quelle est la monnaie officielle du Japon ?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Dollar", correct: false },
      { text: "Euro", correct: false },
    ]
  },
    {
  theme: "Nourriture",
  question: "Quel fruit est connu pour être riche en potassium ?",
  answers: [
    { text: "La banane", correct: true },
    { text: "La pomme", correct: false },
    { text: "L’orange", correct: false },
    { text: "La fraise", correct: false },
  ]
},
{
  theme: "Nourriture",
  question: "Quel pays est célèbre pour la pizza et les pâtes ?",
  answers: [
    { text: "L’Italie", correct: true },
    { text: "La France", correct: false },
    { text: "La Grèce", correct: false },
    { text: "L’Espagne", correct: false },
  ]
},
  {
    theme: "Pays",
    question: "Quel pays est connu pour le Taj Mahal ?",
    answers: [
      { text: "Inde", correct: true },
      { text: "Pakistan", correct: false },
      { text: "Indonésie", correct: false },
      { text: "Iran", correct: false },
    ]
  },
   {
    theme: "Amour",
    question: "Quel est la couleur préféré de nesrine ?",
    answers: [
      { text: "Rose", correct: true },
      { text: "Rouge", correct: false },
      { text: "Noir", correct: false },
      { text: "Blanc", correct: false },
    ]
  },
   {
    theme: "Amour",
    question: "Que Préfére Nesrine mratie ?",
    answers: [
      { text: "Chocolat Chaud", correct: true },
      { text: "Lait", correct: false },
      { text: "Café", correct: false },
      { text: "eau", correct: false },
    ]
  },

     {
    theme: "Amour",
    question: "quelle  patisserie préfére mratie ?",
    answers: [
      { text: "Macaron", correct: true },
      { text: "éclair", correct: false },
      { text: "mille-feuille", correct: false },
      { text: "cookies", correct: false },
    ]
  },
   {
    theme: "Amour",
    question: "Que Préfére wail  ?",
    answers: [
      { text: "Chocolat Chaud", correct: true },
      { text: "Lait", correct: false },
      { text: "Café", correct: false },
      { text: "smoothie", correct: false },
    ]
  },
   {
    theme: "Amour",
    question: "Que Préfére wail comme scack  ?",
    answers: [
      { text: "chocolat sans farine", correct: true },
      { text: "éclair", correct: false },
      { text: "Café", correct: false },
      { text: "Dome au fraise", correct: false },
    ]
  },
   {
    theme: "Amour",
    question: "pays préféré des ellye ?",
    answers: [
      { text: "chine", correct: true },
      { text: "inde", correct: false },
      { text: "africa", correct: false },
      { text: "russie", correct: false },
    ]
  },
   {
    theme: "Amour",
    question: "pays préféré de nesrine ?",
    answers: [
      { text: "allemagne", correct: true },
      { text: "france", correct: false },
      { text: "tunisie", correct: false },
      { text: "canada", correct: false },
    ]
  },

  
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
