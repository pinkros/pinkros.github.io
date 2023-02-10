class MenuItem {
  constructor(name, image, description, price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}
import jsonMenulist from "./menuitems.json" assert { type: "JSON" };
// vi behöver göra en funktion som konverterar som gör jsonmenulist som kommenterar objekten i json menulist till faktiska items, efter det behöver vi göra en funktion/metod som skapar korten och vi injecerar i html filen
// vi ska skapa alla taggar
