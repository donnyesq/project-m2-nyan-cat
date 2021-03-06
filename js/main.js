const app = document.querySelector("#app");
const gameEngine = new Engine(app);

let score = 0;
const scoreTally = document.createElement("span");

const startMessage = document.createElement("span");
startMessage.innerText = "Press 'Enter' to begin \n and 'Space' to shoot";
startMessage.style.position = "absolute";
startMessage.style.top = `${GAME_HEIGHT / 2}px`;
startMessage.style.left = `${GAME_WIDTH / 5.5}px`;

app.appendChild(startMessage);

const keydownHandler = (event) => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }

  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }

  if (event.code === "Space" && !gameEngine.isPlayerDead() && gameLoopOn) {
    gameEngine.laserShot();
  }

  if (event.code === "Enter") {
    app.removeChild(startMessage);
    gameEngine.gameLoop();
  }
};

document.addEventListener("keydown", keydownHandler);
