// ===== RIDDLES =====
const RIDDLES = [
  { q: "I have keys but no locks. I have space but no room. You can enter but can't go inside. What am I?", a: ["keyboard", "computer keyboard"], h: "You use me to type letters on a computer! ⌨️" },
  { q: "What has hands but cannot clap?", a: ["clock", "watch", "a clock"], h: "I tick and tock and tell you the time! 🕐" },
  { q: "What gets wetter the more it dries?", a: ["towel", "a towel"], h: "You use me after a bath or swim! 🛁" },
  { q: "What has a head and a tail but no body?", a: ["coin", "penny", "quarter", "nickel", "dime"], h: "You flip me to make a choice! 🪙" },
  { q: "What has to be broken before you can use it?", a: ["egg", "eggs", "an egg"], h: "Chickens lay me and I'm great scrambled! 🥚" },
  { q: "I'm tall when I'm young and short when I'm old. What am I?", a: ["candle", "a candle"], h: "I melt as I glow with a little flame! 🕯️" },
  { q: "What goes up but never comes down?", a: ["age", "your age"], h: "You celebrate me once a year on your birthday! 🎂" },
  { q: "What has many teeth but cannot bite?", a: ["comb", "zipper", "saw", "a comb"], h: "You might use me to fix your hair! 💇" },
  { q: "What has one eye but cannot see?", a: ["needle", "a needle"], h: "I'm used with thread for sewing! 🧵" },
  { q: "What belongs to you but others use it more than you?", a: ["name", "your name"], h: "You got me when you were born! 📛" },
  { q: "What has a neck but no head?", a: ["bottle", "shirt", "guitar", "a bottle"], h: "You drink water from me! 🍼" },
  { q: "What can you catch but not throw?", a: ["cold", "a cold", "flu", "fish"], h: "Achoo! When you sneeze you might have me! 🤧" },
  { q: "What has a thumb and four fingers but is not alive?", a: ["glove", "mitten", "gloves", "mittens"], h: "You wear me on your hand in winter! 🧤" },
  { q: "What has legs but doesn't walk?", a: ["table", "chair", "couch", "sofa", "a table"], h: "You eat dinner on me! 🍽️" },
  { q: "What can travel around the world while staying in a corner?", a: ["stamp", "postage stamp", "a stamp"], h: "You stick me on a letter! ✉️" },
  { q: "What has a face and two hands but no arms or legs?", a: ["clock", "watch", "a clock"], h: "I go tick tock! ⏰" },
  { q: "What building has the most stories?", a: ["library", "a library"], h: "I'm full of books! 📚" },
  { q: "What has words but never speaks?", a: ["book", "dictionary", "a book"], h: "You read me page by page! 📖" },
  { q: "What is full of holes but still holds water?", a: ["sponge", "a sponge"], h: "You clean dishes with me! 🧽" },
  { q: "Where does Friday come before Thursday?", a: ["dictionary", "a dictionary"], h: "I have all the words in alphabetical order! 📗" },
  { q: "What kind of room has no doors or windows?", a: ["mushroom", "a mushroom"], h: "I grow in the forest and fit on a pizza! 🍄" },
  { q: "What has four wheels and flies?", a: ["garbage truck", "trash truck", "dump truck", "a garbage truck"], h: "I'm a smelly truck that picks up trash! 🚛" },
  { q: "What gets bigger the more you take away from it?", a: ["hole", "a hole"], h: "You dig me in the ground! 🕳️" },
  { q: "I follow you all day long, but when night comes, I am all gone. What am I?", a: ["shadow", "your shadow", "a shadow"], h: "I'm dark and I copy everything you do! 👤" },
  { q: "What has a ring but no finger?", a: ["phone", "telephone", "bell", "doorbell", "a phone"], h: "You use me to call people! 📞" },
  { q: "What flies without wings?", a: ["time"], h: "A clock measures me, and I fly when you're having fun! ⏳" },
  { q: "What goes up and down but doesn't move?", a: ["stairs", "staircase", "temperature", "the stairs"], h: "You climb me in a house! 🪜" },
  { q: "What has no beginning, end, or middle?", a: ["donut", "doughnut", "circle", "ring", "a donut"], h: "I'm a sweet treat with a hole in the middle! 🍩" },
  { q: "What goes through towns and over hills but never moves?", a: ["road", "highway", "street", "path", "a road"], h: "Cars drive on me! 🛣️" },
  { q: "What has 88 keys but can't open a door?", a: ["piano", "a piano"], h: "I make music — black and white keys! 🎹" },
  { q: "What has ears but cannot hear?", a: ["corn", "cornfield", "a cornfield"], h: "I'm a yellow veggie you eat on the cob! 🌽" },
  { q: "What has a tongue but cannot taste?", a: ["shoe", "shoes", "sneaker", "sneakers", "a shoe"], h: "You put me on your feet! 👟" },
  { q: "What has branches but no fruit, trunk, or leaves?", a: ["bank", "a bank"], h: "You keep money here! 🏦" },
  { q: "What has a heart that doesn't beat?", a: ["artichoke", "lettuce", "an artichoke"], h: "I'm a green veggie with a leafy center! 💚" },
  { q: "What kind of band never plays music?", a: ["rubber band", "rubberband", "a rubber band"], h: "I stretch and snap! 🎶" },
  { q: "What has a bed but never sleeps, and a mouth but never eats?", a: ["river", "a river"], h: "Water flows through me to the ocean! 🏞️" },
  { q: "What can you break without touching it?", a: ["promise", "silence", "heart", "a promise"], h: "You make me when you say you will do something! 🤝" },
  { q: "What is so fragile that saying its name breaks it?", a: ["silence"], h: "I'm the opposite of noise! 🤫" },
  { q: "What has legs but can't walk, and a back but can't lie down?", a: ["chair", "a chair"], h: "You sit on me! 🪑" },
  { q: "I'm light as a feather, yet the strongest person can't hold me long. What am I?", a: ["breath", "your breath"], h: "You take me in through your nose and mouth! 😤" },
  { q: "What can you keep after giving it to someone?", a: ["word", "your word", "promise", "cold"], h: "It's something you say when you agree to do something! 🗣️" },
  { q: "What has cities but no houses, forests but no trees, and rivers but no fish?", a: ["map", "a map"], h: "I show you where places are! 🗺️" },
  { q: "What is always in front of you but can't be seen?", a: ["future", "the future"], h: "I haven't happened yet but I'm coming soon! 🔮" },
  { q: "What has a thousand needles but doesn't sew?", a: ["porcupine", "hedgehog", "cactus", "a porcupine"], h: "I'm a spiky little animal! 🦔" },
  { q: "What is orange and sounds like a parrot?", a: ["carrot", "a carrot"], h: "I'm a veggie that bunnies love! 🥕" },
  { q: "What animal doesn't play fair in games?", a: ["cheetah", "cheater", "a cheetah"], h: "I'm the fastest land animal with spots! 🐆" },
  { q: "What has to be taken before you can get it?", a: ["picture", "photo", "photograph", "a picture"], h: "Say cheese! 📸" },
  { q: "What can fill a room but takes up no space?", a: ["light", "sound", "music"], h: "Flip a switch and I appear! 💡" },
  { q: "What is black when clean and white when dirty?", a: ["chalkboard", "blackboard", "a chalkboard"], h: "Teachers write on me with chalk! 📝" },
  { q: "What starts with an E, ends with an E, but only contains one letter?", a: ["envelope", "an envelope"], h: "You put a letter inside me and mail it! ✉️" },
  { q: "What invention lets you look right through a wall?", a: ["window", "a window"], h: "You open me to let in fresh air! 🪟" },
  { q: "What can you serve but never eat?", a: ["tennis ball", "volleyball", "ball", "a tennis ball"], h: "You hit me over a net with a racket! 🎾" },
  { q: "What two things can you never eat for breakfast?", a: ["lunch and dinner", "lunch dinner", "dinner and lunch"], h: "We are the other two meals of the day! 🍔" },
  { q: "What word is spelled wrong in every dictionary?", a: ["wrong", "w-r-o-n-g"], h: "I'm the opposite of right! ❌" },
  { q: "The more you take, the more you leave behind. What are they?", a: ["footsteps", "footprints", "steps"], h: "You make me when you walk on sand! 👣" },
  { q: "What is easy to get into but hard to get out of?", a: ["trouble", "bed"], h: "Your parents tell you not to get into me! 😬" },
  { q: "A bear lives in a little house where all four walls face south. What color is the bear?", a: ["white"], h: "I live where it's very cold and snowy — the North Pole! ❄️" },
  { q: "What has four legs in the morning, two at noon, and three in the evening?", a: ["human", "man", "person", "people", "a human"], h: "I'm us! We crawl, then walk, then use a cane! 👶" },
  { q: "What kind of tree fits in your hand?", a: ["palm", "palm tree", "a palm tree"], h: "You clap with me too! 🌴" },
  { q: "What gets sharper the more you use it?", a: ["brain", "mind", "your brain"], h: "I'm inside your head! 🧠" },
  { q: "What goes up when the rain comes down?", a: ["umbrella", "an umbrella", "umbrellas"], h: "I keep you dry! ☂️" },
  { q: "What do you call a bear with no teeth?", a: ["gummy bear", "gummybear", "a gummy bear"], h: "I'm a chewy candy shaped like a bear! 🐻" },
  { q: "What has a horn but doesn't honk?", a: ["rhino", "rhinoceros", "unicorn", "a unicorn"], h: "I'm a magical horse with a horn on my head! 🦄" },
  { q: "What is always coming but never arrives?", a: ["tomorrow"], h: "I'm the day after today! 🌅" },
  { q: "What has stripes and roars?", a: ["tiger", "a tiger"], h: "I'm a big orange and black cat! 🐯" },
  { q: "I'm yellow, I'm sweet, and monkeys love me. What am I?", a: ["banana", "a banana", "bananas"], h: "You peel me before eating! 🍌" },
  { q: "I'm round and red and grow on a tree. Teachers love when you bring me. What am I?", a: ["apple", "an apple", "apples"], h: "I keep the doctor away! 🍎" },
  { q: "I twinkle in the sky at night. What am I?", a: ["star", "stars", "a star"], h: "You wish upon me! ⭐" },
  { q: "I'm white and fluffy and float in the sky. What am I?", a: ["cloud", "clouds", "a cloud"], h: "Rain comes from me! ☁️" },
  { q: "I have four legs and say moo. What am I?", a: ["cow", "a cow", "cows"], h: "I give you milk! 🐄" },
  { q: "I hop and say ribbit. What am I?", a: ["frog", "toad", "a frog"], h: "I love lily pads and ponds! 🐸" },
  { q: "I'm yellow and black and buzz. I make honey. What am I?", a: ["bee", "bumblebee", "honeybee", "a bee"], h: "I live in a hive! 🐝" },
  { q: "I have a shell and move very slowly. What am I?", a: ["snail", "turtle", "tortoise", "a snail"], h: "I leave a slimy trail! 🐌" },
  { q: "What do you get when you cross a snowman and a vampire?", a: ["frostbite", "frost bite"], h: "I'm what your fingers get in the cold! 🥶" },
  { q: "I have a crown but I'm not a king or queen. I'm a fruit. What am I?", a: ["pineapple", "a pineapple"], h: "I'm yellow inside, spiky outside, and pizza loves me! 🍍" },
  { q: "What has a bark but no bite?", a: ["tree", "dog", "a tree"], h: "I grow tall and have leaves! 🌳" },
  { q: "What kind of cup can't hold water?", a: ["cupcake", "paper cup", "a cupcake"], h: "I'm a sweet little cake! 🧁" },
  { q: "What has wings but isn't a bird?", a: ["airplane", "plane", "butterfly", "bat", "bee", "an airplane"], h: "I fly in the sky and carry people far away! ✈️" },
  { q: "What animal says oink?", a: ["pig", "piglet", "a pig"], h: "I roll in the mud and have a curly tail! 🐷" },
  { q: "What has a long neck and yellow spots?", a: ["giraffe", "a giraffe"], h: "I'm the tallest animal in Africa! 🦒" },
  { q: "I have a trunk but I'm not a car or a tree. What am I?", a: ["elephant", "an elephant"], h: "I'm the biggest land animal with big floppy ears! 🐘" },
  { q: "What color is the sky on a sunny day?", a: ["blue", "sky blue"], h: "I'm also the color of the ocean! 💙" },
  { q: "I'm cold, sweet, and I melt in the sun. What am I?", a: ["ice cream", "icecream", "popsicle", "an ice cream"], h: "My favorite flavor might be chocolate or vanilla! 🍦" },
  { q: "What can you hear but not see or touch?", a: ["sound", "music", "voice", "wind", "noise"], h: "Your ears listen for me! 🔊" },
  { q: "What has a crust but isn't bread?", a: ["pizza", "pie", "earth", "a pizza"], h: "I'm round, have cheese, and yummy toppings! 🍕" },
  { q: "What goes 'quack'?", a: ["duck", "ducks", "a duck"], h: "I swim in a pond and have a flat beak! 🦆" },
  { q: "What is the king of the jungle?", a: ["lion", "a lion"], h: "I have a big fluffy mane and roar! 🦁" },
  { q: "I'm a tiny bug that makes silk. What am I?", a: ["silkworm", "worm", "caterpillar", "a silkworm"], h: "I turn into a moth one day! 🐛" },
  { q: "I'm frozen water that falls from the sky. What am I?", a: ["snow", "hail", "snowflake", "snowflakes"], h: "Kids build snowmen out of me! ☃️" },
  { q: "I sleep all winter long in a cave. What am I?", a: ["bear", "a bear"], h: "I love honey and have brown fur! 🐻" },
  { q: "I'm a small red fruit, often in pies. What am I?", a: ["cherry", "strawberry", "cherries", "strawberries", "a cherry"], h: "I'm small, red, and sweet with a green stem! 🍓" },
  { q: "What bird can't fly but loves to swim in the cold?", a: ["penguin", "a penguin", "penguins"], h: "I'm black and white and live in Antarctica! 🐧" },
  { q: "What color are bananas?", a: ["yellow"], h: "I'm also the color of the sun! 💛" },
  { q: "How many legs does a spider have?", a: ["8", "eight"], h: "It's more than a dog but less than ten! 🕷️" },
  { q: "What planet do we live on?", a: ["earth", "planet earth", "the earth"], h: "I'm the third planet from the sun! 🌍" },
  { q: "What do you call baby dogs?", a: ["puppies", "puppy", "pups"], h: "We're small, fluffy, and love to play! 🐶" },
  { q: "What do bees make that we eat?", a: ["honey"], h: "I'm sweet and golden! 🍯" },
  { q: "What do you use to cut paper?", a: ["scissors", "scissor", "a scissors"], h: "I have two sharp blades that open and close! ✂️" },
  { q: "What tells you what time it is?", a: ["clock", "watch", "a clock"], h: "I have numbers and hands that move! ⏲️" },
  { q: "What do you do with a book?", a: ["read", "read it", "reading"], h: "You do it with your eyes! 👀" },
  { q: "What do you wear on your feet?", a: ["shoes", "socks", "sneakers", "boots", "sandals", "slippers"], h: "You put us on before going outside! 👞" },
  { q: "I have a face but no eyes, hands but no arms. What am I?", a: ["clock", "a clock", "watch"], h: "I help you not be late! 🕰️" },
  { q: "I'm round, orange, and I taste sweet. I grow on a tree. What am I?", a: ["orange", "an orange", "oranges"], h: "I share my name with my color! 🍊" },
  { q: "What animal has a pouch and hops?", a: ["kangaroo", "a kangaroo"], h: "I live in Australia and carry babies in my pocket! 🦘" },
  { q: "What has scales and swims in the sea?", a: ["fish", "a fish"], h: "I breathe through my gills! 🐟" },
  { q: "What do caterpillars turn into?", a: ["butterfly", "butterflies", "a butterfly", "moth"], h: "I have colorful wings and flutter! 🦋" },
  { q: "What is the opposite of day?", a: ["night", "nighttime"], h: "The stars come out when I arrive! 🌙" },
  { q: "What do you put on a birthday cake?", a: ["candles", "candle", "icing", "frosting"], h: "You blow me out and make a wish! 🎂" },
  { q: "I'm red, round, and juicy. Some say I'm a fruit and some say I'm a vegetable. What am I?", a: ["tomato", "tomatoes", "a tomato"], h: "I'm on pizza and in ketchup! 🍅" },
  { q: "What color is grass?", a: ["green"], h: "I'm also the color of leaves! 💚" },
  { q: "What animal barks and wags its tail?", a: ["dog", "puppy", "a dog"], h: "I'm known as man's best friend! 🐕" },
  { q: "What sparkles and lights up the dark sky?", a: ["stars", "star", "fireworks", "moon"], h: "We twinkle, twinkle, little ones! ✨" },
  { q: "What has a pointy top and you eat it on birthdays?", a: ["ice cream cone", "cake", "party hat", "cone"], h: "I'm cold and sweet and drip if I melt! 🍨" }
];

// Shuffle helper
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Normalize answer for comparison
function normalize(s) {
  let out = s
    .toLowerCase()
    .trim()
    .replace(/[.,!?'"`’“”]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(a|an|the)\s+/i, '');
  // tolerate singular/plural only if the word is long enough that stripping 's' still leaves a real word
  if (out.length > 3 && out.endsWith('s') && !out.endsWith('ss')) {
    out = out.slice(0, -1);
  }
  return out;
}

function isCorrect(userAnswer, accepted) {
  const n = normalize(userAnswer);
  if (!n) return false;
  return accepted.some(ans => {
    const na = normalize(ans);
    if (na === n) return true;
    if (na.length >= 3 && n.length >= 3) {
      if (n === na + 'e' || na === n + 'e') return true;
    }
    return false;
  });
}

// ===== GAME STATE =====
let deck = [];
let current = 0;
let attempts = 0;
let correctCount = 0;
let wrongCount = 0;
let finishedCurrent = false;

// ===== DOM =====
const riddleNumEl = document.getElementById('riddle-num');
const riddleTextEl = document.getElementById('riddle-text');
const inputEl = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const controlsEl = document.getElementById('controls');
const progressEl = document.getElementById('progress');
const scoreCorrectEl = document.getElementById('score-correct');
const scoreWrongEl = document.getElementById('score-wrong');
const scoreTotalEl = document.getElementById('score-total');
const scoreMaxEl = document.getElementById('score-max');
const cardEl = document.getElementById('card');

function startGame() {
  deck = shuffle(RIDDLES);
  current = 0;
  correctCount = 0;
  wrongCount = 0;
  scoreMaxEl.textContent = deck.length;
  renderRiddle();
}

function renderRiddle() {
  if (current >= deck.length) {
    showFinal();
    return;
  }
  attempts = 0;
  finishedCurrent = false;
  const r = deck[current];
  riddleNumEl.textContent = `Riddle #${current + 1}`;
  riddleTextEl.textContent = r.q;
  inputEl.value = '';
  inputEl.disabled = false;
  submitBtn.disabled = false;
  feedbackEl.style.display = 'none';
  feedbackEl.className = 'feedback';
  controlsEl.innerHTML = '';
  updateScore();
  inputEl.focus();
}

function updateScore() {
  scoreCorrectEl.textContent = correctCount;
  scoreWrongEl.textContent = wrongCount;
  scoreTotalEl.textContent = Math.min(current + 1, deck.length);
  const pct = (current / deck.length) * 100;
  progressEl.style.width = pct + '%';
}

function showFeedback(type, html) {
  feedbackEl.className = 'feedback ' + type;
  feedbackEl.innerHTML = html;
  feedbackEl.style.display = 'block';
}

function showNextButton(label = 'Next Riddle ➡️') {
  controlsEl.innerHTML = '';
  const btn = document.createElement('button');
  btn.className = 'secondary';
  btn.textContent = label;
  btn.addEventListener('click', () => {
    current++;
    renderRiddle();
  });
  controlsEl.appendChild(btn);
  // Defer focus so any in-flight Enter keypress doesn't activate this button
  setTimeout(() => btn.focus(), 50);
}

function handleSubmit() {
  if (finishedCurrent) return;
  const userAnswer = inputEl.value;
  if (!userAnswer.trim()) {
    inputEl.classList.add('shake');
    setTimeout(() => inputEl.classList.remove('shake'), 500);
    return;
  }
  const r = deck[current];

  if (isCorrect(userAnswer, r.a)) {
    finishedCurrent = true;
    correctCount++;
    inputEl.disabled = true;
    submitBtn.disabled = true;
    showFeedback('correct',
      `<span class="label">🎉 Awesome!</span> You got it right! The answer is <b>${r.a[0]}</b>. Great job! 🌟`
    );
    launchConfetti();
    updateScore();
    showNextButton();
    return;
  }

  attempts++;
  cardEl.classList.add('shake');
  setTimeout(() => cardEl.classList.remove('shake'), 500);

  if (attempts === 1) {
    showFeedback('hint',
      `<span class="label">💡 Hint:</span> ${r.h}<br><span style="font-size:0.95rem;opacity:0.8;">Try again! You can do it! 💪</span>`
    );
    inputEl.select();
  } else {
    finishedCurrent = true;
    wrongCount++;
    inputEl.disabled = true;
    submitBtn.disabled = true;
    showFeedback('reveal',
      `<span class="label">🙈 Not quite!</span> The answer was <b>${r.a[0]}</b>. No worries — let's try the next one! 💖`
    );
    updateScore();
    showNextButton();
  }
}

submitBtn.addEventListener('click', handleSubmit);
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (finishedCurrent) {
      const btn = controlsEl.querySelector('button');
      if (btn) btn.click();
    } else {
      handleSubmit();
    }
  }
});

// ===== FINAL SCREEN =====
function showFinal() {
  progressEl.style.width = '100%';
  const total = deck.length;
  const pct = Math.round((correctCount / total) * 100);
  let emoji, msg;
  if (pct >= 90)      { emoji = '🏆'; msg = "WOW! You're a Riddle Master!"; }
  else if (pct >= 70) { emoji = '🌟'; msg = "Amazing work, Riddle Star!"; }
  else if (pct >= 50) { emoji = '🎉'; msg = "Great job! Keep it up!"; }
  else if (pct >= 30) { emoji = '😊'; msg = "Nice try! Practice makes perfect!"; }
  else                { emoji = '🌱'; msg = "Good effort! Let's try again!"; }

  document.getElementById('game-view').innerHTML = `
    <div class="final-screen">
      <div class="final-emoji">${emoji}</div>
      <h2>${msg}</h2>
      <div class="final-stats">
        You got <b style="color:#1aab4a">${correctCount}</b> right out of <b>${total}</b>!<br>
        <span style="font-size:1rem;color:#666">That's ${pct}%!</span>
      </div>
      <div class="controls" style="justify-content:center">
        <button id="restart-btn">Play Again! 🔁</button>
      </div>
    </div>
  `;
  document.getElementById('restart-btn').addEventListener('click', () => {
    location.reload();
  });
  confettiBurst(60);
}

// ===== CONFETTI =====
const CONFETTI_COLORS = ['#ff5ea8','#ffce3a','#6a5cff','#3ecf74','#5b8cff','#ff7a59','#b57edc'];
function launchConfetti() {
  confettiBurst(35);
}
function confettiBurst(n) {
  for (let i = 0; i < n; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)];
    c.style.animationDuration = (1.6 + Math.random() * 1.4) + 's';
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    c.style.width = (8 + Math.random()*8) + 'px';
    c.style.height = (12 + Math.random()*12) + 'px';
    if (Math.random() > 0.5) c.style.borderRadius = '50%';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2500);
  }
}

// ===== FLOATING EMOJI DECORATIONS =====
const FLOATERS = ['⭐','🎈','🌈','✨','🎨','🧸','🍭','🎁','💫','🌸','🦋','🐝'];
function makeFloaters() {
  for (let i = 0; i < 14; i++) {
    const f = document.createElement('div');
    f.className = 'floater';
    f.textContent = FLOATERS[Math.floor(Math.random()*FLOATERS.length)];
    f.style.left = Math.random() * 100 + 'vw';
    f.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    f.style.animationDuration = (14 + Math.random()*16) + 's';
    f.style.animationDelay = (-Math.random()*20) + 's';
    document.body.appendChild(f);
  }
}

// ===== START =====
makeFloaters();
startGame();
