

document.addEventListener("DOMContentLoaded", function () {

    // AGE FROM BIRTHDAY
    (function () {
        const ageElement = document.getElementById("age");
        const yearElement = document.getElementById("yr");

        const birthday = new Date(2008, 9, 17);
        const today = new Date();

        let age = today.getFullYear() - birthday.getFullYear();

        if (today < new Date(today.getFullYear(), 9, 17)) {
            age--;
        }

        if (ageElement) ageElement.textContent = age;
        if (yearElement) yearElement.textContent = today.getFullYear();
    })();

    // ROTATING ROLE TEXT
    (function () {
        const roles = [
            "IT student",
            "future developer",
            "honor student",
            "lifelong learner"
        ];

        let i = 0;
        const el = document.getElementById("typed");

        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        setInterval(function () {
            i = (i + 1) % roles.length;
            el.textContent = roles[i];
        }, 2600);
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

        shuffled.forEach(function (symbol) {
            const card = document.createElement("button");

            card.type = "button";
            card.className = "memory-card";
            card.textContent = "?";
            card.dataset.symbol = symbol;

            card.addEventListener("click", function () {
                flipCard(card);
            });

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

            const first = flippedCards[0];
            const second = flippedCards[1];

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

                setTimeout(function () {
                    first.textContent = "?";
                    second.textContent = "?";

                    flippedCards = [];
                    locked = false;
                }, 800);
            }
        }
    }

    // RESTART BUTTON
    const restartButton = document.querySelector(".memory-game .btn");

    if (restartButton) {
        restartButton.addEventListener("click", startMemoryGame);
    }

    // START GAME
    startMemoryGame();

});


    // START GAME
    startMemoryGame();

});
