function solve(steps, footprintLength, speed) {
  const speedMetersPerSecond = (speed * 1000) / 3600;

  const distance = steps * footprintLength;
  const walkingTimeInSeconds = distance / speedMetersPerSecond;
  const breaks = Math.floor(distance / 500) * 60;

  const totalTimeInSeconds = walkingTimeInSeconds + breaks;

  const hours = Math.floor(totalTimeInSeconds / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.round(totalTimeInSeconds % 60)
    .toString()
    .padStart(2, '0');

  console.log(`${hours}:${minutes}:${seconds}`);
}
solve(4000, 0.6, 5);
