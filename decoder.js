window.onload = init()


function init(){
    var button = document.querySelector(".button")
    button.addEventListener("click", function(event){
        getInput()
        })
    var translateInput = document.querySelector(".translate-input");
    translateInput.onkeypress = handleKeyPress;
}


function getInput(str){
    var translateInput = document.querySelector(".translate-input").value;
        str = translateInput;
    var result = document.querySelector(".result")
        result.innerHTML = translate(translateInput);
    }

function handleKeyPress(e){
    var button = document.querySelector(".button");
    if (e.keyCode === 13){
        button.click();
    }
}

function translate(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var char = str.toUpperCase().charCodeAt(i);
        if(char<65 || char > 90)
            arr.push(str[i]);
        else if (char<78)
            arr.push(String.fromCharCode(char+13));
        else
            arr.push(String.fromCharCode(char-13));
    }
        return arr.join("");
    }