import menuData from "../../data/menuData.js";
import { generateMenuHTML } from "./utils.js";

export default function Menu(root, cartContext) {
  renderMenu();

  root.addEventListener("click", handleClick);

  function renderMenu() {
    root.innerHTML = generateMenuHTML(menuData);
  }

  function handleClick(e) {
    if (e.target.dataset.add) {
      cartContext.addToCart(Number(e.target.dataset.add));
    }
  }
}
