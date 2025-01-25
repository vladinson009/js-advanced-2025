function solution(argument) {
  const actions = {
    upvote: () => {
      this.upvotes++;
    },
    downvote: () => {
      this.downvotes++;
    },
    score: () => {
      let [upvotes, downvotes] = [this.upvotes, this.downvotes];
      let rating = '';
      const balance = upvotes - downvotes;
      const totalVotes = upvotes + downvotes;
      const addedNumber = Math.ceil(Math.max(upvotes, downvotes) * 0.25);

      if (upvotes > totalVotes * 0.66 && totalVotes >= 10) {
        rating = 'hot';
      } else if (balance >= 0 && totalVotes > 100) {
        rating = 'controversial';
      } else if (balance < 0 && totalVotes >= 10) {
        rating = 'unpopular';
      } else {
        rating = 'new';
      }
      if (totalVotes > 50) {
        upvotes += addedNumber;
        downvotes += addedNumber;
      }
      return [upvotes, downvotes, balance, rating];
    },
  };
  return actions[argument]();
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 0,
  downvotes: 0,
};
solution.call(post, 'upvote');
// solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// for (let i = 0; i < 50; i++) {
//   solution.call(post, 'downvote'); // (executed 50 times)
// }
console.log(score);
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']
