let toggleList = document.querySelector(".toggle-list-view");

let toggleGrid = document.querySelector(".toggle-grid-view");

let productTile = document.querySelectorAll(".change-view");

toggleList.onclick = function() {
  for (let i = 0; i < productTile.length; i++) {
    productTile[i].classList.add("list-view");
    productTile[i].classList.remove("grid-view");
  }
};

toggleGrid.onclick = function() {
  for (let i = 0; i < productTile.length; i++) {
    productTile[i].classList.add("grid-view");
    productTile[i].classList.remove("list-view");
  }
};

// This works for one single item
// toggleList.onclick = function() {
//   productTile.classList.add("list-view");
//   productTile.classList.remove("grid-view");
// };
