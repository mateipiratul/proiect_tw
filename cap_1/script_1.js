document.addEventListener("DOMContentLoaded", () => {
    const frame = document.querySelector("iframe[name='exercise-frame']");
    const checkButton = document.getElementById("check");
    const hintButton = document.getElementById("hinter");
    const inputField = document.getElementById("textinput");
    const exerciseNav = document.querySelectorAll(".exercise-nav a");

    let currentExercise = null; // Holds the currently loaded exercise data

    // Function to load a random exercise from a specific JSON file
    const loadExercise = (jsonFile) => {
        fetch(jsonFile)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${jsonFile}`);
                }
                return response.json();
            })
            .then((exercises) => {
                // Select a random exercise from the array
                const randomIndex = Math.floor(Math.random() * exercises.length);
                currentExercise = exercises[randomIndex]; // Store the current exercise data
                frame.srcdoc = currentExercise.content; // Load exercise content into the iframe
                inputField.value = ""; // Clear the input field
            })
            .catch((error) => console.error("Error loading exercise:", error));
    };

    // Add event listeners to the exercise navigation buttons
    exerciseNav.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const exerciseId = link.id; // Get the ID of the clicked button (e.g., "shop", "conc")
            const jsonFile = `exercises/${exerciseId}.json`; // Map ID to the corresponding JSON file
            loadExercise(jsonFile); // Load a random exercise from the file
        });
    });

    // Check button functionality
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

    // Hint button functionality
    hintButton.addEventListener("click", () => {
        if (!currentExercise) {
            alert("No exercise loaded!");
            return;
        }
        alert(`Hint: ${currentExercise.hint}`);
    });
});