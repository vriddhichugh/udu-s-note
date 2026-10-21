const messages = {
  screen1: {
    title: "UDU, DON'T ROLL YOUR EYES JUST YET.",
    body: 'I made you a little something.',
  },
  screen2: {
    title: 'Exhibit A: Your extremely unreliable theatre date.',
    ticket: 'THE PLAY I WAS SUPPOSED TO BE AT',
    body: 'Plot twist: my body decided to be absolutely useless that day.',
  },
  screen3: {
    body: "Udu, I know you were counting on me to be there, and I'm sorry I couldn't show up for you. I really did want to come, and it sucks that I missed something that mattered to you. I understand why you're upset. I can't change the fact that I wasn't there, but I hope you know it wasn't because I didn't care. I love you, and I am always going to want to show up for the things that matter to you.",
  },
  screen5: {
    letter:
      "I know a website isn't going to magically make you less mad at me, and I'm not asking you to be. I just didn't want you to think that missing your play meant that being there for you wasn't important to me. You are important to me. So much. I'm sorry I let you down, Udu. I love you, you absolute menace, and I hope I get to make up for missing this one.",
  },
  screen6: {
    top: "Okay, I'm done being sappy now.",
    bottom: "Can we please go back to being us when you're ready? I miss you. ❤️",
    signature: 'Your Vridz, unfortunately forever.',
  },
};

const screens = [...document.querySelectorAll('.screen')];
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const progressTrack = document.querySelector('.progress-track');
const backButton = document.getElementById('backButton');
const musicButton = document.getElementById('musicButton');
const bgMusic = document.getElementById('bgMusic');
const envelope = document.getElementById('envelope');
const afterEnvelope = document.getElementById('afterEnvelope');
const heartBurstButton = document.getElementById('heartBurstButton');
const bonusButton = document.getElementById('bonusButton');
const bonusMessage = document.getElementById('bonusMessage');

let currentScreen = 0;
let musicPlaying = false;

function hydrateCopy() {
  document.getElementById('screen1Title').textContent = messages.screen1.title;
  document.getElementById('screen1Body').textContent = messages.screen1.body;
  document.getElementById('screen2Title').textContent = messages.screen2.title;
  document.getElementById('screen2Ticket').textContent = messages.screen2.ticket;
  document.getElementById('screen2Body').textContent = messages.screen2.body;
  document.getElementById('screen3Body').textContent = messages.screen3.body;
  document.getElementById('screen5Letter').textContent = messages.screen5.letter;
  document.getElementById('screen6Top').textContent = messages.screen6.top;
  document.getElementById('screen6Bottom').textContent = messages.screen6.bottom;
  document.getElementById('screen6Signature').textContent = messages.screen6.signature;
}

function updateProgress() {
  const position = currentScreen + 1;
  progressText.textContent = `${position} / ${screens.length}`;
  progressBar.style.width = `${(position / screens.length) * 100}%`;
  progressTrack.setAttribute('aria-valuenow', String(position));
  backButton.disabled = currentScreen === 0;
}

function goToScreen(index) {
  if (index < 0 || index >= screens.length) return;
  screens[currentScreen].classList.remove('active');
  currentScreen = index;
  screens[currentScreen].classList.add('active');
  updateProgress();
}

function nextScreen() {
  goToScreen(currentScreen + 1);
}

function bindNavigation() {
  document.querySelectorAll('.next-button').forEach((button) => {
    button.addEventListener('click', () => {
      nextScreen();
    });
  });

  backButton.addEventListener('click', () => {
    goToScreen(currentScreen - 1);
  });
}

function bindFlipCards() {
  document.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
}

function bindEnvelope() {
  const openEnvelope = () => {
    envelope.classList.add('open');
    afterEnvelope.hidden = false;
  };

  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openEnvelope();
    }
  });

  afterEnvelope.addEventListener('click', nextScreen);
}

async function toggleMusic() {
  if (!musicPlaying) {
    try {
      await bgMusic.play();
      musicPlaying = true;
      musicButton.textContent = '♫ Pause music';
      musicButton.setAttribute('aria-pressed', 'true');
    } catch (error) {
      musicButton.textContent = 'Tap again to play';
    }
    return;
  }

  bgMusic.pause();
  musicPlaying = false;
  musicButton.textContent = '♫ Play music';
  musicButton.setAttribute('aria-pressed', 'false');
}

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = ['💗', '❤️', '💞', '💖'][Math.floor(Math.random() * 4)];
  heart.style.left = `${8 + Math.random() * 84}%`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1800);
}

function bindCuteDetails() {
  heartBurstButton.addEventListener('click', () => {
    for (let i = 0; i < 18; i += 1) {
      setTimeout(createHeart, i * 70);
    }
  });

  bonusButton.addEventListener('click', () => {
    bonusMessage.hidden = !bonusMessage.hidden;
  });
}

musicButton.addEventListener('click', toggleMusic);
hydrateCopy();
bindNavigation();
bindFlipCards();
bindEnvelope();
bindCuteDetails();
updateProgress();
