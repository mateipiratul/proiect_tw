window.onload = function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("Please fill out both fields.");
                return;
            }

            try {
                const response = await fetch("login.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch login data.");
                }

                const users = await response.json();
                const user = users.find(
                    (user) => user.email === email && user.password === password
                );

                if (user) {
                    alert(`Welcome, ${user.nickname}!`);
                    window.location.href = "index.html";
                } else {
                    alert("Invalid email or password. Please try again.");
                }
            } catch (error) {
                console.error("Error during login process:", error);
                alert("An error occurred while processing your login. Please try again later.");
            }
        });
    } else {
        console.error("Login form not found!");
    }
};
