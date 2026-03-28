import Menu from "./components/Menu/Menu.js";
import CartContext from "./contexts/CartContext/CartContext.js";

const cartContext = CartContext();

Menu(document.getElementById("menu-list"), cartContext);
