import el from './utils/createEl.js';

export default function addFireBall(gameArea, player) {
  const fireBall = el('div', { className: 'fire-ball' });
  fireBall.style.top = player.y + player.height / 3 - 5 + 'px';

  fireBall.x = player.x + player.width;
  fireBall.style.left = fireBall.x + 'px';

  gameArea.appendChild(fireBall);
}
