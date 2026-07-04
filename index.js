const name = document.getElementById("name");
const score = document.getElementById("score");
const image = document.getElementById("image");
const displayName = document.getElementById("m-name");
const displayScore = document.getElementById("m-score");
const displayGrade = document.getElementById("m-grade");
const displayImage = document.getElementById("img");
const displayStatues = document.getElementById("m-status");

const modalOpen = document.getElementById("modal-open");
const modal = document.getElementById("modal").classList;
const modalClose = document.getElementById("m-close");
const modalIn = document.getElementById("modal-in").classList;

//modal

modalOpen.addEventListener("click", (e) => {
  e.preventDefault();
  //modal
  modal.add("show");
  modalIn.add("shows");

  //input
  displayName.innerHTML = name.value;
  displayScore.innerHTML = score.value;
  displayImage.setAttribute("src", image.value);

  //score
  const scoreNum = Number(score.value);
  displayGrade.innerHTML = grade(scoreNum);

  //statues
  let statusCheck = grade(scoreNum);
  displayStatues.innerHTML = status(statusCheck);
});

modalClose.addEventListener("click", (e) => {
  e.preventDefault();

  modal.remove("show");
  modalIn.remove("shows");
});

//grade
function grade(score) {
  if (Number.isNaN(score)) {
    return "Type a valid number";
  }

  switch (true) {
    case score < 0 || score > 100:
      return "You didn't write the exam";

    case score >= 70:
      return "GRADE A";

    case score >= 60:
      return "GRADE B";

    case score >= 50:
      return "GRADE C";

    case score >= 45:
      return "GRADE E";

    default:
      return "GRADE F";
  }
}

function status(status) {
  if (status == "GRADE A" || status === "GRADE B" || status === "GRADE C") {
    return `PASSED`;
  } else {
    return `FAILED`;
  }
}
