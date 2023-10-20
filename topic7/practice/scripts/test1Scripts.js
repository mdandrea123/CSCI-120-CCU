document.addEventListener("click", steakTotal);

function steakTotal(){
    var inputField = document.getElementById("quantity1");
    var q1Value = inputField.value;
    var p1Val=21.99;
    steakTot = q1Value * p1Val;
    // console.log(steakTot);
    

}

document.addEventListener("click", salmonTotal);

function salmonTotal(){
    var inputField = document.getElementById("quantity2");
    var q2Value = inputField.value;
    var p2Val=16.99;
    saTot = q2Value * p2Val;
    // console.log(saTot);
    
}

document.addEventListener("click", orderTotal);

function orderTotal(){
    var total = 0;
    total += steakTot;
    total += saTot;
    // console.log(total);
    steakTot = steakTot.toFixed(2);
    stTotal.innerHTML="$" + steakTot;
    saTot= saTot.toFixed(2);
    salTotal.innerHTML="$" + saTot;
    total = total.toFixed(2);
    totRes.innerHTML="$" + total;

    
}