const player = document.getElementById('player');
const gameContainer = document.getElementById('gameContainer');
const playerSpeed = 10;

document.addEventListener('keydown', (e) => {
    const playerRect = player.getBoundingClientRect();
    const containerRect = gameContainer.getBoundingClientRect();

    switch (e.key) {
        case 'ArrowUp':
            if (playerRect.top > containerRect.top) {
                player.style.top = player.offsetTop - playerSpeed + 'px';
            }
            break;
        case 'ArrowDown':
            if (playerRect.bottom < containerRect.bottom) {
                player.style.top = player.offsetTop + playerSpeed + 'px';
            }
            break;
        case 'ArrowLeft':
            if (playerRect.left > containerRect.left) {
                player.style.left = player.offsetLeft - playerSpeed + 'px';
            }
            break;
        case 'ArrowRight':
            if (playerRect.right < containerRect.right) {
                player.style.left = player.offsetLeft + playerSpeed + 'px';
            }
            break;
    }
});
