const content = {
  screens: [
    {
      kicker: "A tiny digital scrapbook from your unreliable but devoted best friend",
      title: "UDU, DON'T ROLL YOUR EYES JUST YET.",
      sub: "I made you a little something.",
      button: "Fine, show me.",
    },
    {
      title: "Exhibit A: Your extremely unreliable theatre date.",
      ticket: "THE PLAY I WAS SUPPOSED TO BE AT",
      body: "Plot twist: my body decided to be absolutely useless that day.",
      button: "Okay, but seriously…",
    },
    {
      title: "The real part.",
      body: "Udu, I know you were counting on me to be there, and I'm sorry I couldn't show up for you. I really did want to come, and it sucks that I missed something that mattered to you. I understand why you're upset. I can't change the fact that I wasn't there, but I hope you know it wasn't because I didn't care. I love you, and I am always going to want to show up for the things that matter to you.",
      button: "Go on.",
    },
    {
      title: "The Udu appreciation page",
      button: "Next chapter 💌",
      cards: [
        {
          front: "Things I love about you",
          back: [
            "[Add your own line about what you adore]",
            "[Add an inside joke here]",
            "[Add one tiny thing only Udu does]",
          ],
        },
        {
          front: "My favourite memories with you",
          back: [
            "[Memory placeholder #1]",
            "[Memory placeholder #2]",
            "[Memory placeholder #3]",
          ],
        },
        {
          front: "Things that remind me of us",
          back: [
            "[Song / snack / place placeholder]",
            "[Photo moment placeholder]",
            "[Another tiny reminder placeholder]",
          ],
        },
      ],
      photos: [
        "PHOTO PLACEHOLDER 1\nReplace with your favourite photo together",
        "PHOTO PLACEHOLDER 2\nReplace with your chaos selfie",
        "PHOTO PLACEHOLDER 3\nReplace with any memory snap",
      ],
    },
    {
      title: "Open when you're ready",
      letter:
        "I know a website isn't going to magically make you less mad at me, and I'm not asking you to be. I just didn't want you to think that missing your play meant that being there for you wasn't important to me. You are important to me. So much. I'm sorry I let you down, Udu. I love you, you absolute menace, and I hope I get to make up for missing this one.",
      button: "Last thing →",
    },
    {
      line1: "Okay, I'm done being sappy now.",
      line2: "Can we please go back to being us when you're ready? I miss you. ❤️",
      sign: "Your Vridz, unfortunately forever.",
      bonus: "Bonus truth: I'd still lose every argument to you, and we both know it.",
    },
  ],
  musicButton: {
    play: "▶ Music",
    pause: "❚❚ Music",
  },
};

const screens = Array.from(document.querySelectorAll(".screen"));
const prevBtn = document.getElementById("prevBtn");
const musicBtn = document.getElementById("musicBtn");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const progressDots = document.getElementById("progressDots");
const bgMusic = document.getElementById("bgMusic");
const heartLayer = document.getElementById("heartLayer");

let currentIndex = 0;
let furthestVisited = 0;
let musicStarted = false;

function setText(id, text) {
  document.getElementById(id).textContent = text;
}

function populateContent() {
  setText("s1Kicker", content.screens[0].kicker);
  setText("s1Title", content.screens[0].title);
  setText("s1Sub", content.screens[0].sub);
  setText("s1Btn", content.screens[0].button);

  setText("s2Title", content.screens[1].title);
  setText("s2Ticket", content.screens[1].ticket);
  setText("s2Body", content.screens[1].body);
  setText("s2Btn", content.screens[1].button);

  setText("s3Title", content.screens[2].title);
  setText("s3Body", content.screens[2].body);
  setText("s3Btn", content.screens[2].button);

  setText("s4Title", content.screens[3].title);
  setText("s4Btn", content.screens[3].button);
  buildCards();
  buildPhotoStrip();

  setText("s5Title", content.screens[4].title);
  setText("letterText", content.screens[4].letter);
  setText("s5Btn", content.screens[4].button);

  setText("s6Line1", content.screens[5].line1);
  setText("s6Line2", content.screens[5].line2);
  setText("s6Sign", content.screens[5].sign);
  setText("bonusMessage", content.screens[5].bonus);
}

function buildCards() {
  const holder = document.getElementById("flipCards");
  holder.innerHTML = "";

  content.screens[3].cards.forEach((item) => {
    const card = document.createElement("button");
    card.className = "flip-card";
    card.type = "button";
    card.setAttribute("aria-label", `${item.front} card`);

    card.innerHTML = `
      <span class="flip-inner">
        <span class="flip-face front"><h3>${item.front}</h3></span>
        <span class="flip-face back">
          <ul>${item.back.map((line) => `<li>${line}</li>`).join("")}</ul>
        </span>
      </span>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    holder.appendChild(card);
  });
}

function buildPhotoStrip() {
  const strip = document.getElementById("photoStrip");
  strip.innerHTML = "";

  content.screens[3].photos.forEach((text) => {
    const slot = document.createElement("div");
    slot.className = "photo-slot";
    slot.innerText = text;
    strip.appendChild(slot);
  });
}

function createDots() {
  progressDots.innerHTML = "";

  screens.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.ariaLabel = `Go to screen ${index + 1}`;
    dot.addEventListener("click", () => {
      if (index <= furthestVisited) showScreen(index);
    });
    progressDots.appendChild(dot);
  });
}

function updateProgress() {
  const total = screens.length;
  const step = currentIndex + 1;

  progressText.textContent = `${step} / ${total}`;
  progressFill.style.width = `${(step / total) * 100}%`;
  prevBtn.disabled = currentIndex === 0;

  Array.from(progressDots.children).forEach((dot, index) => {
    dot.disabled = index > furthestVisited;
    dot.classList.toggle("current", index === currentIndex);
  });
}

function showScreen(index) {
  screens[currentIndex].classList.remove("active");
  currentIndex = index;
  screens[currentIndex].classList.add("active");
  furthestVisited = Math.max(furthestVisited, currentIndex);
  updateProgress();
}

function burstHearts(originElement) {
  const rect = originElement.getBoundingClientRect();
  const rootRect = document.querySelector(".page-frame").getBoundingClientRect();

  for (let i = 0; i < 10; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = ["💗", "💖", "💘"][i % 3];
    heart.style.left = `${rect.left - rootRect.left + rect.width / 2 + (Math.random() * 50 - 25)}px`;
    heart.style.top = `${rect.top - rootRect.top + rect.height / 2 + (Math.random() * 30 - 15)}px`;
    heart.style.animationDelay = `${Math.random() * 0.2}s`;
    heartLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 1100);
  }
}

function setupActions() {
  document.querySelectorAll(".next-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const next = Number(button.dataset.next);
      showScreen(next);
    });
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) showScreen(currentIndex - 1);
  });

  musicBtn.addEventListener("click", async () => {
    if (!musicStarted) {
      musicStarted = true;
      try {
        await bgMusic.play();
        musicBtn.textContent = content.musicButton.pause;
      } catch {
        musicBtn.textContent = "Music unavailable";
      }
      return;
    }

    if (bgMusic.paused) {
      await bgMusic.play();
      musicBtn.textContent = content.musicButton.pause;
    } else {
      bgMusic.pause();
      musicBtn.textContent = content.musicButton.play;
    }
  });

  document.getElementById("hugBtn").addEventListener("click", (event) => {
    burstHearts(event.currentTarget);
  });

  const envelope = document.getElementById("envelope");
  const nextFromEnvelope = document.getElementById("s5Btn");
  envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    nextFromEnvelope.classList.remove("hidden");
  });

  const bonusBtn = document.getElementById("bonusBtn");
  const bonusMessage = document.getElementById("bonusMessage");
  bonusBtn.addEventListener("click", () => {
    bonusMessage.classList.toggle("hidden");
    burstHearts(bonusBtn);
  });
}

populateContent();
createDots();
setupActions();
updateProgress();
