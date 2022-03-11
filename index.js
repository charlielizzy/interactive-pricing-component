const slider = document.getElementById("slider");
slider.addEventListener("input", (event) => {
    const sliderValue = Number(event.target.value);
    const cost = document.getElementById("cost");
    cost.innerText = `$${sliderValue}.00`;
    const pageviews = document.getElementById("pageviews");
    pageviews.innerText = `${sliderValue*6.25}k pageviews`
})