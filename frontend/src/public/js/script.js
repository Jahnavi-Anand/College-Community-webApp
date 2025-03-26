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
function openPopup(category) {
    let title = "";
    let text = "";

    if (category === "hostel") {
        title = "Best Hostels Near Campus";
        text = "Find safe and affordable hostels with great facilities, including WiFi, meals, and security.";
    } else if (category === "cafe") {
        title = "Best Cafes for Students";
        text = "Discover cozy cafes perfect for studying or hanging out with friends.";
    } else if (category === "doctor") {
        title = "Top Doctors & Medical Services";
        text = "Get access to trusted doctors, pharmacies, and mental health support nearby.";
    } else if (category === "cabs") {
        title = "Reliable Cab Services";
        text = "Find safe and affordable cab services to navigate the city with ease.";
    }

    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
