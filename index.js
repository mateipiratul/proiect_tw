window.onload = function () {
    const centerNode = document.querySelector(".graph .center");

    if (centerNode) {
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        if (currentUser) {
            centerNode.textContent = `Hello, ${currentUser.surname}!`;
        } else if (registeredUsers.length > 0) {
            const lastUser = registeredUsers[registeredUsers.length - 1];
            centerNode.textContent = `Hello, ${lastUser.surname}!`;
        } else {
            centerNode.textContent = "Hello, Guest!";
        }
    } else {
        console.error("Center node not found!");
    }

    centerNode.addEventListener("click", () => {
        window.location.href = "pesky_square.html";
    })
};