import Menu from "./components/Menu/Menu.js";
import Order from "./components/Order/Order.js";
import CartContext from "./contexts/CartContext/CartContext.js";

const cartContext = CartContext();

Menu(document.getElementById("menu-list"), cartContext);
Order(document.getElementById("order"), cartContext);
