

class player{
    score = 0;

    pause(){
        console.log("You paused the game!!!");
    }

    exit(){
        console.log("You exited the game!!!")
    }
}

const player1 = new player();

console.log(player1.score);

player1.pause();

player1.exit();