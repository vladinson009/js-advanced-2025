import el from '../utils/createEl.js';
import { player, gameAction } from '../gameAction.js';

export default function onGameStart(e, gameArea, gameScore) {
  e.target.classList.add('hide');

  // * render wizzard:
  const wizard = el('div', {
    className: 'wizard',
    style: {
      top: player.y + 'px',
      left: player.x + 'px',
    },
  });
  const timestamp = new Date();
  gameArea.appendChild(wizard);

  // ! game infinite loop
  window.requestAnimationFrame(() =>
    gameAction(wizard, gameArea, gameScore, timestamp)
  );
}
