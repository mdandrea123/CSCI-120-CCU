// good luck message
var raffle = document.getElementById("cPhone");
raffle.addEventListener("change", luck);

function luck(){
    alert("Good Luck!");
}

// name greeting
var cName = document.getElementById("cName");
cName.addEventListener("change", welcome);

function welcome(){
    var inputField = document.getElementById("cName");
    var theName = inputField.value;
    if (theName == null || theName == ""){
        var paraField  = document.getElementById("output");
        paraField.innerHTML = "Please enter a name.";
    }else{
        var theGreeting = "Welcome " + theName + ". Have we met before?";
        var paraField = document.getElementById("welcome");
        paraField.innerHTML = theGreeting;
    }
}
// good choice
var book = document.getElementById("purchased");
purchased.addEventListener("change", choice);

function choice(){
    var inputField = document.getElementById("purchased");
    var bookBought = inputField.value;
    var gChoice = bookBought + "? Good Choice!";
    var paraField = document.getElementById("choice");
    paraField.innerHTML = gChoice;
}
// rating
var rate = document.getElementById("service");
rate.addEventListener("change", rating);

function rating(){
    var inputField = document.getElementById("service");
    var cRating = inputField.value;

    if (cRating <= 5){
        var paraField = document.getElementById("rating");
        paraField.innerHTML = "Are you sure?";
    }else{
        var paraField = document.getElementById("rating");
        paraField.innerHTML = "Great!";
    }
}

// reset message
var reset = document.getElementById("reset");
reset.addEventListener("click", rMessage);

function rMessage(){
    alert("Get it right this time!");
    document.body.style.backgroundColor = "#FE23FE";
}

// submit message
var submitRes = document.getElementById("submitButton");
submitRes.addEventListener("submit", check);

function check(){
    var cuPhone = document.getElementById("cPhone");
    var pVal= cuPhone.value;
    if (pVal == null || pVal == ""){
        var paraField = document.getElementById("fCheck");
        paraField.innerHTML = "Tricked you! Phone number is required!";
        paraField.style.color = "red";
        paraField.style.backgroundColor = "grey";
    }
    else{
        var paraField = document.getElementById("fCheck");
        paraField.innerHTML = "Thanks! Can I call you tomorrow?";
        paraField.style.color="#e1f216";
        paraField.style.backgroundColor="orange";
        
    }
    //event.preventDefault();
}