function generateOrder(cart, menuData) {
  const fullItems = cart.map((cartItem) => ({
    ...cartItem,
    ...menuData.find((menuItem) => menuItem.id === cartItem.id),
    getSubtotal: function () {
      return this.price * this.quantity;
    },
  }));

  const discounts = calculateDiscounts(fullItems);

  return {
    fullItems,
    discounts,
    total:
      fullItems.reduce((prev, curr) => prev + curr.getSubtotal(), 0) -
      discounts.reduce((prev, curr) => prev + curr.discount, 0),
  };
}

function calculateDiscounts(fullItems) {
  const discounts = [];
  const comboDiscount = calculateComboDiscount(fullItems);

  if (comboDiscount) {
    discounts.push(comboDiscount);
  }

  return discounts;
}

function calculateComboDiscount(fullItems) {
  let combos = [];

  for (const item of fullItems) {
    for (let i = 0; i < item.quantity; i++) {
      if (item.name === "Pizza" || item.name === "Hamburger") {
        combos.push({
          food: item,
          drink: null,
        });
      }
    }
  }

  for (const item of fullItems) {
    if (item.name === "Beer") {
      for (let i = 0; i < item.quantity; i++) {
        const match = combos.find((combo) => combo.drink === null);

        if (match) {
          match.drink = item;
        }
      }
    }
  }

  combos = combos.filter((combo) => combo.drink !== null);

  if (combos.length <= 0) {
    return null;
  }

  return {
    name: "Food + Drink Combo",
    discount: combos.reduce((prev, curr) => {
      const discount = Math.round((curr.food.price + curr.drink.price) * 0.15);

      return prev + discount;
    }, 0),
  };
}

function generateSummaryListHTML(fullItems, discounts) {
  return fullItems
    .map(
      ({ id, name, price, quantity }) =>
        ` <li class="order-item">
                <h3 class="order-item__title">${name}${
          quantity > 1 ? `(${quantity})` : ""
        }</h3>
                <button class="order-item__remove-btn" data-remove="${id}">remove</button>
                <p class="order-item__price">$${price}</p>
         </li>`
    )
    .concat(
      discounts.map(
        ({ name, discount }) =>
          ` <li class="order-item">
                <h3 class="order-item__title">${name}</h3>
                <p class="order-item__price">-$${discount}</p>
         </li>`
      )
    )
    .join("\n");
}

export { generateOrder, generateSummaryListHTML };
