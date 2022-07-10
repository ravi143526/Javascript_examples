let count = 0;

document.getElementById("decBtn").onclick = function(){
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
}

document.getElementById("incBtn").onclick = function() {
    count+=1;
    document.getElementById("mylabel").innerHTML = count;
}