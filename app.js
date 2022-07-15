const firstSection = document.querySelector(".first-sec");
const secondSection = document.querySelector(".second-sec");

let button = document.querySelectorAll("button");
let section = document.querySelectorAll(".loop-sec");

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", oneBtn);

  count = 0;

  function oneBtn(e) {
    count++;

    if (count) {
      for (x = 0; x < section.length; x++) {
        if (
          e.target.parentElement.parentElement.parentElement.classList.contains(
            "first-sec"
          )
        ) {
          firstSection.style.display = "none";
          secondSection.style.display = "flex";
        } else if (
          e.target.parentElement.parentElement.parentElement.classList.contains(
            "second-sec"
          )
        ) {
          secondSection.style.display = "none";
          firstSection.style.display = "flex";
        }
      }
    }

    e.preventDefault();
  }
}
