const searchForm = document.querySelector(".my-form");
const hamburger = document.querySelector(".navbar-toggler")
const title = document.querySelector(".navbar-brand");
const x = window.matchMedia("(max-width: 991px)");
let timesClicked = 0;

hamburger.addEventListener("click", function() {
    timesClicked++
    if (x.matches && timesClicked % 2 !== 0) {
        searchForm.style.display = "none";
    } else if (x.matches && timesClicked % 2 === 0) {
        searchForm.style.display = "block";
    }
})