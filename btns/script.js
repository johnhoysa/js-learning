let btns = document.getElementsByClassName('fake-btn');

//Display in console what is included with btns
//It is always more then I expect, for example it already grabbed the data attributes for me.
//I know have access to everything displayed in the console.
console.log(btns);

//display results in the below area
let selectedBtn = document.querySelector('.selected-btn');

//loop through my btns and look for an onclick event
for (let btn of btns) {
  btn.onclick = function() {
    const btnTextContent = this.textContent;
    selectedBtn.innerHTML = `
    <div class="round">
      <p>${btnTextContent}, ${btn.dataset.price} </p>
    </div>
  `;
  };
}

/*
If we include the + in the code it will add a block each time you click a button. 
selectedBtn.innerHTML +=
Without the + the content will replace what is currently there
selectedBtn.innerHTML =
*/
