// /////////////////////////
// Wavy animation for labels in froms
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

// //////////////////////////
// Search script

const inputBox = document.querySelector(".input-box"),
   searchIcon = document.querySelector(".icon"),
   closeIcon = document.querySelector(".close-icon");

 searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
 closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

