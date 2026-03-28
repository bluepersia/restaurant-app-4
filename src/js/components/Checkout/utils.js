function generateSubmissionHTML(name) {
  return `
  <div class="order__inner container">
    <p class="order__submitted">Thanks, ${name}! Your order is on its way!
    </div>`;
}

export { generateSubmissionHTML };
