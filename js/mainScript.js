document.getElementById("lightIcon").addEventListener("click", onLoginClick);
document.getElementById("room1").addEventListener("click", onRoom1Click);

document.getElementById("deviceCheckbox1").addEventListener("change", onCheckChange);
document.getElementById("deviceCheckbox2").addEventListener("change", onCheckChange);

document.getElementById("button1").addEventListener("click", onButton1Click);
document.getElementById("button2").addEventListener("click", onButton2Click);
document.getElementById("button2").addEventListener("onmouseover", onButton2Click);
document.getElementById("button3").addEventListener("click", onButton3Click);

function onLoginClick() {
  document.getElementById("lightIcon").style.backgroundImage = 'url(img/bulbOff.png)';
  
  var boxes = document.getElementsByClassName("checkbox");

  for (i = 0; i < boxes.length; i++) {
	  boxes[i].checked = false;
  }
}

function lightOn() {
  document.getElementById("lightIcon").style.backgroundImage = 'url(img/bulbOn.png)';
}

function lightOff() {
  document.getElementById("lightIcon").style.backgroundImage = 'url(img/bulbOff.png)';
}

function onCheckChange() {
  var boxes = document.getElementsByClassName("checkbox");

  for (i = 0; i < boxes.length; i++) {
    if(boxes[i].checked == true) {
	  lightOn();
	  break;
	} else {
      lightOff();
	}	
  }
}


function onButton1Click() {
  window.location.replace("addRoomPage.html");
}
function onButton2Click() {
  console.log(document.getElementById("1").innerText);
  document.getElementById("button2").style.width += "10px";
}
function onButton3Click() {
  document.getElementById("lightIcon").style.backgroundImage = 'url(img/bulbOn.png)';
}

function onRoom1Click() {
  window.location.replace("roomPage.html");
}