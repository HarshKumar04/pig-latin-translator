const btnTranslate = document.querySelector("#btn-translate");
const inputBox = document.querySelector("#input-box");
const outputBox = document.querySelector("#output-box");

const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function urlMaker(text){
    return url + "?" +"text=" + text;        
}
function clickHandler(){
    var userInput = inputBox.value;
    // outputBox.innerText = userInput+ ":thhhis is the yourre transslation";
    fetch(urlMaker(userInput))
    
     
}
btnTranslate.addEventListener("click",clickHandler);