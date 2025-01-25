function solve(worker) {
  if (!worker.dizziness) {
    return worker;
  }
  const water = 0.1 * worker.weight * worker.experience;
  worker.levelOfHydrated += water;
  worker.dizziness = false;
  return worker;
}
console.log(solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
