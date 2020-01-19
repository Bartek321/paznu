document.getElementById("lightIcon").addEventListener("click", onLoginClick);
document.getElementById("deviceCheckbox1").addEventListener("change", onCheckChange);
document.getElementById("deviceCheckbox2").addEventListener("change", onCheckChange);


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
