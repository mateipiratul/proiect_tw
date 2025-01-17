window.onload = function () {
    const centerNode = document.querySelector(".graph .center");

    if (centerNode) {
        const currentUser = sessionStorage.getItem("surname");
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        if (currentUser) {
            centerNode.textContent = `Hello, ${currentUser}!`;
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