window.onload = function () {
    let arr = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];
    document.body.style.backgroundColor = arr[Math.floor(Math.random() * arr.length)];

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const squareSize = 70;
    let randomX = Math.random() * canvas.width;
    let randomY = Math.random() * canvas.height;
    let randomRotation = Math.random() * 90;

    function drawSquare() {
        const rotationRadians = (randomRotation * Math.PI) / 90;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.resetTransform();
        ctx.translate(randomX, randomY);
        ctx.rotate(rotationRadians);
        ctx.fillStyle = "black";
        ctx.fillRect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
    }
    drawSquare();

    setInterval(() => {
        randomX = Math.random() * canvas.width;
        randomY = Math.random() * canvas.height;
        randomRotation = Math.random() * 90;
        drawSquare();
    }, 750);

    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        ctx.resetTransform();
        const squareLeft = randomX - squareSize / 2;
        const squareTop = randomY - squareSize / 2;
        const squareRight = squareLeft + squareSize;
        const squareBottom = squareTop + squareSize;

        if (mouseX >= squareLeft && mouseX <= squareRight && mouseY >= squareTop && mouseY <= squareBottom) {
            window.location.href = "index.html";
        }
    });
};
