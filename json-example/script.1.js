//Create variable for json data
const requestURL = "https://ecn1.eshop2.macsales.com/api/used-macs/config/?item=UAQA1JS6XXX10XI";

const requestMac = new XMLHttpRequest();
requestMac.open("GET", requestURL);
requestMac.responseType = "text";
requestMac.send();

requestMac.onload = function() {
  const usedMacRepsonse = requestMac.response;
  const systemInfo = JSON.parse(usedMacRepsonse);
  heroUnit(systemInfo);
  highlights(systemInfo)

};

function heroUnit(jsonObj) {
  const systemInfo = jsonObj;
  //console.log(systemInfo);
  //

  usedMacs.innerHTML += `
  <div class="hero">
    <h1>${systemInfo.machineHeadline}</h1>
    <p>${systemInfo.systems[0].systemDetails}</p>
    <p>${systemInfo.systems[0].options[1].optionGroupLabel}</p>
    <p>${systemInfo.systems[0].options[1].optionValues[0].label}</p>
    
  </div>
  `;
}


//Variables I need to use in the below loop
//Best practice of location not sure of but I would think its at top of page 
let highlightLabel = '';
let highlightValue = '';
let highlightList = '';
//
function highlights(jsonObj){
  const systemInfo = jsonObj;
  console.log(systemInfo.highlights.length);
  for (let i = 0; i < systemInfo.highlights.length; i++) {
    highlightLabel = '<p>' + systemInfo.highlights[i].label + '</p>';
    highlightValue = '';
    //
    for (let j = 0; j < systemInfo.highlights[i].values.length; j++) {
      console.log('line 47', systemInfo.highlights[i].values[j]);
      //highlightValue += '<li>' + systemInfo.highlights[i].values[j] + '</li>';
    }
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
