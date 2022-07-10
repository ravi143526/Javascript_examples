class Card{
    constructor(value,name){
        this.value = value;
        this.name = name;
    }
}

new Card(2,'Hearts');
new Card(6,'kings');
new Card(4,'Queens');
new Card(9,'diamonds');
new Card(1,'joker');
new Card(3,'ace');

let cards = [new Card(2,'Hearts'),new Card(6,'kings'),new Card(4,'Queens'),new Card(9,'diamonds'),new Card(1,'joker'),new Card(3,'ace')];

cards.forEach(card => console.log(card.value + ' ' + card.name));