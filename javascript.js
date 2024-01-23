var countofone = 0,
  countoftwo = 0;


function disableBtn() {

  if (countofone == 5 || countoftwo == 5) {
    document.getElementById('btn').disabled = true;

  }


}
function disableMyBtn() {
  document.getElementById('myBtn').disabled = true;
  if (countofone == 5 || countoftwo == 5) {
  document.getElementById('myBtn').disabled = false;

  }
  


}

function diceRoll() {



  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var changeofimg = "dice" + randomNumber1 + ".png";
  var locationofimg = "images/" + changeofimg;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var changeofimg2 = "dice" + randomNumber2 + ".png";
  var locationofimg2 = "images/" + changeofimg2;
  var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];
  image1.setAttribute("src", locationofimg);
  image2.setAttribute("src", locationofimg2);

    let h1 = document.querySelector("h1");
if(randomNumber1>randomNumber2)
{
  countofone++;
}
else
if(randomNumber1<randomNumber2)
{
  countoftwo++;
}
else
if(randomNumber1==randomNumber2)
{
  countofone++;
  countoftwo++;
}
if (countofone==5) {
  h1.innerHTML = "Player 1 wins!";
} else if(countoftwo==5){
  h1.innerHTML = "Player 2 wins!";
}
else if(countofone==5&&countoftwo==5)
{
  h1.innerHTML="Draw Match^^";
}

document.getElementById("pointofone").innerHTML = countofone;
document.getElementById("pointoftwo").innerHTML = countoftwo;

  }
