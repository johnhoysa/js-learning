let searchID = document.querySelectorAll("[data-search-spring-id]");

for (let i = 0; i < searchID.length; i++) {
  searchID[i].getAttribute("data-search-spring-id");

  let ssID = searchID[i].getAttribute("data-search-spring-id");
  let ssDisplay = searchID[i].getAttribute("data-search-spring-display-type");

  //
  let apiPath =
    "https://eshop.macsales.com/api/search/featured/?tag=" +
    ssID +
    "&displayType=" +
    ssDisplay;

  fetch(apiPath)
    .then(function(response) {
      return response.json();
    })
    .then(function(ssJson) {
      myCode(ssJson);
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    });

  function myCode(ssJson) {
    let data = ssJson;

    for (let j = 0; j < 4; j++) {
      searchID[i].innerHTML += `
        <a href="${data[j].infoURL}" class="product-grid__prod">
          <div class="product-grid__content">
            <h4 class="product-grid__heading">${data[j].name}</h4>
            <p class="product-grid__copy">${data[j].description}</p>
            <p class="product-grid__orig-price">what goes here</p>
            <p class="product-grid__price">${data[j].price.value}</p>
            <p class="product-grid__savings">SAVE $100.01</p>
          </div>
          <div class="product-grid__img-wrap">
            Image Here
          </div>
        </a>
    `;
    }
  }
}
