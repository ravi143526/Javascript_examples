document.getElementById("loginBtn").onclick = login();

function login(){
    let userName = "Ravi";
    let userIndox = 1;

    function getMsg(){
        alert(`${userName} you have ${userIndox} Messages!!!`);
        userIndox = 0;
    }

    return getMsg;
}