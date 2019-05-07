//Create variable for json data
const requestURL = "https://ecn1.eshop2.macsales.com/api/used-macs/config/?item=UABF1D79OBX1XXC";

const requestMac = new XMLHttpRequest();
requestMac.open("GET", requestURL);
requestMac.responseType = "text";
requestMac.send();

requestMac.onload = function() {
  const usedMacRepsonse = requestMac.response;
  const systemInfo = JSON.parse(usedMacRepsonse);
  usedMac(systemInfo);
  highlights(systemInfo)
};

function usedMac(jsonObj) {
  const systemInfo = jsonObj;
  
  usedMacs.innerHTML +=`
  <div class="hero">
    <h1>${systemInfo.machineHeadline}</h1>
    <p>${systemInfo.systems[0].systemDetails}</p>
  </div>
  `;
}

let highlightLabel = '';
let highlightValue = '';
let highlightList = '';
function highlights(jsonObj){
  const systemInfo = jsonObj;
  console.log(systemInfo.highlights.length);
  for (let i = 0; i < systemInfo.highlights.length; i++) {
    highlightLabel = '<p>' + systemInfo.highlights[i].label + '</p>';
    highlightValue = '<li>' + systemInfo.highlights[i].values + '</li>';
    //loop through label and create list under it.
    highlightList +=`
    ${highlightLabel}
    <ul class="highlights-items">${highlightValue}</ul>
  `;
  }
  usedMacs.innerHTML +=`
    <div class="container">
      <div class="highlights">
        ${highlightList}
      </div>
    </div>
  `;

  
}

