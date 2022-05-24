/* Start our skills animation width Js */
let skillsSection = document.getElementById("Our-skills");
let progressDivs = document.querySelectorAll(".prog");
let statsSection = document.getElementById("Stats");
let boxDivs = document.querySelectorAll("#Counter")
let startIncreasFun = false;
window.onscroll = () => {
    if (window.scrollY >= skillsSection.offsetTop) {
        progressDivs.forEach((el) => {
            el.style.transition = "2s";
            el.style.width = el.dataset.width; 
        });
    }
    else {
        progressDivs.forEach((el) => {
            el.style.width = "0"; 
        });
    }
    /* End our skills animation width Js */
    /* Start Stats animation width Js */
    if (window.scrollY >= statsSection.offsetTop) {
        if (!startIncreasFun) {
            boxDivs.forEach((el) => {
                increaseCounter(el);
            });
        }
        startIncreasFun = true;
    }
    else {
        boxDivs.forEach((box) => {
            box.innerHTML = "0";
            startIncreasFun = false;
        })
    }
}

function increaseCounter(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
/* End stats animation width Js */


/* Start countdown timer in the event section using Js */
let goalDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counterTimer = setInterval(() => {
    
    let dateNow = new Date().getTime();
    let dateDefference = goalDate - dateNow;
    let days = Math.floor(dateDefference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDefference % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDefference % (1000 * 60 * 60 ) / (1000 * 60));
    let seconds =Math.floor(dateDefference % (1000 * 60 ) / (1000 ));
    console.log(hours);
    document.getElementById("Days").textContent = days;
    document.getElementById("Hours").textContent = hours;
    document.getElementById("Minutes").textContent = minutes < 10 ? `0 ${minutes}` : minutes;
    document.getElementById("Seconds").textContent = seconds < 10 ? `0 ${seconds}` : seconds;
    if (dateDefference <= 0) {
        clearInterval(counterTimer);
    }
}, 1000);





/* End countdown timer in the event section using Js */




