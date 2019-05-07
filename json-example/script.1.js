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
  //
  usedMacs.innerHTML +=`
  <div class="hero">
    <h1>${systemInfo.machineHeadline}</h1>
    <p>${systemInfo.systems[0].systemDetails}</p>
  </div>
  `;
}

//Variables I need to use in the below loop
//Best practice of location not sure of but I would think its at top of page 
let highlightLabel = '';
let highlightValue = '';
//
function highlights(jsonObj){
  const systemInfo = jsonObj;
  console.log(systemInfo.highlights.length);
  for (let i = 0; i < systemInfo.highlights.length; i++) {
    highlightLabel = '<p>' + systemInfo.highlights[i].label + '</p>';
    highlightValue = '<li>' + systemInfo.highlights[i].values + '</li>';
    //loop through label and create list under it.
    usedMacs.innerHTML +=`
    ${highlightLabel}
    <ul class="highlights-items">${highlightValue}</ul>
  `;
  }
}

