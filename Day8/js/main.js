const player1 = new Player(200, 200, 'red');
const player2 = new Player(300, 300, 'purple');

window.addEventListener('keydown', function(event) {
    console.log(event);
    player1.move(event.key);
    player2.move(event.key);
})