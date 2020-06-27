// Calculator

function callNumber(num){
   var number = document.getElementById("tex");
   number.value += num
}

function clea(){
    var clear = document.getElementById("tex");
    
    clear.value = ""
 }

 function result(){
    var result = document.getElementById("tex");
    result.value = eval(result.value) 
}

function backsp(){
   var tx = document.getElementById("tex").value;
   var result = tx.slice(0,tex.value.length-1);
   tex.value = result;
}