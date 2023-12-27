const candles = document.querySelectorAll('.candle');
const messages = ["Kuumba! (Creativity) commits us to work and struggle for a new world and a new us that is rooted in the ancient African ethical imperative of serudj ta which is a moral obligation to constantly repair, renew and remake the world, making it more beautiful and beneficial than we inherited it in the process and practice or repairing, renewing and remaking ourselves. It teaches and urges us, in our relations with each other, others and the earth, to raise up what is in ruins, to repair what is damaged, to rejoin what is separated, to replenish what is depleted, to set right what is wrong, to strengthen what is weakened, and to make flourish that which is fragile, insecure and undeveloped.", 
    "Ujamaa! (Cooperative Economics) teaches us the principle and practice of shared work and shared wealth. Modeled on the shared harvest, it calls for cooperative work, respect of the rights of the workers and the needs of everyone for a life of dignity and economic security and the conditions and capacities to live a free, good and meaningful life. It is rooted in the concept of kinship with and caring kindness toward others and the earth and cultivates a sensitivity for avoiding and resisting injuries to fellow humans and the natural world.", 
    "Kujichagulia! (Koo-jee-cha-guh-li-ah) (Self-Determination) re-affirms the fundamental principle and practice of the right of every people to determine their own destiny and daily lives, to live free in their own place, space and time. And it re-affirms the right to resist all forms of unfreedom, injustice and oppression. It reaffirms Nana Haji Malcolm X’s teaching that “Freedom is essential to life itself. Freedom is essential to the development of the human being. (And) If we don’t have freedom, we can never expect justice and equality”. Indeed “only after freedom do justice and equality become a reality” in the fullest sense of the principle and practice ",
    "Umoja! (Unity) calls on us to work and struggle for principled, purposeful and practiced togetherness in freedom, justice and peace in our families, communities and the world. It stresses the ties that link us and cultivate in us sensitivity to each other, other humans and the world and all in it. Indeed, it is expressed in the teaching of Nana Dr. Anna Julia Cooper who affirmed this ancient and African value. She says, “we take our stand on the solidarity of humanity, the oneness of life and the unnaturalness and injustice of all favoritism whether of sex, race, condition or country”.",
    "Ujima! (Collective Work and Respon-sibility) reminds us and reaffirms the enduring and essential truth that we must build the good world we all want and deserve. It teaches the centrality of togetherness in our constant quest for an inclusive freedom, justice and peace. And it reaffirms the reality that only in collective work and responsibility can we achieve freedom, ensure justice and build the peace and security of persons and peoples we all long and struggle for all over the world. And as Nana Dr. Mary McLeod Bethune taught us, “Our task is to remake the world. It is nothing less than this”. And we must do this together, for freedom, justice, peace and other goods are indivisible and they are vulnerable and unattainable in isolation. And we know from the hard lessons of history and the irreducible requirements of our humanity that there can be no peace without justice, no justice without freedom and no freedom without the power, will and struggle of the peoples of the world to achieve and sustain these shared and vital goods.",
    "Nia!(Purpose) calls us to do good in and for the world, to pursue and practice freedom, justice, peace, caring, sharing and all that contributes to African and human good and the well-being of the world and all in it. Indeed, the ancestors teach us in the Odu Ifa that we should do things with joy for humans are divinely chosen and righteously challenged to do good in the world. And they remind us in the Husia that the good we do for others we are also doing for ourselves, for we are building the good and promising world we all want and deserve to live in and to leave as a storehouse of good for those who come after.",
    "Imani! (Faith) teaches us to believe in the good and strive constantly to achieve it everywhere and in its most essential, inclusive and expansive forms. It reminds us that we must have faith in the future and the new world we seek to bring into being in order to imagine and build them. And it is a faith that teaches us to believe that through hard work, long struggle and a whole lot of love and understanding, we can with other oppressed, struggling and progressive peoples reimagine and redraw the map of the world and put in place and develop conditions and capacities for everyone to live in dignity-affirming, life-enhancing and world-preserving ways and come into the fullness of themselves."];
candles.forEach((candle, index) => {
    candle.addEventListener("click", function() {
        candle.classList.toggle("unlit");

        localStorage.setItem(`candle-${index}`, candle.classList.contains("unlit") ? "unlit" : "lit");
        alert(messages[index].toUpperCase());
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
    let q = prompt("The Elder says to you: Habari Gani?? (What's the news?) hint: principle of the day!");
    candles.forEach((candle, index) => {
        if (q === candles[index]) {
            candle.classList.remove("unlit");
        }
    })
});