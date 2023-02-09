
    const openModalButton2 = document.querySelector("#open-modal2");
    const closeModalButton2 = document.querySelector("#close2-modal2");
    const modal2 = document.querySelector("#modal2");
    const fade2 = document.querySelector("#fade2");
    
    const toggleModal2 = () => {
        modal2.classList.toggle("hide2");
        fade2.classList.toggle("hide2");
    };
    
    [openModalButton2, closeModalButton2, fade2].forEach((el) => {
        el.addEventListener("click", () => toggleModal2());
    });
    
    console.log("era pow pow pow")
    



