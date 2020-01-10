document.getElementById("cancelButton").addEventListener("click", onCancelClick);
document.getElementById("deleteButton").addEventListener("click", onDeleteClick);
document.getElementById("addDeviceButton").addEventListener("click", onAddDeviceClick);


var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");


var btn1 = document.getElementById("ustawienia1Button");
var btn2 = document.getElementById("ustawienia2Button");
var btn3 = document.getElementById("ustawienia3Button");


var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");

var apply1 = document.getElementById("applyButton1");
var apply2 = document.getElementById("applyButton2");
var apply3 = document.getElementById("applyButton3");

var cancel1 = document.getElementById("cancelButton1");
var cancel2 = document.getElementById("cancelButton2");
var cancel3 = document.getElementById("cancelButton3");


function onCancelClick() {
  window.location.replace("mainPage.html");
}


function onDeleteClick() {
  var x = document.getElementById("urzadzenie1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 


function onAddDeviceClick() {
  window.location.replace("addDevice.html");
}

apply1.onclick = function() {
   modal1.style.display = "none";	
}

cancel1.onclick = function() {
   modal1.style.display = "none";	
}

apply2.onclick = function() {
   modal2.style.display = "none";	
}

cancel2.onclick = function() {
   modal2.style.display = "none";	
}

apply3.onclick = function() {
   modal3.style.display = "none";	
}

cancel3.onclick = function() {
   modal3.style.display = "none";	
}

btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}


span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}