const btnTranslate = document.querySelector("#btn-translate");
const inputBox = document.querySelector("#input-box");
btnTranslate.addEventListener("click",function clickHandler(){
    var userInput = inputBox.value;
    console.log(userInput);
})