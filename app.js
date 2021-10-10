const btnTranslate = document.querySelector("#btn-translate");
const inputBox = document.querySelector("#input-box");
const outputBox = document.querySelector("#output-box");

const url = "https://api.funtranslations.com/translate/pig-latin.json";

function urlMaker(text){
    return url + "?" +"text=" + text;        
}

function errorHandler(error){
    alert("Something wrong with server please try agian after sometime!!");
    console.log(error);
}

function clickHandler(){
    var userInput = inputBox.value;
    fetch(urlMaker(userInput))
    .then(response => response.json())
    .then(json => {
        var translatedTextValue = json.contents.translated;
        outputBox.innerText = translatedTextValue;

    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler);