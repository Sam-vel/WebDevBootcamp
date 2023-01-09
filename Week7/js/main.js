toggleAnimation = (evt) => {
    evt.target.classList.toggle("open");
};
document
    .querySelector(".menu")
    .addEventListener("click", toggleAnimation);