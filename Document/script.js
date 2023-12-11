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