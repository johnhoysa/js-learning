let toggleList = document.querySelector('.toggle-list-view');
let toggleGrid = document.querySelector('.toggle-grid-view');
let tileWrap = document.querySelector('.content-wrap');

toggleList.onclick = function() {
  tileWrap.classList.add('list-view');
  tileWrap.classList.remove('grid-view');
};

toggleGrid.onclick = function() {
  tileWrap.classList.add('grid-view');
  tileWrap.classList.remove('list-view');
};
