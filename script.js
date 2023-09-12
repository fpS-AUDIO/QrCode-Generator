`use strict`;

const showGeneratorModalBtn = document.querySelectorAll(`.generator-btn`)[0];
const closeGeneratModalBtn = document.querySelectorAll(`.close-modal`)[0];
const modalGeneratorQr = document.querySelector(`.modal-qr`);
const overlay = document.querySelector(`.overlay`);
let qrUrlInput = document.querySelector(`.input-url`);
let qrCodeImg = document.querySelector(`.qr-code-img`);
let messaggeForUser = document.querySelector(`.notification-message`);
let quoteMessage = document.querySelector(".quote-message");
let quoteAuthor = document.querySelector(".quote-author");
// const downloadButton = document.querySelector(`.downloadBtn`);

const getRandomProperty = function (object) {
  // Object.keys() method to get the object keys as an array,
  const objectKeys = Object.keys(object);
  if (objectKeys.length > 0) {
    // objectKeys.length * Math.random() with Math.floor() to get a random key index within the range of the object keys number.
    const index = Math.floor(objectKeys.length * Math.random());
    const propertyKey = objectKeys[index];
    const propertyValue = object[propertyKey];
    return { index, propertyKey, propertyValue };
  }
  return null;
} ;

const openModalGenerator = function () {
  modalGeneratorQr.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  // window.getComputedStyle(document.body).height  ->  to get the real body height
  overlay.style.height = `${window.getComputedStyle(document.body).height}`;
};

const closeModalGenerator = function () {
  modalGeneratorQr.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const changeImage = function () {
  let qrInputValue = qrUrlInput.value;
  if (!qrInputValue) return;
  messaggeForUser.textContent = `Generating qr code...`;
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrInputValue}&amp;size=1000x1000`;
  qrCodeImg.addEventListener(`load`, function () {
    messaggeForUser.textContent = `Great! Your QR code is ready!`;
  });
};

showGeneratorModalBtn.addEventListener(`click`, function () {
  let qrInputValue = qrUrlInput.value;
  if (!qrInputValue) return;
  changeImage();
  openModalGenerator();
});
closeGeneratModalBtn.addEventListener(`click`, closeModalGenerator);
overlay.addEventListener(`click`, closeModalGenerator);
document.addEventListener(`keydown`, function (event) {
  if (
    event.key === `Escape` &&
    !modalGeneratorQr.classList.contains(`hidden`)
  ) {
    closeModalGenerator();
  }
});

const businessQuotes = {
  quote0: {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  quote1: {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  quote2: {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
  },
  quote3: {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  quote4: {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
  },
  quote5: {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  quote6: {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  quote7: {
    quote: "Quality is not an act; it is a habit.",
    author: "Aristotle",
  },
  quote8: {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  quote9: {
    quote:
      "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
  },
  quote10: {
    quote:
      "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
    author: "Socrates",
  },
  quote11: {
    quote: "Do not wait for leaders; do it alone, person to person.",
    author: "Mother Teresa",
  },
  quote12: {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  quote13: {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  quote14: {
    quote:
      "Your brand is what other people say about you when you're not in the room.",
    author: "Jeff Bezos",
  },
  quote15: {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  quote16: {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  quote17: {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  quote18: {
    quote:
      "Your business is never really good or bad 'out there.' Your business is either good or bad right between your own two ears.",
    author: "Zig Ziglar",
  },
  quote19: {
    quote:
      "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  quote20: {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  quote21: {
    quote:
      "The most valuable thing you can make is a mistake – you can't learn anything from being perfect.",
    author: "Adam Osborne",
  },
  quote22: {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  quote23: {
    quote:
      "Business is not just doing deals; business is having great products, doing great engineering, and providing tremendous service to customers. Finally, business is a cobweb of human relationships.",
    author: "Ross Perot",
  },
  quote24: {
    quote:
      "Don't be the best in the world at what you do. Be the only one in the world who does what you do.",
    author: "Jerry Garcia",
  },
  quote25: {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  quote26: {
    quote: "Success is not in what you have, but who you have become.",
    author: "Bo Bennett",
  },
  quote27: {
    quote:
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort",
  },
  quote28: {
    quote: "The greatest wealth is to live content with little.",
    author: "Plato",
  },
  quote29: {
    quote: "The best marketing doesn't feel like marketing.",
    author: "Tom Fishburne",
  },
  quote30: {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  quote31: {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  quote32: {
    quote:
      "In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
    author: "David Ogilvy",
  },
  quote33: {
    quote:
      "The most important single thing is to focus obsessively on the customer. Our goal is to be earth's most customer-centric company.",
    author: "Jeff Bezos",
  },
  quote34: {
    quote: "The harder I work, the luckier I get.",
    author: "Samuel Goldwyn",
  },
  quote35: {
    quote:
      "I don't know the word 'quit.' Either I never did, or I have abolished it.",
    author: "Susan Butcher",
  },
  quote36: {
    quote: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  quote37: {
    quote:
      "Your reputation is more important than your paycheck, and your integrity is worth more than your career.",
    author: "Ryan Freitas",
  },
  quote38: {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  quote39: {
    quote:
      "The only thing that's keeping you from getting what you want is the story you keep telling yourself about why you don't have it.",
    author: "Tony Robbins",
  },
};

const randomQuote = getRandomProperty(businessQuotes);
// quoteMessage = randomQuote.propertyValue.quote;
// quoteAuthor = randomQuote.propertyValue.author;

// changing quoteMessage and quoteAuthor with random generated values
quoteMessage.textContent = randomQuote.propertyValue.quote;
quoteAuthor.textContent = randomQuote.propertyValue.author;
