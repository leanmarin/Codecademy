const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "You can't build a reputation on what you are going to do. -Henry Ford",
  "The unexamined code is not worth releasing. -Socrates",
  "If you don't stand for something, you will fall for anything. -Malcolm X",
  "Programs must be written for people to read, and only incidentally for machines to execute. -Harold Abelson",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. -Ralph Waldo Emerson",
  "The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and brilliant. The marriage of the two is a challenge and opportunity beyond imagination. -Stuart Brand",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas Edison",
  "Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?' -Steve McConnell",
  "We cannot solve our problems with the same thinking we used when we created them. -Albert Einstein"
];

function randomQuote (arr) {
  return arr[Math.floor(Math.random() * 10)]
}

console.log(randomQuote(quotes));
