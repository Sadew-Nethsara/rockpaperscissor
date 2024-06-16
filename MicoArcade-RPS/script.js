function theme1(){
      document.getElementById("body").style.backgroundImage = "url('images/bg1.jpg')";
      localStorage.setItem('background', '1')
}
function theme2(){
      document.getElementById('body').style.backgroundImage = "url('images/bg2.jpeg')";
      localStorage.setItem('background', '2')
}
function theme3(){
      document.getElementById('body').style.backgroundImage = "url('images/bg3.jpg')";
      localStorage.setItem('background', '3')
}
function theme4(){
      document.getElementById('body').style.backgroundImage = "url('images/bg4.jpg')";
      localStorage.setItem('background', '4')
}
function theme5(){
      document.getElementById('body').style.backgroundImage = "url('images/bg5.jpg')";
      localStorage.setItem('background', '5')
}
function theme6(){
      document.getElementById('body').style.backgroundImage = "url('images/bg6.webp')";
      localStorage.setItem('background', '6')
}

function next(){
      document.getElementById('themeChange').style.display = 'none';
      document.getElementById('instructions').style.display = 'block';
}

function defaultbackground(){
      if (localStorage.getItem('background') == 1){
            document.getElementById('body').style.backgroundImage = "url('images/bg1.jpg')";
      } else if (localStorage.getItem('background') == 2){
            document.getElementById('body').style.backgroundImage = "url('images/bg2.jpeg')";
      } else if (localStorage.getItem('background') == 3){
            document.getElementById('body').style.backgroundImage = "url('images/bg3.jpeg')";
      } else if (localStorage.getItem('background') == 4){
            document.getElementById('body').style.backgroundImage = "url('images/bg4.jpg')";
      } else if (localStorage.getItem('background') == 5){
            document.getElementById('body').style.backgroundImage = "url('images/bg5.jpg')";
      } else if (localStorage.getItem('background') == 6){
            document.getElementById('body').style.backgroundImage = "url('images/bg6.webp')";
      }
}

defaultbackground();


function onload() {
      if (localStorage.getItem('score')){
            document.getElementById('score').innerHTML = localStorage.getItem('score');
      } else{
            document.getElementById('score').innerHTML = '0';
      }
            
};

onload();

let random;

function closeIns() {
      document.getElementById('instructions').style.display = 'none';
      document.getElementById("music").play();
}

function rock() {
      random = Math.floor(Math.random() * 100 / 34)

      document.getElementById('userHand').src = 'images/2.png'

      if (random == 0) {
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 1;
            document.getElementById('status').innerHTML = 'out 🤭';
            document.getElementById('pcHand').src = 'images/0f.png'
      } else if (random == 1) {
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
            document.getElementById('status').innerHTML = 'won 🫣';
            document.getElementById('pcHand').src = 'images/1f.png'
      } else if (random == 2) {
            document.getElementById('status').innerHTML = 'draw 🤝';
            document.getElementById('pcHand').src = 'images/2f.png'
      } else {
            alert('nothing happend')
            document.getElementById('status').innerHTML = 'nothing happend 😇';
      }

      localStorage.setItem('score', parseInt(document.getElementById('score').innerHTML));

      document.getElementById('pop').play()
}

function scissor() {
      random = Math.floor(Math.random() * 100 / 34)

      document.getElementById('userHand').src = 'images/1.png'

      if (random == 2) {
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 1;
            document.getElementById('status').innerHTML = 'out 🤭';
            document.getElementById('pcHand').src = 'images/2f.png'
      } else if (random == 0) {
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
            document.getElementById('status').innerHTML = 'won 🫣';
            document.getElementById('pcHand').src = 'images/0f.png'
      } else if (random == 1) {
            document.getElementById('status').innerHTML = 'draw 🤝';
            document.getElementById('pcHand').src = 'images/1f.png'
      } else {
            document.getElementById('status').innerHTML = 'nothing happend 😇';
      }

      localStorage.setItem('score', parseInt(document.getElementById('score').innerHTML));

      document.getElementById('pop').play()
}

function paper() {
      random = Math.floor(Math.random() * 100 / 34)

      document.getElementById('userHand').src = 'images/0.png'

      if (random == 1) {
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 1;
            document.getElementById('status').innerHTML = 'out 🤭';
            document.getElementById('pcHand').src = 'images/1f.png'
      } else if (random == 2) {
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
            document.getElementById('status').innerHTML = 'won 🫣';
            document.getElementById('pcHand').src = 'images/2f.png'
      } else if (random == 0) {
            document.getElementById('status').innerHTML = 'draw 🤝';
            document.getElementById('pcHand').src = 'images/0f.png'
      } else {
            document.getElementById('status').innerHTML = 'nothing happend 😇';
      }

      localStorage.setItem('score', parseInt(document.getElementById('score').innerHTML));
      document.getElementById('pop').play()
}

function restart() {
      localStorage.setItem('score', 0)
      document.getElementById('score').innerHTML = 0;
      document.getElementById('pcHand').src = 'images/2f.png'
      document.getElementById('userHand').src = 'images/2.png'
      document.getElementById('status').innerHTML = 'Game restarted 😇';
}

window.addEventListener("keydown", checkKeyPressed, false);


let x = 1;

function checkKeyPressed(evt) {
      if (evt.keyCode == "82") {
            rock();
      } else if (evt.keyCode == "83" || evt.keyCode == "67") {
            scissor();
      } else if (evt.keyCode == "80") {
            paper();
      } else if (evt.keyCode == "46") {
            restart();
      } else if (evt.keyCode == "84") {
            document.getElementById('themeChange').style.display = 'block';
      } else if (evt.keyCode == "77") {
            var myAudio = document.getElementById("music");

            if (x == 0) {
                  myAudio.play();
                  x = 1;
            } else if (x == 1) {
                  myAudio.pause()
                  x = 0;
            }

      } else if (evt.keyCode == "73" || evt.keyCode == "72") {
            document.getElementById("instructions").style.display = 'block';
      }
}
