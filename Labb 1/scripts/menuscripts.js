//classes
class MenuItem {
  constructor(name, image, description, price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}

//constants
const mItems = document.querySelector("#menu");

const stringMenulist = `[
  {
    "name": "Garf Pizza",
    "image": "images/pizza.png",
    "description": "Tomatosauce, cheese, pepperonis",
    "price": 5
  },
  {
    "name": "Catpuccino",
    "image": "images/catpuccino.png",
    "description": "Strong, bold espresso, floffed milk",
    "price": 3
  },
  {
    "name": "Delicious Lasagna",
    "image": "images/delicious-lasagna.png",
    "description": "Like your italian nonna has made it, Garfs favourite",
    "price": 10
  },
  {
    "name": "Death by chocolate",
    "image": "images/chocolate.png",
    "description": "Dark as your soul, kills your cat (and Odie)",
    "price": 7
  }
]`;

const menuList = [];

//buttons

function ready() {
  const removeCartItemButtons = document.getElementsByClassName("removing-btn");
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  const addToCartButtons = document.getElementsByClassName("adding-btn");
  for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

//functions
function displayMenuItems() {
  const jsonMenulist = JSON.parse(stringMenulist);

  for (const item of jsonMenulist) {
    menuList.push(
      new MenuItem(item.name, item.image, item.description, item.price)
    );
  }
  for (const menuItem of menuList) {
    //skapa element
    const card = document.createElement("li");
    const cardBody = document.createElement("div");
    const image = document.createElement("img");
    const cardText = document.createElement("div");
    const title = document.createElement("h4");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const button = document.createElement("button");
    //styla element
    card.classList.add("card", "mb-2", "shop-item");
    cardBody.classList.add("card-body");
    image.classList.add("img-fluid", "card-image", "rounded", "float-start");
    cardText.classList.add("text-center");
    title.classList.add("card-title", "item-title");
    description.classList.add("card-text");
    price.classList.add("card-text", "item-price");
    button.classList.add(
      "adding-btn",
      "btn",
      "border-3",
      "align-content-center"
    );
    //innehåll i element
    image.src = menuItem.image;
    title.innerText = menuItem.name;
    description.innerText = menuItem.description;
    price.innerText = `${menuItem.price}$`;
    button.innerText = "Add To Cart";

    //lägga till element i DOM
    cardText.append(title, description, price, button);
    cardBody.append(image, cardText);
    card.append(cardBody);
    mItems.appendChild(card);
  }
  ready();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  updateCartTotal();
}

function addToCartClicked(event) {
  const button = event.target;
  const shopItem = button.parentElement;
  const title = shopItem.getElementsByClassName("item-title")[0].innerText;
  const price = shopItem.getElementsByClassName("item-price")[0].innerText;

  addItemToCart(title, price);
  updateCartTotal();
}

function addItemToCart(title, price) {
  const cartItems = document.getElementsByClassName("cart-items")[0];
let hasUpdated = 0;
  for (const item of cartItems.getElementsByClassName("cart-item-name")) {

    if(item.innerText == title){
      const itemRow = item.parentElement;
      parseInt(itemRow.getElementsByClassName("cart-qty")[0].innerText)++;
      updateCartTotal();
       hasUpdated++;
    }
    
  }
  if (hasUpdated == 0) {
    //Elements
    const cartRow = document.createElement("tr");
    const itemName = document.createElement("td");
    const itemQty = document.createElement("td");
    const itemPrice = document.createElement("td");
    const buttonContainer = document.createElement("td");
    const button = document.createElement("button");
    //Styling
    cartRow.classList.add("cart-row");
    itemName.classList.add("cart-item-name");
    itemQty.classList.add("cart-qty");
    itemPrice.classList.add("cart-price");
    button.classList.add("btn", "removing-btn");
    //innehåll i element
    itemName.innerText = title;
    itemQty.innerText = 1;
    itemPrice.innerText = `$${price}`;
    button.innerText = "Remove";
    //lägga till element i DOM
    buttonContainer.append(button);
    cartRow.append(itemName, itemQty, itemPrice, buttonContainer);
    cartItems.appendChild(cartRow);
  }
}

{
  /* <tr class="cart-row">
                        <td scope="row" class="cart-item-name">Pizza</td>
                        <td class="cart-qty">1</td>
                        <td class="cart-price">5$</td>
                        <td>
                          <button type="button" class="btn removing-btn">
                            Remove
                          </button>
                        </td>
                      </tr> */
}

function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cart-items")[0];
  const cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName("cart-price")[0];
    const quantityElement = cartRow.getElementsByClassName("cart-qty")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = parseInt(quantityElement.innerText);
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
