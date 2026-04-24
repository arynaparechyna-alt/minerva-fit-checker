/**
 * app.js — [App Name]
 *
 * Entry point for all application logic.
 * Keep this file organized by feature area as the app grows.
 * See SCRATCHPAD.md for current milestone and DECISIONS.md for
 * architectural choices made so far.
 */

// ============================================================
// State
// ============================================================

const state = {
  // Add your application state here
};

// ============================================================
// Initialization
// ============================================================

function init() {
  // Runs once on page load.
  // Set up event listeners, load initial data, render first view.
  console.log('[App] initialized');
}

// ============================================================
// Event handlers — add yours below
// ============================================================
let currentQuestion = 0;
let selectedAnswer = null;

const questions = [
  {
    category: "INTELLECTUAL CURIOSITY",
    question: "When you have free time to learn something new, what are you most likely to do?",
    answers: [
      "Dive deep into a completely new topic",
      "Explore something related to my interests",
      "Occasionally read or watch something interesting",
      "Focus on hobbies or relaxing instead"
    ]
  },
  {
    category: "GLOBAL MINDSET",
    question: "You're in a new country with very different norms. What do you do?",
    answers: [
      "Actively try to understand and adapt",
      "Observe first, then slowly engage",
      "Stick to what feels familiar",
      "Avoid unfamiliar situations"
    ]
  },
  {
    category: "ANALYTICAL THINKING",
    question: "You’re faced with a complex problem with no clear answer.",
    answers: [
      "Break it down and test different approaches",
      "Look for patterns or past examples",
      "Ask others for guidance",
      "Wait until more clarity appears"
    ]
  }
];

function startQuiz() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("category").innerText = q.category;
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("div");
    btn.className = "answer-option";
    btn.innerText = answer;

    btn.onclick = () => {
      document.querySelectorAll(".answer-option").forEach(el =>
        el.classList.remove("selected")
      );
      btn.classList.add("selected");
      selectedAnswer = index;
    };

    answersDiv.appendChild(btn);
  });

  document.getElementById("progress-text").innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("progress-fill").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;
}

function nextQuestion() {
  if (selectedAnswer === null) {
    alert("Please select an answer first");
    return;
  }

  selectedAnswer = null;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz").innerHTML = `
    <div class="card">
      <h2>You're a strong fit for Minerva 🚀</h2>
      <p>Next step: we'll calculate your profile + chart.</p>
    </div>
  `;
}
// ============================================================
// Rendering — add render functions below
// ============================================================

// ============================================================
// Utilities — add shared helpers below
// ============================================================

// ============================================================
// Boot
// ============================================================

