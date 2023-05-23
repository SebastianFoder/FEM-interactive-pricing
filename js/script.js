const slider = document.querySelector("#slider");
const pageviews = document.querySelector("#views");
const billing = document.querySelector("#toggle-switch");
const billingType = document.querySelector("#billing");
const priceTag = document.querySelector("#price-tag");
const prices = [8, 12, 16, 24, 36];
const views = ["10K", "50K", "100K", "500K", "1M"];
let price = 16;
let view = "100K";

slider.addEventListener('input', (event) => {
    const value = event.target.value;
    view = views[value - 1];    
    pageviews.innerHTML = view;

    if (billing.checked) {
        price = (prices[value - 1] * 0.75) * 12;
    } 
    else{
        price = prices[value - 1];
    }
    priceTag.innerHTML = `$${price.toFixed(2)}`;
});

billing.addEventListener('change', (event) => {
    if (event.target.checked) {
        price = (prices[slider.value - 1] * 0.75) * 12;
        billingType.innerHTML = "year";
    } 
    else{
        price = prices[slider.value - 1];
        billingType.innerHTML = "month";
    }
    priceTag.innerHTML = `$${price.toFixed(2)}`;
});