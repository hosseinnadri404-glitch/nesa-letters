const letters = document.getElementById("letters");

const letterPage = document.getElementById("letterPage");

const letterTitle = document.getElementById("letterTitle");

const letterText = document.getElementById("letterText");



function enterLetters(){

    document.getElementById("intro").style.display = "none";

    document.getElementById("letters").style.display = "block";

}



function openLetter(number){


    letters.style.display = "none";


    letterPage.style.display = "block";


    letterTitle.innerHTML =
    lettersContent[number].title;


    letterText.innerHTML =
    lettersContent[number].text;


}



function back(){


    letterPage.style.display = "none";


    letters.style.display = "block";


}
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


if(music && musicBtn){

    musicBtn.onclick = function(){

        if(music.paused){

            music.play();

            musicBtn.innerHTML = "⏸ توقف موسیقی";

        }else{

            music.pause();

            musicBtn.innerHTML = "🎵 پخش موسیقی";

        }

    };

}