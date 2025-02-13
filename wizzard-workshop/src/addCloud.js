import el from './utils/createEl.js';

export default function addCloud(gameArea, game, scene, timestamp) {
  if (
    timestamp - scene.lastCloudSpawn >
    game.cloudSpawnInterval + 20000 * Math.random()
  ) {
    const cloud = el('div', { className: 'cloud' });
    cloud.x = gameArea.offsetWidth - 200;
    cloud.style.left = cloud.x + 'px';
    cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
    scene.lastCloudSpawn = timestamp;

    gameArea.appendChild(cloud);
  }
}
