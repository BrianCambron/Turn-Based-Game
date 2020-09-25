const enterBtn = document.querySelector('.enterBtn')
enterBtn.addEventListener('click', function (event) {
  var name = prompt('Enter your name!');
  if (name != null) {
    document.querySelector('.player-name').innerHTML =
    'Welcome ' + name;
  }
});
enterBtn.addEventListener('click',function play(event){
        let audio = document.getElementById("audio");
        audio.play();
});
// function play(){
//       let audio = document.getElementById("audio");
//       audio.play();
//     }
