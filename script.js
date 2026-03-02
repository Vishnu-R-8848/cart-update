const hoodiesInventory = [{
        id: 101,
        ProductName: "Heavyweight Oversized Hoodie",
        category: "hoodies",
        price: 4500,
        stock: 45,
        discount: {
            hasDiscount: true,
            percentage: 15,
            finalPrice: 3825,
        },
        description: "Drop-shoulder aesthetic hoodie with a boxy fit. Crafted from ultra-heavyweight 500gsm fleece for that structured, premium drape.",
        imageUrl: "https://i.pinimg.com/736x/a0/40/c2/a040c2744948189a16077cdd2df424d0.jpg",
        details: {
            fit: "Boxy / Oversized",
            materials: ["80% Organic Cotton", "20% Recycled Polyester"],
            availableSizes: ["S", "M", "L", "XL"],
            colors: [
                { name: "Washed Black", hexCode: "#222222", inStock: true },
                { name: "Ash Grey", hexCode: "#b2b2b2", inStock: true },
                { name: "Matcha Green", hexCode: "#8a9a86", inStock: false },
            ],
        },
    },
    {
        id: 102,
        ProductName: "Vintage Zip-Up Graphic Hoodie",
        category: "hoodies",
        price: 5200,
        stock: 12,
        discount: {
            hasDiscount: false,
            percentage: 0,
            finalPrice: 5200,
        },
        description: "Y2K-inspired zip-up featuring distressed edges, a faded acid wash finish, and custom metallic hardware.",
        imageUrl: "https://i.pinimg.com/736x/21/f7/91/21f79108d157365f93cfc0fa7d72c3e4.jpg",
        details: {
            fit: "Relaxed / Cropped",
            materials: ["100% Cotton French Terry"],
            availableSizes: ["M", "L"],
            colors: [
                { name: "Faded Charcoal", hexCode: "#36454F", inStock: true },
                { name: "Worn Navy", hexCode: "#1d2951", inStock: true },
            ],
        },
    },
    {
        id: 103,
        ProductName: "Minimalist Essential Pullover",
        category: "hoodies",
        price: 2999,
        stock: 85,
        discount: {
            hasDiscount: true,
            percentage: 20,
            finalPrice: 2399,
        },
        description: "The perfect everyday layering piece. Clean lines, hidden kangaroo pocket, and a double-lined hood for extra warmth.",
        imageUrl: "https://i.pinimg.com/736x/6c/ca/6f/6cca6fbebbc3a281e84d87fc284cf137.jpg",
        details: {
            fit: "Standard / True to Size",
            materials: ["60% Cotton", "40% Modal"],
            availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
            colors: [
                { name: "Oatmeal Beige", hexCode: "#E1D2B8", inStock: true },
                { name: "Cloud White", hexCode: "#F5F5F5", inStock: true },
                { name: "Mocha Brown", hexCode: "#4b3621", inStock: true },
            ],
        },
    },
    {
        id: 104,
        ProductName: "Tech-Fleece Utility Hoodie",
        category: "hoodies",
        price: 6500,
        stock: 8,
        discount: {
            hasDiscount: true,
            percentage: 10,
            finalPrice: 5850,
        },
        description: "Gorpcore aesthetic meets daily comfort. Features water-resistant paneling, bungee cord adjusters, and concealed zip pockets.",
        imageUrl: "https://i.pinimg.com/736x/1b/12/4a/1b124a3e4a5e6e1c75823e902789fb7c.jpg",
        details: {
            fit: "Athletic / Articulated",
            materials: ["90% Polyester Tech-Fleece", "10% Spandex"],
            availableSizes: ["M", "L", "XL"],
            colors: [
                { name: "Stealth Black", hexCode: "#0f0f0f", inStock: true },
                { name: "Olive Drab", hexCode: "#4b5320", inStock: false },
            ],
        },
    },
];

const cart = [];
let data = ``;
let cartPro = ``;

function renderProdcts(cardData) {
    cardData.forEach((elem, idx) => {
                data += ` <div id='${elem.id}' class="card">
    <span class="stock">x${elem.stock}</span>
            <div class="card-content">
              <figure class="card-img-wrapper">
                <img
                  src="
              ${elem.imageUrl}"
                  alt=""
                  class="card-img"
                />
              </figure>
              <div class="card-text-content">
                <h2 class="card-Product-name">${elem.ProductName}</h2>
                <div class="card-details-container">
                  <p class="fit-text">${elem.details.fit}</p>
                  <div class="available-sizes">
                    <p class="sizes">
                    
                      SIZE : ${elem.details.availableSizes.map((dets) => {
                        return dets;
                      })}
                    </p>
                    <div class="colors-container">
                      <div class="colors-card">
                       ${elem.details.colors.map((dets) => {
                         return `<span class='color-circle' style='background-color:${dets.hexCode}' ></span>`;
                       })}
                        <p class="color-name">${elem.details.colors.map(
                          (dets) => {
                            return dets.name;
                          },
                        )}</p>
                      </div>
                    </div>
                  </div>
                  <p class="description-text">
                    ${elem.description}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-btn-wrapper">
              <div class="price-container">
                <p class="price">
                  ₹ ${elem.discount.finalPrice}
                  <sup class="final-price"> ${elem.price} </sup>
                  - ${elem.discount.percentage} %
                </p>
              </div>
              <div class="card-btn-container">
                <button class="buy-btn btn">Buy Now</button>
                <button id='${idx}' class="cart-btn btn">
                  <i class="ri-shopping-cart-2-line"></i>
                </button>
              </div>
            </div>
          </div>`;
  });
}
renderProdcts(hoodiesInventory);

function cartProducts(cartData) {
  cartData.forEach((elem, idx) => {
    cartPro += ` <div id='${elem.id}' class="card">
    <span class="stock">x${elem.stock}</span>
            <div class="card-content">
              <figure class="card-img-wrapper">
                <img
                  src="
              ${elem.imageUrl}"
                  alt=""
                  class="card-img"
                />
              </figure>
              <div class="card-text-content">
                <h2 class="card-Product-name">${elem.ProductName}</h2>
                <div class="card-details-container">
                  <p class="fit-text">${elem.details.fit}</p>
                  <div class="available-sizes">
                    <p class="sizes">
                    
                      SIZE : ${elem.details.availableSizes.map((dets) => {
                        return dets;
                      })}
                    </p>
                    <div class="colors-container">
                      <div class="colors-card">
                       ${elem.details.colors.map((dets) => {
                         return `<span class='color-circle' style='background-color:${dets.hexCode}' ></span>`;
                       })}
                        <p class="color-name">${elem.details.colors.map(
                          (dets) => {
                            return dets.name;
                          },
                        )}</p>
                      </div>
                    </div>
                  </div>
                  <p class="description-text">
                    ${elem.description}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-btn-wrapper">
              <div class="price-container">
                <p class="price">
                  ₹ ${elem.discount.finalPrice}
                  <sup class="final-price"> ${elem.price} </sup>
                  - ${elem.discount.percentage} %
                </p>
              </div>
              <div class="card-btn-container">
                <button id='${idx}' class="buy-btn btn">Delete cart</button>
              </div>
            </div>
          </div>`;
  });
  return cartPro;
}

let cart_container = document.querySelector(".cart-wrapper");
cart_container.innerHTML = cartProducts(cart);
let card_container = document.querySelector(".card-container");
card_container.innerHTML = data;
card_container.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-btn")) {
    let id = event.target.id;
    cart.push(hoodiesInventory[id]);
  }
  cart_container.innerHTML = cartProducts(cart);
});