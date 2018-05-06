
function rollDice() {  //Here I am setting up the function for the dice roll
   var dice1 = document.getElementById("dice1");
   var dice2 = document.getElementById("dice2"); // And here I am creating the two dice 
   var D1 = Math.floor(Math.random() * 6) + 1;
   var D2 = Math.floor(Math.random() * 6) + 1; //Here I	 am setting up the numbers on the dice, between 1 and 6
   dice1.innerHTML = D1;
   dice2.innerHTML = D2; // And here I give the dice the shortcut terms 'D1' and 'D2'
   }

function coinToss (){ // Here I am setting up the function for the coin toss
         if (Math.random()>.5) { //Here I set up a if statment and a random number, which will be between 0 and 1 
window.document.coin.src = "Heads.png";} //Here I define that if the random number is more than 0.5 then the coin is the heads photo 
else{
window.document.coin.src = "Tails.png";} //And here I define that if the number is less than 0.5 then the coin is the tails photo
return false;}






 
var onError = function () {
   alert("shake detection failed"); //Here I set up an alert for if the shake detection fails
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
shake.startWatch(onShake, 40 /*, onError */); //Here I define that once the app starts, The app starts watching for a shake 
}
 
var onShake = function () {
  rollDice(); //Here I define that on a shake, the roll dice function is triggerd
};




 


