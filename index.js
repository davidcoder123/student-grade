const name = document.getElementById("name");
const score = document.getElementById("score");
const image = document.getElementById("image");
{
  //modal
  const modalOpen = document.getElementById("modal-open");
  const modal = document.getElementById("modal").classList;
  const modalClose = document.getElementById("m-close");
  const modalIn = document.getElementById("modal-in").classList;

  modalOpen.addEventListener("click", (e) => {
    e.preventDefault();

    modal.add("show");
    modalIn.add("shows");
  });

  modalClose.addEventListener("click", (e) => {
    e.preventDefault();

    modal.remove("show");
    modalIn.remove("shows");
  });
}
