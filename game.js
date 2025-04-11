const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Game loop
function gameLoop() {
    Update();
    Render();
    requestAnimationFrame(gameLoop);
}

// Basic update/render
function Update() {
    // Logic goes here
}

function Render() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);
    context.fillStyle = "#fff";
    context.fillText("Alien Infiltration - Prototype", 10, 20);
}

gameLoop();