let optionsCont = document.querySelector('.options-cont');
let toolsCont = document.querySelector('.tools-cont');

let optionsFlag = true;

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
}