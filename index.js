const candles = document.querySelectorAll('.candle');
const messages = ["Kuumba!", "Ujamaa!", "Kujichagulia!", "Umoja!", "Ujima!", "Nia!", "Imani!"];
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

    //if candle[index] === day1 alert("Umoja")
    //if candle[index] === day2 alert("Kujichagulia")
    //if candle[index] === day3 alert("Ujima")
    //if candle[index] === day4 alert("Ujamaa")
    //if candle[index] === day5 alert("Nia")
    //if candle[index] === day6 alert("Kuumba")
    //if candle[index] === day7 alert("Imani")
});

