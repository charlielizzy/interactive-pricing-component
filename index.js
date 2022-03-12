const toggle = document.getElementById("toggle");

toggle.addEventListener("change", () => {
  if (toggle.checked === true) {
    const slider = document.getElementById("slider");
    slider.addEventListener("input", (event) => {
      let sliderValue = Number(event.target.value);
      console.log(sliderValue);
      const cost = document.getElementById("cost");
      cost.innerText = `$${(sliderValue * 0.75).toFixed(2)}`;
      const pageviews = document.getElementById("pageviews");
      pageviews.innerText = `${sliderValue * 6.25}k pageviews`;
    });
  } else {
    const slider = document.getElementById("slider");
    slider.addEventListener("input", (event) => {
      const sliderValue = Number(event.target.value);
      const cost = document.getElementById("cost");
      cost.innerText = `$${sliderValue.toFixed(2)}`;
      const pageviews = document.getElementById("pageviews");
      pageviews.innerText = `${sliderValue * 6.25}k pageviews`;
    });
  }
});
