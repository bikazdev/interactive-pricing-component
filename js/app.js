let products = [
  { id: 1, pageview: "10K Pageviews", price: 8 },
  { id: 2, pageview: "50K Pageviews", price: 12 },
  { id: 3, pageview: "100K Pageviews", price: 16 },
  { id: 4, pageview: "500K Pageviews", price: 24 },
  { id: 5, pageview: "1K Pageviews", price: 36 },
];

const pageview = document.querySelector(".pageview");
const price = document.querySelector(".price");
const plan = document.querySelector(".plan");
const inputRange = document.querySelector(".range");
const inputCheck = document.querySelector(".check");
let getProduct;

inputRange.addEventListener("input", function () {
  let colorPercent = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.backgroundImage = `linear-gradient(to right, hsl(174, 77%, 80%) ${colorPercent}%,
        hsl(174, 77%, 80%) ${colorPercent}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;
  let getValue = Number(this.value);
  switch (getValue) {
    case 0:
      productHandler(products, 0);
      break;
    case 1:
      productHandler(products, 1);
      break;
    case 2:
      productHandler(products, 2);
      break;
    case 3:
      productHandler(products, 3);
      break;
    case 4:
      productHandler(products, 4);
      break;
  }
});

inputCheck.addEventListener("input", () => {
  if (inputCheck.checked) {
    let getPriceText = price.innerText.split(".")[0].split("$")[1];
    getProduct = findProduct("price", getPriceText);
    uiProductPriceHandler(getProduct);
  } else {
    let getPageview = pageview.innerText;
    getProduct = findProduct("pageview", getPageview);
    uiProductPriceHandler(getProduct);
  }
});

function findProduct(propertyArray, propertyText) {
  getProduct = products.find((product) => {
    return product[propertyArray] == propertyText;
  });
  return getProduct;
}

function productHandler(products, index) {
  getProduct = products[index];
  uiProductPriceHandler(getProduct);
}

function uiProductPriceHandler(getProduct) {
  if (inputCheck.checked) {
    let multiplyPrice = getProduct.price * 12;
    let percentPrice = multiplyPrice - (multiplyPrice * 25) / 100;
    pageview.textContent = `${getProduct.pageview}`;
    price.textContent = `$${percentPrice}.00`;
    plan.textContent = " /year";
  } else {
    pageview.textContent = `${getProduct.pageview}`;
    price.textContent = `$${getProduct.price}.00`;
    plan.textContent = " /month";
  }
}
