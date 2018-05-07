
function rollDice() {  
   var dice1 = document.getElementById("dice1");
   var dice2 = document.getElementById("dice2"); 
   var D1 = Math.floor(Math.random() * 6) + 1;
   var D2 = Math.floor(Math.random() * 6) + 1; 
   dice1.innerHTML = D1;
   dice2.innerHTML = D2; 
   }

function coinToss (){ 
         if (Math.random()>.5) { 
window.document.coin.src = "Heads.png";}  
else{
window.document.coin.src = "Tails.png";} 
return false;}






 
var onError = function () {
   alert("shake detection failed"); 
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
shake.startWatch(onShake, 40 /*, onError */); 
}
 
var onShake = function () {
  rollDice(); 
};




 


