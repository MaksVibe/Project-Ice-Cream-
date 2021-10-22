const refs = {
  openModalBtn: document.querySelector("[data-open-about]"),
  closeModalBtn: document.querySelector("[data-close-about]"),
  backdrop: document.querySelector("[data-backdrop-about]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle("backdrop-about__hidden");
}
