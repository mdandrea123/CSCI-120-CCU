// book 1 total
document.addEventListener("click", book1Total);

function book1Total(){
    var inputField = document.getElementById("book1");
    var b1value = inputField.value;
    var p1value = 5.23;
    b1total = b1value * p1value; 
}

// book 2 total
document.addEventListener("click", book2Total);

function book2Total(){
    var inputField = document.getElementById("book2");
    var b2value = inputField.value;
    var p2value = 13.99;
    b2total = b2value * p2value; 
}

// book 3 total
document.addEventListener("click", book3Total);

function book3Total(){
    var inputField = document.getElementById("book3");
    var b3value = inputField.value;
    var p3value = 13.39;
    b3total = b3value * p3value;
}

// book 4 total
document.addEventListener("click", book4Total);

function book4Total(){
    var inputField = document.getElementById("book4");
    var b4value = inputField.value;
    var p4value = 17.99;
    b4total = b4value * p4value; 
}

// book 5 total
document.addEventListener("click", book5Total);

function book5Total(){
    var inputField = document.getElementById("book5");
    var b5value = inputField.value;
    var p5value = 17.99;
    b5total = b5value * p5value; 
}

// book 6 total
document.addEventListener("click", book6Total);

function book6Total(){
    var inputField = document.getElementById("book6");
    var b6value = inputField.value;
    var p6value = 9.99;
    b6total = b6value * p6value; 
}

//book 7 total
document.addEventListener("click", book7Total);

function book7Total(){
    var inputField = document.getElementById("book7");
    var b7value = inputField.value;
    var p7value = 8.95;
    b7total = b7value * p7value; 
}

// book 8 total
document.addEventListener("click", book8Total);

function book8Total(){
    var inputField = document.getElementById("book8");
    var b8value = inputField.value;
    var p8value = 14.99;
    b8total = b8value * p8value; 
}

//book 9 total
document.addEventListener("click", book9Total);

function book9Total(){
    var inputField = document.getElementById("book9");
    var b9value = inputField.value;
    var p9value = 8.46;
    b9total = b9value * p9value; 
}

// book 10 total
document.addEventListener("click", book10Total);

function book10Total(){
    var inputField = document.getElementById("book10");
    var b10value = inputField.value;
    var p10value = 13.99;
    b10total = b10value * p10value; 
}

//book 11 total
document.addEventListener("click", book11Total);

function book11Total(){
    var inputField = document.getElementById("book11");
    var b11value = inputField.value;
    var p11value = 9.99;
    b11total = b11value * p11value; 
}

// book 12 total
document.addEventListener("click", book12Total);

function book12Total(){
    var inputField = document.getElementById("book12");
    var b12value = inputField.value;
    var p12value = 6.99;
    b12total = b12value * p12value; 
}

// book 13 total
document.addEventListener("click", book13Total);

function book13Total(){
    var inputField = document.getElementById("book13");
    var b13value = inputField.value;
    var p13value = 5.23;
    b13total = b13value * p13value; 
}

// book 14 total
document.addEventListener("click", book14Total);

function book14Total(){
    var inputField = document.getElementById("book14");
    var b14value = inputField.value;
    var p14value = 16.99;
    b14total = b14value * p14value; 
}

// book 15 total
document.addEventListener("click", book15Total);

function book15Total(){
    var inputField = document.getElementById("book15");
    var b15value = inputField.value;
    var p15value = 10.99;
    b15total = b15value * p15value; 
}

//book 16 total
document.addEventListener("click", book16Total);

function book16Total(){
    var inputField = document.getElementById("book16");
    var b16value = inputField.value;
    var p16value = 7.99;
    b16total = b16value * p16value; 
}

//order total
document.addEventListener("click", orderTotal);

function orderTotal(){
    var total = 0;
    total += b1total;
    total += b2total;
    total += b3total;
    total += b4total;
    total += b5total;
    total += b6total;
    total += b7total;
    total += b8total;
    total += b9total;
    total += b10total;
    total += b11total;
    total += b12total;
    total += b13total;
    total += b14total;
    total += b15total;
    total += b16total;

    b1total = b1total.toFixed(2);
    book1Tot.innerHTML= "$" + b1total;
    b2total = b2total.toFixed(2);
    book2Tot.innerHTML= "$" + b2total;
    b3toal = b3total.toFixed(2);
    book3Tot.innerHTML= "$" + b3total;
    b4total = b4total.toFixed(2);
    book4Tot.innerHTML= "$" + b4total;
    b5total = b5total.toFixed(2);
    book5Tot.innerHTML= "$" + b5total;
    b6total = b6total.toFixed(2);
    book6Tot.innerHTML= "$" + b6total;
    b7total = b7total.toFixed(2);
    book7Tot.innerHTML= "$" + b7total;
    b8total = b8total.toFixed(2);
    book8Tot.innerHTML= "$" + b8total;
    b9total = b9total.toFixed(2);
    book9Tot.innerHTML= "$" + b9total;
    b10total = b10total.toFixed(2);
    book10Tot.innerHTML= "$" + b10total;
    b11total = b11total.toFixed(2);
    book11Tot.innerHTML= "$" + b11total;
    b12total = b12total.toFixed(2);
    book12Tot.innerHTML= "$" + b12total;
    b13total = b13total.toFixed(2);
    book13Tot.innerHTML= "$" + b13total;
    b14total = b14total.toFixed(2);
    book14Tot.innerHTML= "$" + b14total;
    b15total = b15total.toFixed(2);
    book15Tot.innerHTML= "$" + b15total;
    b16total = b16total.toFixed(2);
    book16Tot.innerHTML= "$" + b16total;
    total = total.toFixed(2);
    Total.innerHTML="$"+total;
}