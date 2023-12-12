let words=document.querySelectorAll(".word")

words.forEach((word)=>{
    let letters=word.textContent.split("")
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span)
    })
})

let currentntWordIndex=0;
let maxwordIndex=words.length-1;
words[currentntWordIndex].style.opacity="1";

let changeText=()=>{
   
    let currentntWord=words[currentntWordIndex];
    let nextWord=currentntWordIndex === maxwordIndex? words[0] : words[currentntWordIndex + 1];

    Array.from(currentntWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out"
        },i * 80)
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in"
        },340 +1 *80)
    })
    currentntWordIndex=currentntWordIndex===maxwordIndex ? 0 : currentntWordIndex + 1;
}
changeText();
setInterval(changeText,3000)

const circles=document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots =elem.getAttribute("data-dots")
    var marked=elem.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;

    for(let i=0 ; i < dots ;i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }

    elem.innerHTML=points;

    const poinstMarked=elem.querySelectorAll('.points')

    for(let i=0; i< percent; i++){
        poinstMarked[i].classList.add('marked')
    }
    
})


//active menue

let menuLi=document.querySelectorAll('header ul li a')
let section =document.querySelectorAll('section')

function activeMenu(){
    let len=section.length;
    while(--len&& window.scrollY +97 < section[len].offsetTop){}
    menuLi.forEach(sec=>sec.classList.remove("active"));
    menuLi[len].classList.add("active")
}

activeMenu();
window.addEventListener("scroll",activeMenu)

//stky header
const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})

//menu icon

let menuIcon=document.querySelector("#menu-icon")

let navlist=document.querySelector(".navlist")

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}