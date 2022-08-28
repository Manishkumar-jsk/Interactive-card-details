const inputElements = document.getElementsByTagName('input');
const errorMsg = document.querySelectorAll("#error_msg");
const button = document.getElementById("myBtn");

var cardName;
var cardNumber;
var month;
var date;
var cvc;

const userData = {
    cardName,
    cardNumber,
    month,
    date,
    cvc
}

for(let i = 0; i < inputElements.length;i++){
    inputElements[i].addEventListener("input",() => {
        if(!inputElements[i].value){
            inputElements[i].style.border = "1px solid hsl(0,100%,66%)";
            inputElements[i].style.outline = "1px solid hsl(0,100%,66%)";
            errorMsg[i].style.display = "block";
            errorMsg[i].innerHTML = "can't be empty";
        }
    })
}