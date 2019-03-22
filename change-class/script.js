let toggleList = document.querySelector('.toggle-list-view');
let toggleGrid = document.querySelector('.toggle-grid-view');
let contentWrap = document.querySelector('.content-wrap');

toggleList.onclick = function() {
  contentWrap.classList.add('list-view');
  contentWrap.classList.remove('grid-view');
};

toggleGrid.onclick = function() {
  contentWrap.classList.add('grid-view');
  contentWrap.classList.remove('list-view');
};
