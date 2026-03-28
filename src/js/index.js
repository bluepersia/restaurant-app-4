import Checkout from "./components/Checkout/Checkout.js";
import Menu from "./components/Menu/Menu.js";
import Order from "./components/Order/Order.js";
import CartContext from "./contexts/CartContext/CartContext.js";

const cartContext = CartContext();

const checkoutEl = document.getElementById("checkout");
const orderEl = document.getElementById("order");

Menu(document.getElementById("menu-list"), cartContext);
Order(orderEl, cartContext, checkoutEl);
Checkout(document.getElementById("checkout"), orderEl);
