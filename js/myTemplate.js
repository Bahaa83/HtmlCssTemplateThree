/* Start our skills animation width Js */
let skillsSection = document.getElementById("Our-skills");
let progressDivs = document.querySelectorAll(".prog");
console.log(progressDivs)
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
}
/* End our skills animation width Js */