let optionsCont = document.querySelector('.options-cont');
let toolsCont = document.querySelector('.tools-cont');
let pencilToolCont = document.querySelector('.pencil-tool-cont');
let eraserToolCont = document.querySelector('.eraser-tool-cont');
let pencil = document.querySelector('.pencil');
let eraser = document.querySelector('.eraser');

let optionsFlag = true;
let pencilFlag = false;
let eraserFlag = false;

optionsCont.addEventListener("click", e => {

    optionsFlag = !optionsFlag;

    if (optionsFlag)
        openTools();

    else
        closeTools();
})

function openTools() {

    let iconEle = optionsCont.children[0];
    iconEle.classList.remove("fa-times");
    iconEle.classList.add("fa-bars");

    toolsCont.style.display = "flex";
}

function closeTools() {

    let iconEle = optionsCont.children[0];
    iconEle.classList.remove("fa-bars");
    iconEle.classList.add("fa-times");

    toolsCont.style.display = "none";
    pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none";
}

pencil.addEventListener("click", e => {

    pencilFlag = !pencilFlag;

    if (pencilFlag)
        pencilToolCont.style.display = "block";

    else
        pencilToolCont.style.display = "none";
})

eraser.addEventListener("click", e => {

    eraserFlag = !eraserFlag;

    if (eraserFlag)
        eraserToolCont.style.display = "flex";

    else
        eraserToolCont.style.display = "none";
})