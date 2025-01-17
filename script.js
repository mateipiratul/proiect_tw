document.addEventListener("DOMContentLoaded", () => {
    const frame = document.querySelector("iframe[name='exercise-frame']");
    const checkButton = document.getElementById("check");
    const hintButton = document.getElementById("hinter");
    const inputField = document.getElementById("textinput");
    const exerciseNav = document.querySelectorAll(".exercise-nav a");

    let currentExercise = null;

    const loadExercise = (jsonFile) => {
        fetch(jsonFile)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${jsonFile}`);
                }
                return response.json();
            })
            .then((exercises) => {
                const randomIndex = Math.floor(Math.random() * exercises.length);
                currentExercise = exercises[randomIndex];
                frame.srcdoc = currentExercise.content;
                inputField.value = "";
            })
            .catch((error) => console.error("Error loading exercise:", error));
    };

    exerciseNav.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const exerciseId = link.id;
            const jsonFile = `exercises/${exerciseId}.json`;
            loadExercise(jsonFile);
        });
    });

    checkButton.addEventListener("click", () => {
        const userAnswer = inputField.value.trim();
        if (!currentExercise) {
            alert("No exercise loaded!");
            return;
        }

        if (currentExercise.correctAnswer.some((answer) => answer.toLowerCase() === userAnswer.toLowerCase())) {
            alert("Correct!");
        } else {
            alert("Incorrect, try again.");
        }
    });

    hintButton.addEventListener("click", () => {
        if (!currentExercise) {
            alert("No exercise loaded!");
            return;
        }
        alert(`Hint: ${currentExercise.hint}`);
    });
});