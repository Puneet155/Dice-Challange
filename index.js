var randomNum1=Math.random();
randomNum1*=6;
randomNum1=Math.floor(randomNum1);



var randomNum2=Math.random();
randomNum2*=6;
randomNum2=Math.floor(randomNum2);


if(randomNum1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(randomNum1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(randomNum1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(randomNum1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(randomNum1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}


if(randomNum2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(randomNum2===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(randomNum2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(randomNum2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(randomNum2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}



if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNum1===randomNum2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}