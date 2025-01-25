function solve(face, suit) {
  const validCardsFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  const cardSuits = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663',
  };
  if (!validCardsFace.some((el) => el == face) || cardSuits[suit] == undefined) {
    throw new Error('Error');
  }
  return {
    toString() {
      return `${face}${cardSuits[suit]}`;
    },
  };
}
console.log(solve('A', 'S').toString());
