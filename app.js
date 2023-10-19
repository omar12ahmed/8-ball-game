options= [
    " your destiny unfolds with an unequivocal 'yes,' as whispered by the secrets of the universe",
    "As the winds of uncertainty blow through the sands of time, your response remains a secret guarded by the ancient spirits",
    "The stars do not align in your favor this time, dear seeker, but fret not, for new opportunities await on the horizon",
    "The aura of possibility is vibrant and clear, guiding us to a Yes.",
    "without a doubt",
    "concenrate and ask again",
    "don't count on it",
    "Not in your wildest dreams",
    "There's a small chance."
]

var result = document.getElementById("response")
var container = document.getElementById("mb-outer")

container.addEventListener("click",function(){
    const index = Math.floor(Math.random()*9)
    var message = options[index]
    result.textContent=message;
    result.style.fontSize= "1.1rem"
    result.style.color = "red"
})