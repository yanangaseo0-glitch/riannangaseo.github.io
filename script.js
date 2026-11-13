// Age from birthday (October 17, 2008)
(function(){
  var b=new Date(2008,9,17), n=new Date();
  var a=n.getFullYear()-b.getFullYear();
  if(n<new Date(n.getFullYear(),9,17)) a--;
  document.getElementById('age').textContent=a;
  document.getElementById('yr').textContent=n.getFullYear();
})();
// Rotating role text in the hero
(function(){
  var roles=['IT student','future developer','honor student','lifelong learner'],i=0,el=document.getElementById('typed');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(function(){i=(i+1)%roles.length;el.textContent=roles[i];},2600);
})();
// MEMORY CHALLENGE GAME

const symbols = ["🌟", "💜", "🎮", "🚀", "🌸", "💻"];

let flippedCards = [];
let moves = 0;
let matches = 0;
let locked = false;

function startMemoryGame() {
    const grid = document.getElementById("memoryGrid");

    if (!grid) return;

    flippedCards = [];
    moves = 0;
    matches = 0;
    locked = false;

    document.getElementById("moves").textContent = "0";
    document.getElementById("matches").textContent = "0 / 6";
    document.getElementById("gameMessage").textContent =
        "Find all 6 matching pairs!";

    const shuffled = [...symbols, ...symbols]
        .sort(() => Math.random() - 0.5);

    grid.innerHTML = "";

    shuffled.forEach(symbol => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "memory-card";
        card.textContent = "?";
        card.dataset.symbol = symbol;

        card.addEventListener("click", () => flipCard(card));

        grid.appendChild(card);
    });
}

function flipCard(card) {
    if (
        locked ||
        card.classList.contains("matched") ||
        flippedCards.includes(card)
    ) return;

    card.textContent = card.dataset.symbol;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        document.getElementById("moves").textContent = moves;

        const [first, second] = flippedCards;

        if (first.dataset.symbol === second.dataset.symbol) {
            first.classList.add("matched");
            second.classList.add("matched");

            matches++;

            document.getElementById("matches").textContent =
                matches + " / 6";

            flippedCards = [];

            if (matches === 6) {
                document.getElementById("gameMessage").textContent =
                    "🎉 Congratulations! You completed the game!";
            }
        } else {
            locked = true;

            setTimeout(() => {
                first.textContent = "?";
                second.textContent = "?";

                flippedCards = [];
                locked = false;
            }, 800);
        }
    }
}

// Start game when the page loads
startMemoryGame();
