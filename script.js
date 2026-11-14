
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
