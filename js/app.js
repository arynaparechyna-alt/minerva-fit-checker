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
  let score = 0;
  let total = 3;
  let challenges = [];

  if (document.getElementById("discussion").value === "yes") {
    score++;
  } else {
    challenges.push("You may struggle with discussion-heavy classes.");
  }

  if (document.getElementById("reading").value === "yes") {
    score++;
  } else {
    challenges.push("Heavy reading and writing could be challenging.");
  }

  if (document.getElementById("travel").value === "yes") {
    score++;
  } else {
    challenges.push("Frequent travel and moving cities may be difficult.");
  }

  let percentage = Math.round((score / total) * 100);

  let resultText = `Your Minerva Fit Score: ${percentage}%`;
  if (percentage < 70) {
    resultText += "\n\nPotential Challenges:\n";
    challenges.forEach(c => {
      resultText += "• " + c + "\n";
    });
  } else {
    resultText += "\n\nYou seem well-aligned with Minerva!";
  }

  document.getElementById("result").innerText = resultText;
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

document.addEventListener('DOMContentLoaded', init);
