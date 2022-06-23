const theSquare = document.getElementById("theSquare");

theSquare.addEventListener("mouseenter", function() {
    theSquare.style.backgroundColor = "blue";
});

theSquare.addEventListener("mousedown", function() {
    theSquare.style.backgroundColor = "red";
});

theSquare.addEventListener("mouseup", function() {
     theSquare.style.backgroundColor = "yellow";
});

theSquare.addEventListener("dblclick", function() {
    theSquare.style.backgroundColor = "green";
});

window.addEventListener("wheel", function() {
    theSquare.style.backgroundColor = "orange";
});

document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.key === 'b') {
        theSquare.style.backgroundColor = "blue";
    } else if (e.key === 'r') {
        theSquare.style.backgroundColor = "red";
    } else if (e.key === 'y') {
        theSquare.style.backgroundColor = "yellow";
    } else if (e.key === 'g') {
        theSquare.style.backgroundColor = "green";
    } else if (e.key === 'o') {
        theSquare.style.backgroundColor = "orange";
    }
}
