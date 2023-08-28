// helpers.js

// Assume you have an initial position for the dodger
let dodger = document.getElementById('dodger');
dodger.style.left = '180px'; // Initial position

function moveDodgerLeft() {
  let left = dodger.style.left;
  left = parseInt(left);

  // Make sure the dodger doesn't move left beyond 0
  if (left > 0) {
    dodger.style.left = (left - 10) + 'px';
  }
}

function moveDodgerRight() {
  let left = dodger.style.left;
  left = parseInt(left);

  // Make sure the dodger doesn't move right beyond 360
  if (left < 360) {
    dodger.style.left = (left + 10) + 'px';
  }
}
