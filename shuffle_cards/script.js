
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(array) {
    let currentIndex = array.length;

    while(currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex--;

        let temp = array[randomIndex];
        array[randomIndex] = array[currentIndex];
        array[currentIndex] = temp;
    }
}

shuffle(cards);

cards.forEach((element) => console.log(element));
