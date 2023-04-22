const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "9N1M SENSE",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://images.asos-media.com/products/9n1m-sense-st-michael-print-hoodie-in-black/201441793-1-black?$n_640w$&wid=513&fit=constrain",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "AllSaints",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://images.asos-media.com/products/allsaints-half-zip-ramskull-sweatshirt-in-black/201063415-1-black?$n_640w$&wid=513&fit=constrain",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Calvin Klein Jeans",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://images.asos-media.com/products/calvin-klein-jeans-slim-tapered-fit-jeans-in-black-wash/201236710-1-black?$n_640w$&wid=513&fit=constrain",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "adidas Originals",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://images.asos-media.com/products/adidas-originals-yung-z-t-shirt-in-white-with-back-print/201053787-1-white?$n_640w$&wid=513&fit=constrain",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Berghaus",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://images.asos-media.com/products/berghaus-baltic-t-shirt-in-black/201618757-1-white?$n_640w$&wid=513&fit=constrain",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
