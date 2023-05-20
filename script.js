var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function updateDisplay(val) {
    document.getElementById("img").innerHTML = val;
    console.log(val);
    if (val == 1) {
    alert("Что тебе нужно?")
}
if (val == 2) {
    alert("Хватит");
}
    if (val == 3) {
    alert("Проваливай");
        setTimeout(rik(), 10000)
}
}
function rik(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
