const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let int = setInterval(count100, 30);
let num = 0;

function count100() {
  num++;

  if (num > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = `${num}%`;
  loadingText.style.opacity = scale(num, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
