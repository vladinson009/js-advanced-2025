function solve(flavours, startFlavour, endFlavour) {
  const start = flavours.indexOf(startFlavour);
  const end = flavours.indexOf(endFlavour) + 1;
  return flavours.slice(start, end);
}
solve(
  ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
  'Key Lime Pie',
  'Lemon Meringue Pie'
);
