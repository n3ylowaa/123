document.addEventListener("DOMContentLoaded", () => {
  function createSeats(blockId, rows, seatsInRow) {
    const block = document.getElementById(blockId);
    if (!block) return;
    let html = '';
    for (let r = 0; r < rows; r++) {
      html += `<g transform="translate(0, ${r * 42})">`;
      for (let s = 0; s < seatsInRow; s++) {
        const isBooked = Math.random() < 0.15 ? 'class="booked"' : '';
        html += `<use href="#seat-template" x="${s * 42}" ${isBooked}></use>`;
      }
      html += `</g>`;
    }
    block.innerHTML = html;
  }

  createSeats('top-block', 4, 14);
  createSeats('left-block', 4, 8);
  createSeats('right-block', 4, 8);

  const schemeSvg = document.querySelector(".scheme-svg");
  const totalPriceTag = document.querySelector(".price-total");
  const menuButton = document.querySelector(".m-menu");
  const menu = document.querySelector(".menu");
  let cost = 500;
  let totalPrice = 0;

  if (schemeSvg) {
    schemeSvg.addEventListener("click", (event) => {
      const target = event.target.closest('use');
      if (target && !target.classList.contains("booked")) {
        target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        if (totalPriceTag) totalPriceTag.textContent = totalPrice;
      }
    });
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      console.log("Кликнули по меню");
      menu.classList.toggle("is-open");
    });
  }
});
