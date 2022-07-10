let answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById('submitButton').onclick = function() {
    let result = document.getElementById('guessfield').value;
    guesses+= 1;


    if(result == answer) {
        alert(`${result} is the # it took you ${guesses} guesses`);
    }
    else if(result < answer) {
        alert('Too Small!!')
    }
    else{
        alert('Too Large!!!');
    }
}