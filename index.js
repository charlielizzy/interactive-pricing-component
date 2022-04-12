const toggle = document.getElementById("toggle");
const slider = document.getElementById("slider");
const cost = document.getElementById("cost");
const pageviews = document.getElementById("pageviews");

window.addEventListener("load", (event) => {
  if (toggle.checked === true) {
    slider.addEventListener("input", (event) => {
      let sliderValue = Number(event.target.value);
      cost.innerText = `$${(sliderValue * 0.75).toFixed(2)}`;
      pageviews.innerText = `${sliderValue * 6.25}k pageviews`;
    });
  } else {
    slider.addEventListener("input", (event) => {
      const sliderValue = Number(event.target.value);
      cost.innerText = `$${sliderValue.toFixed(2)}`;
      pageviews.innerText = `${sliderValue * 6.25}k pageviews`;
    });
  }
});

toggle.addEventListener("change", () => {
  if (toggle.checked === true) {
    slider.addEventListener("input", (event) => {
      let sliderValue = Number(event.target.value);
      cost.innerText = `$${(sliderValue * 0.75).toFixed(2)}`;
      pageviews.innerText = `${sliderValue * 6.25}k pageviews`;
    });
  } else {
    slider.addEventListener("input", (event) => {
      const sliderValue = Number(event.target.value);
      cost.innerText = `$${sliderValue.toFixed(2)}`;
      pageviews.innerText = `${sliderValue * 6.25}k pageviews`;
    });
  }
});
