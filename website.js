

function cool() {
document.getElementById('bio').innerHTML = "About Krystal McCook";
document.getElementById('image').style.height="100px";
}

function myFunction () {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}
