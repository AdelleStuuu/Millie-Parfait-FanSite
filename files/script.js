var kanon = document.getElementById("Kanon");
function IncreaseVolA() { 
    kanon.volume += .1;
  }
function DecreaseVolA() { 
    kanon.volume -= .1;
  } 

function playaudioa() {
	kanon.play();
  identity.pause();
	identity.currentTime = 0;
  kaibigan.pause();
	kaibigan.currentTime = 0;
  suffer.pause();
	suffer.currentTime = 0;
  forgot.pause();
	forgot.currentTime = 0;
}
function pauseaudioa() {
	kanon.pause();
}
function stopaudioa() {
	kanon.pause();
	kanon.currentTime = 0;
}
//first audio player

var identity = document.getElementById("identity");
function IncreaseVolb() { 
    identity.volume += .1;
  }
function DecreaseVolb() { 
    identity.volume -= .1;
  } 

function playaudiob() {
	identity.play();
  kanon.pause();
	kanon.currentTime = 0;
  kaibigan.pause();
	kaibigan.currentTime = 0;
  suffer.pause();
	suffer.currentTime = 0;
  forgot.pause();
	forgot.currentTime = 0;
}
function pauseaudiob() {
	identity.pause();
}
function stopaudiob() {
	identity.pause();
	identity.currentTime = 0;
}
//second audio player

var kaibigan = document.getElementById("ako");
function IncreaseVolc() { 
    kaibigan.volume += .1;
  }
function DecreaseVolc() { 
    kaibigan.volume -= .1;
  } 

function playaudioc() {
	kaibigan.play();
  identity.pause();
	identity.currentTime = 0;
  kanon.pause();
	kanon.currentTime = 0;
  suffer.pause();
	suffer.currentTime = 0;
  forgot.pause();
	forgot.currentTime = 0;
}
function pauseaudioc() {
	kaibigan.pause();
}
function stopaudioc() {
	kaibigan.pause();
	kaibigan.currentTime = 0;
}
//third audio player    

var suffer = document.getElementById("suffer");
function IncreaseVold() { 
    suffer.volume += .1;
  }
function DecreaseVold() { 
    suffer.volume -= .1;
  } 

function playaudiod() {
	suffer.play();
  identity.pause();
	identity.currentTime = 0;
  kaibigan.pause();
	kaibigan.currentTime = 0;
  kanon.pause();
	kanon.currentTime = 0;
  forgot.pause();
	forgot.currentTime = 0;
}
function pauseaudiod() {
	suffer.pause();
}
function stopaudiod() {
	suffer.pause();
	suffer.currentTime = 0;
}
// fourth audio player

var forgot = document.getElementById("forgottenGirl");
function IncreaseVole() { 
    forgot.volume += .1;
  }
function DecreaseVole() { 
    forgot.volume -= .1;
  } 

function playaudioe() {
	forgot.play();
  identity.pause();
	identity.currentTime = 0;
  kaibigan.pause();
	kaibigan.currentTime = 0;
  suffer.pause();
	suffer.currentTime = 0;
  kanon.pause();
	kanon.currentTime = 0;
}
function pauseaudioe() {
	forgot.pause();
}
function stopaudioe() {
	forgot.pause();
	forgot.currentTime = 0;
}
//last audio player
        