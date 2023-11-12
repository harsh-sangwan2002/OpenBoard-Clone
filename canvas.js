let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColorCont = document.querySelectorAll('.pencil-color');
let pencilWidthEle = document.querySelector('.pencil-width');
let eraserWidthEle = document.querySelector('.eraser-width');

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthEle.value;
let eraserWidth = eraserWidthEle.value;

let mouseDown = false;
let tool = canvas.getContext("2d");

tool.strokeStyle = penColor;
tool.lineWidth = penWidth;

canvas.addEventListener("mousedown", e => {

    mouseDown = true;
    beginPath({
        x:e.clientX,
        y:e.clientY
    })
})

canvas.addEventListener("mousemove", e => {

    if (mouseDown) {

        drawStroke({
            x:e.clientX,
            y:e.clientY
        })
    }
})

canvas.addEventListener("mouseup", e => {

    mouseDown = false;
})

function beginPath(strokeObj) {

    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}

function drawStroke(strokeObj) {

    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();

}

pencilColorCont.forEach(colorEle=>{

    colorEle.addEventListener("click",e=>{

        let color = colorEle.classList[0];
        penColor = color;
        tool.strokeStyle = penColor;
    })
})

pencilWidthEle.addEventListener("change",e=>{

    penWidth = pencilWidthEle.value;
    tool.lineWidth = penWidth;
})

eraserWidthEle.addEventListener("change",e=>{

    eraserWidth = eraserWidthEle.value;
    tool.lineWidth = eraserWidth;
})