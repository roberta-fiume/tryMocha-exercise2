function returnDivText(id) {
    return document.getElementById(id).innerHTML;
}

function returnTextOfElementsWithClass(className) {
    var elementsText = [];
    var elements = document.getElementsByClassName(className);
    for (var i=0; i < elements.length; i++) {
        elementsText.push(elements[i].innerHTML);
    }
    return elementsText;
}

function sumElements(number1, number2) {
     return number1 + number2;
}