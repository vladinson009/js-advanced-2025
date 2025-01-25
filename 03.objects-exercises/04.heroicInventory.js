function solve(input) {
  const result = [];

  for (const hero of input) {
    let [name, level, items] = hero.split(' / ');
    if (!name) {
      continue;
    }
    level = Number(level);
    items = items ? items.split(', ') : [];

    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}
console.log(
  solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
  ])
);
