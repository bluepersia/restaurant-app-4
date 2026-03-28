import { generateSubmissionHTML } from "./utils.js";

export default function Checkout(root, order) {
  const formEl = root.querySelector("[data-form]");

  formEl.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    renderSubmitted(formData.get("name"));
  }

  function renderSubmitted(name) {
    root.style.display = "none";
    order.classList.add("order--submitted");
    order.innerHTML = generateSubmissionHTML(name);
  }
}
