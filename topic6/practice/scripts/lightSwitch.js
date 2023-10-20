var onSwitch = document.getElementById("turnOn");
onSwitch.addEventListener("click", lightOn);

function lightOn() {
    var lightBox = document.getElementById("light");
    console.log("Light turned on.");
    lightBox.className = "lightOn";
}

var offSwitch = document.getElementById("turnOff");
offSwitch.addEventListener("click", lightOff);

function lightOff() {
    var lightBox = document.getElementById("light");
    console.log("Light turned off.");
    lightBox.className = "lightOff";
}

var nameField = document.getElementById("nameInput");
nameField.addEventListener("blur", check);

function check() {
    var theName = nameField.value;
    //console.log("Did you type it correctly?");
    console.log(theName + "? Is that your name?");
}

var greetButton = document.getElementById("greeting");
greetButton.addEventListener("click", greetUser);

function greetUser() {
    var inputField = document.getElementById("nameInput");
    var theName = inputField.value;
    if (theName == null || theName == ""){
        var paraField  = document.getElementById("output");
        paraField.innerHTML = "Please enter a name.";
        paraField.style.backgroundColor="#b0bf1a";
        paraField.style.color="#0020c2";
        paraField.style.fontSize="2rem";
        paraField.style.borderColor="#0020c2";
        paraField.style.borderStyle="solid";
        paraField.style.padding="5px";
    }else{
    var theGreeting = "Welcome " + theName + ".";
    var paraField = document.getElementById("output");
    paraField.innerHTML = theGreeting;
    paraField.style.backgroundColor="#16f2ef";
    paraField.style.color="#e1f216";
    paraField.style.fontSize="2rem";
    paraField.style.borderColor="#e1f216";
    paraField.style.borderStyle="dashed";
    paraField.style.padding="5px";
    document.body.style.backgroundColor="red";
    }
}
// sdfg