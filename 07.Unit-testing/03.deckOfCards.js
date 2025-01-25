function printDeckOfCards(deck) {
  const result = [];
  for (let each of deck) {
    const face = each.slice(0, -1);
    const suit = each.slice(-1);
    try {
      const card = solve(face, suit).toString();
      result.push(card);
    } catch (error) {
      console.log(`Invalid card: ${face + suit}`);
      return;
    }
  }
  console.log(result.join(' '));

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
}
printDeckOfCards(['1C', '10D', 'KH', '2C']);
