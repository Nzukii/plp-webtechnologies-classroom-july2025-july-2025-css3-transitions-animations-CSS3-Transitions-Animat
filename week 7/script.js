// 🌱 Part 2: JavaScript Functions

// Global counter to simulate repeated cycles
let cycleCount = 0;

// Function that accepts parameters and returns a value
function photosynthesisRate(sunlight, water) {
  const rate = (sunlight * 0.6 + water * 0.4).toFixed(2);
  return rate;
}

// Triggers the logic and updates DOM
function runPhotosynthesis() {
  const sunlight = Math.random() * 10; // 0-10
  const water = Math.random() * 10;
  const rate = photosynthesisRate(sunlight, water);

  cycleCount++;

  const message = `Cycle #${cycleCount}: Photosynthesis rate is ${rate} 🌿 (Sunlight: ${sunlight.toFixed(1)}, Water: ${water.toFixed(1)})`;
  document.getElementById('result').textContent = message;
}

// 🌞 Part 3: Triggering CSS Animation via JS

function triggerSunAnimation() {
  const sun = document.getElementById('sun');
  sun.classList.add('animate');

  // Remove class after animation to allow re-trigger
  setTimeout(() => {
    sun.classList.remove('animate');
  }, 1000);
}

