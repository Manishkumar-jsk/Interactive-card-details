var cardText = document.getElementById('card-input');
var cardValue = document.getElementById('card-value');
var cardHolderName = document.getElementById('cholderName');
var cardHolderNumber = document.getElementById('cNumber');
var expMonth = document.getElementById('expMonth');
var expYear = document.getElementById('expYear');
var cMonth = document.getElementById('cMonth');
var cYear = document.getElementById('cYear');
var button = document.getElementById('myBtn');
var completeButton = document.getElementById('complete-button');
var container = document.getElementById('card-container');
var completeContainer = document.getElementById('complete-container');
var CVC = document.getElementById('cvc');
var cHName = document.getElementById('chname');
var cHNumber = document.getElementById('chnumber');
var cExMonth = document.getElementById('exp-month');
const errorMsg = document.querySelectorAll("#error_msg");
const cvcDesktop = document.getElementById("desktop-card-back-text"); 

cardHolderNumber.addEventListener("keydown",function(e){
    const txt = this.value;
    if((txt.length == 19 || e.which == 32) & e.which !== 8){
        e.preventDefault();
    }
    if((txt.length == 4 || txt.length == 9 || txt.length == 14) && e.which !== 8){
        this.value = this.value + " ";
    }
})
button.addEventListener("click",function(){
    var x = cardHolderName.value;
    var y = cardHolderNumber.value;
    var Month = cMonth.value;
    var Year = cYear.value;
    var cvc = CVC.value;
    let text;
    let regEx = /^[A-Za-z\s]+$/;
    let numreg = /^[0-9\s]*$/;

    if(x == ""){
        text = "Can't be empty";
        errorMsg[0].style.display = "block";
        cardHolderName.style.border = "2px solid hsl(0, 100%, 66%)";
        errorMsg[0].innerHTML = text;
    }
    if(!x.match(regEx) && x != ""){
        text = "Only letters";
        errorMsg[0].style.display = "block";
        cardHolderName.style.border = "2px solid hsl(0, 100%, 66%)";
        errorMsg[0].innerHTML = text;        
    }
    if(x.match(regEx) && x != ""){
        errorMsg[0].style.display = "none";
        cardHolderName.style.border = "2px solid black";
    }
    if(y == ""){
        text = "Can't be empty";
        errorMsg[1].style.display = "block";
        cardHolderNumber.style.border = "2px solid hsl(0, 100%, 66%)";
        errorMsg[1].innerHTML = text;
    }
    if(!y.match(numreg) && y != ""){
        text = "Only numbers";
        errorMsg[1].style.display = "block";
        cardHolderNumber.style.border = "2px solid hsl(0, 100%, 66%)";
        errorMsg[1].innerHTML = text;        
    }
    if(y.match(numreg) && y != ""){
        errorMsg[1].style.display = "none";
        cardHolderNumber.style.border = "2px solid black";
    }
    if(Month == ""){
        text = "Can't be empty";
        errorMsg[2].style.display = "block";
        errorMsg[2].innerHTML = text;
        cMonth.style.border = "2px solid hsl(0,100%,66%)";
    }
    if(Month <  0 || Month > 12){
        text = "Enter correct month";
        errorMsg[2].style.display = "block";
        errorMsg[2].innerHTML = text;
        cMonth.style.border = "2px solid hsl(0,100%,66%)";
    }
    if(Month > 0 && Month <= 12){
        errorMsg[2].style.display = "none";
        cMonth.style.border = "2px solid black";
    }
    if(Year == ""){
        text = "Can't be empty";
        errorMsg[3].style.display = "block";
        errorMsg[3].innerHTML = text;
        cYear.style.border = "2px solid hsl(0,100%,66%)";
    }
    if(Year != "" && Year.match(numreg)){
        errorMsg[3].style.display = "none";
        cYear.style.border = "2px solid black";
    }
    if(!Year.match(numreg) && Year != ""){
        text = "Only numbers";
        errorMsg[3].style.display = "block";
        cardHolderNumber.style.border = "2px solid hsl(0, 100%, 66%)";
        errorMsg[3].innerHTML = text;        
    }
    if(cvc == ""){
        text = "Can't be empty";
        errorMsg[4].style.display = "block";
        errorMsg[4].innerHTML = text;
        CVC.style.border = "2px solid hsl(0,100%,66%)";
    }
    if(!cvc.match(numreg) && cvc != ""){
        text = "Only numbers";
        errorMsg[4].style.display = "block";
        cardHolderNumber.style.border = "2px solid hsl(0, 100%, 66%)";
        errorMsg[4].innerHTML = text;        
    }
    if(cvc != ""){
        errorMsg[4].style.display = "none";
        CVC.style.border = "2px solid black";
    }
    if(x.match(regEx) && x != "" && y.match(numreg) && y != "" && Month > 0 && Month <= 12 && Year != "" && Year.match(numreg) && cvc.match(numreg) && cvc != ""){
        container.style.display = "none";
        completeContainer.style.display = "block";
        cardText.innerHTML = cardHolderNumber.value;
        cardValue.innerHTML = cardHolderName.value;
        expMonth.innerHTML = cMonth.value;
        expYear.innerHTML = cYear.value;
        cvcDesktop.innerHTML = CVC.value;
    }
});
completeButton.addEventListener("click",function(){
    container.style.display = "block";
    completeContainer.style.display = "none";
    cardHolderName.value = "";
    cardHolderNumber.value = "";
    cMonth.value = "";
    cYear.value = "";
    CVC.value = "";
    cardText.innerHTML = "0000 0000 0000 0000";
    cardValue.innerHTML = "JANE APPLESEED";
    expMonth.innerHTML = "00";
    expYear.innerHTML = "00"
});


