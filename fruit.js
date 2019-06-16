var i = 0;
let amount = document.getElementById("userAmount");
function ApplebuttonClick() {
    let money=document.getElementById("userAmount").value;
    if(!(x > money)){
        i++;
    document.getElementById('ApplePlaceHolder').value = i;
   }
}
    
   var e = 0;
   function buttondecClick(){
    let money=document.getElementById("userAmount").value;
    if(!(x <= 0)){
        i--;
        document.getElementById('ApplePlaceHolder').value = i;
   
    }else{
        document.getElementById('ApplePlaceHolder').value = i;

    }
  


   }
   var x = 0;
function appleIncreasingClick() {
    let money=document.getElementById("userAmount").value;
    x += 10;

    if(x>money){
        alert('Insufficient account balance');
    }else{  
        document.getElementById('amountAvailiable').value = x;
    }
}
function appleAmontbutton(){
    var z = (+ApplebuttonClick())+(+appleIncreasingClick());

}

function appleMinusClick() {
    x -= 10;

    let money=document.getElementById("userAmount").value;    
    if(x <= 0){
        alert('Insufficient account balance');

    }
    else{
        document.getElementById('amountAvailiable').value = x;

    }
    if(!(x < 0)){
        document.getElementById('amountAvailiable').value = x;
    }
    

}
function AppleMinusAmountbutton(){
    var z = (-buttondecClick())-(-appleMinusClick());

}
// orange cost

var i = 0;
function orangebuttonClick() {
    
    i++;
    document.getElementById('orangeMinus').value = i;

}
    
   var e = 0;
   function orangebuttondecClick(){
    i--;
     document.getElementById('orangeMinus').value = i;

   }
   var x = 0;
function avaliableOrangeClick() {
    let money=document.getElementById("userAmount").value;    
    x += 15;
    if(x>money){
        alert('Insufficient account balance');
    }else{  
        document.getElementById('amountAvailiable').value = x;
    }
    

}
function orangebutton(){
    var z = (+orangebuttonClick())+(+avaliableOrangeClick());

}
function orangeAvailiableminusClick() {
    
    x -= 15;
    if(x <= 0){
        alert('Insufficient account balance');

    }
    else{
        document.getElementById('amountAvailiable').value = x;

    }
    if(!(x < 0)){
        document.getElementById('amountAvailiable').value = x;
    }
    

}
function orangeminusbutton(){
    var z = (-orangebuttondecClick())-(-orangeAvailiableminusClick());

}
// banana
var i = 0;
function bananabuttonClick() {
    
    i++;
    document.getElementById('banana').value = i;

}
    
   var e = 0;
   function bananabuttondecClick(){
    i--;
     document.getElementById('banana').value = i;

   }
   var x = 0;
function availiableBananaClick() {
    let money=document.getElementById("userAmount").value;    
    
    x += 7;
    if(x>money){
        alert('Insufficient account balance');
    }else{  
        document.getElementById('amountAvailiable').value = x;
    }
    

}
function bananabutton(){
    var z = (+bananabuttonClick())+(+availiableBananaClick());

}
function bananaminusClick() {
    
    x -= 7;
    if(x <= 0){
        alert('Insufficient account balance');

    }
    else{
        document.getElementById('amountAvailiable').value = x;

    }
    if(!(x < 0)){
        document.getElementById('amountAvailiable').value = x;
    }
    

}
function bananaminusbutton(){
    var z = (-bananabuttondecClick())-(-bananaminusClick());

}


    



