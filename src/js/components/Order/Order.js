import menuData from "../../data/menuData.js";
import { generateOrder, generateSummaryListHTML } from "./utils.js";

export default function Order(root, cartContext, checkout) {
  const listEl = root.querySelector("[data-list]");
  const totalEl = root.querySelector("[data-total]");
  const completeBtn = root.querySelector("[data-complete]");

  cartContext.cartChanged.push(handleCartChanged);

  completeBtn.addEventListener("click", handleCompleteClick);

  function handleCartChanged(cart) {
    root.style.display = "block";
    const order = generateOrder(cart, menuData);

    renderSummaryList(order.fullItems, order.discounts);

    renderTotal(order.total);
  }

  function renderSummaryList(fullItems, discounts) {
    listEl.innerHTML = generateSummaryListHTML(fullItems, discounts);
  }

  function renderTotal(total) {
    totalEl.textContent = `$${total}`;
  }

  function handleCompleteClick() {
    checkout.style.display = "block";
  }
}
