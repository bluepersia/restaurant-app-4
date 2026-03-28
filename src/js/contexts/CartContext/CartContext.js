import { addItem } from "./utils.js";

export default function CartContext() {
  let state = {
    cart: [],
  };

  const cartChanged = [];

  function addToCart(id) {
    state = addItem(state, id);

    cartChanged.forEach((el) => el(state.cart));
  }

  return {
    addToCart,
    cartChanged,
  };
}
