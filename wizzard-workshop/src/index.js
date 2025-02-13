import onGameStart from './eventListeners/onGameStart.js';
import { onKeyDown, onKeyUp } from './gameAction.js';

const [gameStart, gameArea, gameOver, gameScore] = [
  document.querySelector('.game-start'),
  document.querySelector('.game-area'),
  document.querySelector('.game-over'),
  document.querySelector('.game-score'),
];

gameStart.addEventListener('click', (e) => onGameStart(e, gameArea, gameScore));
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

// TODO: The Bugs – Our Mortal Enemies
