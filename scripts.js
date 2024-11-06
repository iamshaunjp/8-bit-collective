// comment
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

openModalButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if clicked outside content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
