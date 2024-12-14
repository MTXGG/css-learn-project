const smallCups = document.querySelectorAll(".cup-small");
const remaind = document.getElementById("remaind");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  if (index === 7 && smallCups[index].classList.contains("full")) {
    index--;
  } else if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const smallFullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (smallFullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(smallFullCups / totalCups) * 330}px`;
    percentage.innerText = `${(smallFullCups / totalCups) * 100}%`;
  }

  if (smallFullCups === totalCups) {
    remaind.style.height = "0px";
    remaind.style.visibility = "hidden";
  } else {
    remaind.style.visibility = "visible";
    liters.innerText = `${2 - 2 * (smallFullCups / totalCups)}L`;
  }
}
