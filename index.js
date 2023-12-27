const candles = document.querySelectorAll('.candle');
const messages = ["Kuumba!", "Ujamaa!", "Kujichagulia!", "Umoja!", "Ujima!", "Nia!", "Imani!"];
candles.forEach((candle, index) => {
    candle.addEventListener("click", function() {
        candle.classList.toggle("unlit");

        localStorage.setItem(`candle-${index}`, candle.classList.contains("unlit") ? "unlit" : "lit");
        alert(`${messages[index].toUpperCase()} (Koo-jee-cha-guh-li-ah) 
(Self-Determination) re-
affirms the fundamental principle and practice of the right of every people to determine their own destiny and daily lives, to live free in their own place, space and time. And it reaffirms the right to resist all forms of unfreedom, injustice and oppression. It reaffirms Nana Haji Malcolm X’s teaching
that “Freedom is essential to life itself. Freedom is essential to the development of the human being. (And) If we don’t have
freedom, we can never expect justice and equality”. Indeed “only after freedom do justice and equality become a reality” in the fullest sense of the principle and practice 
`);
    });

    const state = localStorage.getItem(`candle-${index}`);
    if (state === "lit") {
        candle.classList.remove("unlit");
    } else {
        candle.classList.add("unlit");
    }
});
 //if candle[index] === day1 alert("Umoja")
    //if candle[index] === day2 alert("Kujichagulia")
    //if candle[index] === day3 alert("Ujima")
    //if candle[index] === day4 alert("Ujamaa")
    //if candle[index] === day5 alert("Nia")
    //if candle[index] === day6 alert("Kuumba")
    //if candle[index] === day7 alert("Imani")  Our teacher would explain the code but as someone with experience with code, no technical communication is used which then affects down to my cohort mates. More importantly, most of the class time is him sharing the screen. WE LEARN CODE FROM DOING IT. I am fine because of my experience with coding my own projects. However, my cohort mates do not understand what to do when it comes time to breakout (which we've only done twice for the mini-projects. The activities SHOULD NOT be seen as self-guided practice. It should be the instruction and a time-boxed breakout session in groups, then on to the next instructional activity. Despite what my classmates may say, I am constantly seeing that they don't  know the material we learned cause Gabe Perry will teach multiple concepts before anyone even gets to do themselves. He's moving so fast since he's just reading the code to us, that if someone wanted to code along on their own, they'd miss it.  I get that they can go back and watch the recording but I cannot because the instruction isn't clear enough in the first place. I need more student code interaction each class.
window.addEventListener("load", (event) => {
    let q = prompt("Habari Gani??");
    candles.forEach((candle, index) => {
        if (q === candles[index]) {
            candle.classList.remove("unlit");
        }
    })
});