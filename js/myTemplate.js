/* Start our skills animation width Js */
let skillsSection = document.getElementById("Our-skills");
let progressDivs = document.querySelectorAll(".prog");
let statsSection = document.getElementById("Stats");
let boxDivs = document.querySelectorAll("#Counter")
let startIncreasFun = false;
console.log(progressDivs);
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
/* End our skills animation width Js */
/* Start Stats animation width Js */




/* End Stats animation width Js */