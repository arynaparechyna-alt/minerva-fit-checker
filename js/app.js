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
function checkFit() {
let discussion = document.getElementById("discussion").value;
let reading = document.getElementById("reading").value;
let travel = document.getElementById("travel").value;

// SCORES
let scores = {
  collaboration: 0,
  selfDirection: 0,
  globalMindset: 0
};

// LOGIC
scores.collaboration = (discussion === "yes") ? 5 : 2;
scores.selfDirection = (reading === "yes") ? 5 : 2;
scores.globalMindset = (travel === "yes") ? 5 : 2;

// BEST MATCH
let bestMajor = "";

if (scores.collaboration >= 4 && scores.globalMindset >= 4) {
  bestMajor = "🌍 Social Sciences (SS)";
}
else if (scores.selfDirection >= 4) {
  bestMajor = "💻 Computer Science (CS)";
}
else {
  bestMajor = "🌐 Interdisciplinary / Global Studies";
}

// DISPLAY TEXT
document.getElementById("bestMatch").innerText =
  "Best Academic Match: " + bestMajor;

// CHART
const ctx = document.getElementById('resultChart').getContext('2d');

if (window.myChart) {
  window.myChart.destroy();
}

window.myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["Collaboration", "Self-Direction", "Global Mindset"],
    datasets: [{
      label: "Your Profile",
      data: [
        scores.collaboration,
        scores.selfDirection,
        scores.globalMindset
      ],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      pointBackgroundColor: ["#4CAF50", "#2196F3", "#9C27B0"],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      r: {
        min: 0,
        max: 5
      }
    }
  }
});
// ============================================================
// Rendering — add render functions below
// ============================================================

// ============================================================
// Utilities — add shared helpers below
// ============================================================

// ============================================================
// Boot
// ============================================================

document.addEventListener('DOMContentLoaded', init);
