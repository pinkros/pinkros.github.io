class MenuItem {
  constructor(name, image, description, price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}
const mItems = document.querySelector("#menu");

import jsonMenulist from "./menuitems.json" assert { type: "JSON" };

const menuList = [];

function presentMenu() {
  for (const item of jsonMenulist.menu_items) {
    menuList.push(
      new MenuItem(item.name, item.image, item.description, item.price)
    );
  }
  displayMenuItems();
}

function displayMenuItems() {
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
    card.classList.add("card", "mb-2");
    cardBody.classList.add("card-body");
    image.classList.add("img-fluid", "card-image", "rounded", "float-start");
    cardText.classList.add("text-center");
    title.classList.add("card-title");
    description.classList.add("card-text");
    price.classList.add("card-text");
    button.classList.add("btn", "border-3", "align-content-center");
    //innehåll i element
    image.src = menuItem.image;
    title.innerText = menuItem.name;
    description.innerText = menuItem.description;
    price.innerText = "${menuItem.price}$";
    button.innerText = "Add To Cart";
    // events

    //lägga till element i DOM
    cardText.append(title, description, price, button);
    cardBody.append(image, cardText);
    card.append(cardBody);
    mItems.appendChild(card);
  }
}

{
  /* <div class="card mb-2">
<div class="card-body">
  <img
    id="item-image"
    src="images/pizza.png"
    alt="pizza"
    class="img-fluid card-image rounded float-start"
  />
  <div class="text-center">
    <h4 id="item-title" class="card-title">Garf Pizza</h4>
    <p id="description" class="card-text">
      Tomatosauce, cheese, pepperonis
    </p>
    <p id="price" class="card-text">5$</p>
    <button
      type="button"
      class="btn border-3 align-content-center"
    >
      Add to cart
    </button>
  </div>
</div>
</div> */
}
