function solve(order) {
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  const carriage = {
    hatchback: { type: 'hatchback', color: order.color },
    coupe: { type: 'coupe', color: order.color },
  };

  const sizeOfWheel = order.wheelsize % 2 == 0 ? order.wheelsize - 1 : order.wheelsize;
  const wheels = new Array(4);
  wheels.fill(sizeOfWheel);

  const engine = engines.find((el) => el.power >= order.power);

  const result = {
    model: order.model,
    engine,
    carriage: carriage[order.carriage],
    wheels,
  };
  return result;
}
console.log(
  solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
  })
);
