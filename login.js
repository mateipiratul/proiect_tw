window.onload = function () {
    const loginForm = document.getElementById("register-form");
    document.getElementById("redirect-login").addEventListener("click", () => {
        window.location.href = "login_login.html";
    });    

    document.getElementById("guest-button").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const surname = document.getElementById("surname").value.trim();
            const nickname = document.getElementById("nickname").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (surname && nickname && email && password) {
                if (!passwordRegex.test(password)) {
                    alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
                    return;
                }

                const userData = { surname, nickname, email, password };
                const existingData = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                existingData.push(userData);
                localStorage.setItem("registeredUsers", JSON.stringify(existingData));
                
                alert(`Welcome, ${nickname}!`);
                window.location.href = "index.html";
            } else {
                alert("Please fill out all fields.");
            }
        });
    } else {
        console.error("Register form not found!");
    }
};
