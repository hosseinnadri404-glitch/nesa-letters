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
function openPoems(){

    document.getElementById("intro").style.display="none";

    document.getElementById("poemsPage").style.display="block";

}



function backPoems(){

    document.getElementById("poemsPage").style.display="none";

    document.getElementById("intro").style.display="flex";

}
const poemPage = document.getElementById("poemPage");

const poemTitle = document.getElementById("poemTitle");

const poemText = document.getElementById("poemText");



const poemsContent = {

1:{
title:"برای تو...",

text:
`
دو چشمِ تر، آوردم که تر قبول کنی
دلی شکسته برایت، اگر قبول کنی
 
به جای اسم فرستنده می‌نویسم: باد
که شرم داری، از این پسر قبول کنی!
 
نه اینکه خانه‌ی تو جای هیچِ من باشد
که راضی‌ام فقط از پشت در قبول کنی
 
غرور هست و خدا هست و گریه‌ای هم هست
و این ترانه، اگر بیشتر قبول کنی!
 
چه می‌شود که بگویم بمان، بمانی و بعد
بگویمت که مرا هم ببر، قبول کنی
 
شب وصال قشنگ است با شما هر جور
اگر که حتّی وقتِ سحر قبول کنی
 
دلم به قیمت عشقت! در انتظار توام
که این معامله را با ضرر قبول کنی
 
همیشه در قفس چشم‌هات خواهم ماند
اگر پرنده‌ی بی‌بال‌و‌پر قبول کنی
 
برای گفتنِ از تو، غزل مجال کمی‌ست
امیدوارم این مختصر قبول کنی...
`
},

2:{
title:"برای تو...",

text:
`
بــه مُردادی ترین گرمـــا قسم، بدجور دلتنگم
شبیه گچ شده از دوری ات، بانوی من، رنگم!
حسودی می کند دستم بــه لبهایی کـه بوسیدت!
وَ من بیچاره ی چشم تو ام... با چشم می جنگم!

تنم از عطــر آغـــوش  تــو دارد باز می سوزد
جهنّم شد بهشتم؛ تا پرید آغوشت از چنگم

نظام  آفـــرینش ناگهـــان بـــر عکس شد ،  دیدم-
زدی با شیشه ی قلبت شکستی این دلِ سنگم!

گلویم را گرفته بُغضی از جنسِ سکوت امشب
"گُل  گلدون من..." جا باز کـــرده توی آهنگم!

بَدَم می آید از ایـــن قــدر تنهایـــی... وَ دلشـــوره
ازین احساسهای مسخره... از گوشی ام... زنگم!

فضـــای شعـــر هم بدجـــور بوی لـــج گرفتــه– نه؟
دقیقاً بیست و یک روز است گیج و خسته و منگم!

تو تقصیری نداری ، من زیادی عاشقت هستم
همین باعث شده با هر نگاهی زود می لنگم!

همان بهتر کــه از هذیان نوشتن دست بردارم
به مرگِ شاعرِ چشمت قسم... بدجور دلتنگم
`
},


3:{
title:"برای تو...",

text:
`
مرا به خاطر دل شکسته‌ام ببخش
مرا که از ندیدن تو خسته‌ام ببخش

اگر به انتظار تو نشسته‌ام هنوز
به دیگری اگر که دل نبسته‌ام ببخش

ببخش اگر که با خیال بودن تو زنده‌ام
اگر تو را نبردم از یاد

ببخش اگر که از امید دیدن تو گفته‌ام
به آرزوی رفته بر باد

تویی تمام ماجرا که رفته‌ای ولی مرا
به حال خود نمی‌گذاری

صدای قلب من، چرا غمت نمی کشد مرا؟
چرا هنوز ادامه داری؟

سکوت قبلِ رفتنت، نماندنت، ندیدنت
مرا به این جنون کشیده‌

چه حسرتی است بر دلم که از تمام بودنت
نبودنت به من رسیده

تویی تمام ماجرا که رفته ای ولی مرا 
به حال خود نمی گذاری

صدای قلب من، چرا غمت نمی‌کشد مرا؟ 
چرا هنوز ادامه داری؟

مرا که از ندیدن تو خسته‌ام ببخش
اگر به انتظار تو نشسته‌ام هنوز

به دیگری اگر که دل نبسته‌ام ببخش
ببخش اگر که با خیال بودن تو زنده‌ام

اگر تو را نبردم از یاد
ببخش اگر که از امید دیدن تو گفته‌ام
به آرزوی رفته بر باد
تویی تمام ماجرا که رفته‌ای ولی مرا
به حال خود نمی‌گذاری
صدای قلب من، چرا غمت نمی کشد مرا؟
چرا هنوز ادامه داری ؟
سکوت قبلِ رفتنت، نماندنت، ندیدنت
مرا به این جنون کشیده‌
چه حسرتی است بر دلم، که از تمام بودنت
نبودنت به من رسیده
تویی تمام ماجرا که رفته ای ولی مرا
به حال خود نمی گذاری
صدای قلب من، چرا غمت نمی‌کشد مرا ؟
چرا هنوز ادامه داری؟
`
}

};




function openPoem(number){


document.getElementById("poemsPage").style.display="none";


poemPage.style.display="block";



poemTitle.innerHTML =
poemsContent[number].title;



poemText.innerHTML =
poemsContent[number].text;


}





function backToPoems(){


poemPage.style.display="none";


document.getElementById("poemsPage").style.display="block";


}
function openFinal(){

    letters.style.display="none";

    document.getElementById("finalPage").style.display="block";

}



function backFinal(){

    document.getElementById("finalPage").style.display="none";

    letters.style.display="block";

}
function openPoems(){

    document.getElementById("intro").style.display="none";

    document.getElementById("letters").style.display="none";

    document.getElementById("poemsPage").style.display="block";

}



function backPoems(){

    document.getElementById("poemsPage").style.display="none";

    document.getElementById("intro").style.display="flex";

}

function openVoice(){

    document.getElementById("intro").style.display="none";

    document.getElementById("letters").style.display="none";

    document.getElementById("voicePage").style.display="block";

}



function backVoice(){

    document.getElementById("voicePage").style.display="none";

    document.getElementById("intro").style.display="flex";

}

function startJourney(){

    document.getElementById("intro").style.display="none";

    document.getElementById("transition").style.display="block";

}