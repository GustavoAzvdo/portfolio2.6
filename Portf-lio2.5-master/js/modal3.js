
const openModalButton3 = document.querySelector("#open-modal3");
const closeModalButton3 = document.querySelector("#close3-modal3");
const modal3 = document.querySelector("#modal3");
const fade3 = document.querySelector("#fade3");

const toggleModal3 = () => {
    modal3.classList.toggle("hide3");
    fade3.classList.toggle("hide3");
};

[openModalButton3, closeModalButton3, fade3].forEach((el) => {
    el.addEventListener("click", () => toggleModal3());
});

console.log("era pow pow pow a diversao do deejay")




