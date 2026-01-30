let cart_buttons = document.querySelectorAll(".to-cart");

cart_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.parentElement.dataset.id;

    alert(`Товар з ID ${id} додано до кошика!`);
  });
});
