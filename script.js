// Toggle Navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Klik DiLuar Elemen Pada Bagian Navbar
document.addEventListener("click", function (e) {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  }
});

// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".toggle-button", { origin: "bottom" });

// Type Js
const typed = new Typed(".multiple-text", {
  strings: ["23A", "ILMU KOMPUTER"],
  loop: true,
  backSpeed: 60,
  typeSpeed: 180,
  backDelay: 1000,
});

// Section Pertanyaan
const toggleButtons = document.querySelectorAll(".toggle-button");
const hiddenElements = document.querySelectorAll(".hidden-element");

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener("click", function () {
    const hiddenElement = hiddenElements[index];

    // Periksa apakah elemen saat ini tersembunyi atau ditampilkan
    if (
      hiddenElement.style.height === "0px" ||
      hiddenElement.style.height === ""
    ) {
      // Jika tersembunyi, tampilkan elemen
      hiddenElement.style.height = "680px"; // Set tinggi sesuai kebutuhan
    } else {
      // Jika ditampilkan, sembunyikan elemen
      hiddenElement.style.height = "0";
    }
  });
});
