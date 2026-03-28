function addItem(state, id) {
  const newCart = [...state.cart];
  const itemInCart = state.cart.find((item) => item.id === id);

  if (itemInCart) {
    newCart[state.cart.indexOf(itemInCart)] = {
      id,
      quantity: itemInCart.quantity + 1,
    };

    return { ...state, cart: newCart };
  }

  newCart.push({
    id,
    quantity: 1,
  });

  return { ...state, cart: newCart };
}

function removeItem(state, id) {
  const newCart = [...state.cart];
  const itemInCart = state.cart.find((item) => item.id === id);

  const newItem = {
    ...itemInCart,
    quantity: itemInCart.quantity - 1,
  };

  if (newItem.quantity <= 0) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    };
  }

  newCart[state.cart.indexOf(itemInCart)] = newItem;

  return {
    ...state,
    cart: newCart,
  };
}

export { addItem, removeItem };
