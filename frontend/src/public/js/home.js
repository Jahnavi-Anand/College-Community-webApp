let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let track = document.querySelector(".carousel-track");

next.addEventListener("click", function () {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = "translateX(-330px)";

    setTimeout(() => {
        track.appendChild(track.firstElementChild);
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
    }, 500);
});

prev.addEventListener("click", function () {
    track.style.transition = "none";
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transform = "translateX(-330px)";

    setTimeout(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = "translateX(0)";
    }, 10);
});