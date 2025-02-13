import addCloud from './addCloud.js';
import addFireBall from './addFireBall.js';

const keys = {};

const game = {
  speed: 2,
  movingMultiplier: 4,
  fireBallMultiplier: 5,
  fireInterval: 1000,
  cloudSpawnInterval: 3000,
};
export const player = {
  x: 150,
  y: 100,
  width: 0,
  height: 0,
  lastTimeFiredFireball: 0,
};
const scene = {
  score: 0,
  lastCloudSpawn: 0,
};

function gameAction(wizard, gameArea, gameScore) {
  const timestamp = new Date();
  player.width = wizard.offsetWidth;
  player.height = wizard.offsetHeight;

  scene.score++;
  gameScore.textContent = scene.score;

  // * Clouds
  addCloud(gameArea, game, scene, timestamp);
  const clouds = document.querySelectorAll('.cloud');
  clouds.forEach((cloud) => {
    cloud.x -= game.speed;
    cloud.style.left = cloud.x + 'px';

    if (cloud.x + cloud.offsetWidth <= 0) {
      cloud.remove();
    }
  });
  // * Apply gravitation
  const isInAir = player.y + player.height <= gameArea.offsetHeight;
  if (isInAir) {
    player.y += game.speed;
  }
  // * Register user input{
  if (keys.ArrowUp && player.y > 0) {
    player.y -= game.speed * game.movingMultiplier;
  }
  if (keys.ArrowDown && isInAir) {
    player.y += game.speed * game.movingMultiplier;
  }
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.movingMultiplier;
  }
  if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
    player.x += game.speed * game.movingMultiplier;
  }
  if (keys.Space && timestamp - player.lastTimeFiredFireball > game.fireInterval) {
    wizard.classList.add('wizard-fire');
    addFireBall(gameArea, player);
    player.lastTimeFiredFireball = timestamp;
  } else {
    wizard.classList.remove('wizard-fire');
  }

  // * fireBalls flying

  const fireBalls = document.querySelectorAll('.fire-ball');
  fireBalls.forEach((ball) => {
    ball.x += game.speed * game.fireBallMultiplier;
    ball.style.left = ball.x + 'px';

    if (ball.x + ball.offsetWidth > gameArea.offsetWidth) {
      ball.remove();
    }
  });

  wizard.style.top = player.y + 'px';
  wizard.style.left = player.x + 'px';

  window.requestAnimationFrame(() => gameAction(wizard, gameArea, gameScore));
}

// ? on press key functions
function onKeyDown(e) {
  keys[e.code] = true;
}
function onKeyUp(e) {
  keys[e.code] = false;
}
export { onKeyDown, onKeyUp, gameAction };
