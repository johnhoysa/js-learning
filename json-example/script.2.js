//Create variable for json data
const requestURL = "https://ecn1.eshop2.macsales.com/api/used-macs/config/?item=UAQA1JS6XXX10XI";
//
const requestMac = new XMLHttpRequest();
requestMac.open("GET", requestURL);
requestMac.responseType = "text";
requestMac.send();
//
requestMac.onload = function() {
  const usedMacRepsonse = requestMac.response;
  const systemInfo = JSON.parse(usedMacRepsonse);
  usedMac(systemInfo);
};
//
function usedMac(jsonObj) {
  const systemInfo = jsonObj;
  usedMacs.innerHTML +=`
  <div class="hero">
    <h1>${systemInfo.machineHeadline}</h1>
    <p>${systemInfo.systems[0].systemDetails}</p>
  </div>
  `;
  //
  var  optionsLabel = '';
  for (let i = 0; i < systemInfo.systems[0].options.length; i++) {
    console.log('line 30ish ', systemInfo.systems[0].options[i].optionGroupLabel);
    optionsLabel += '<p>' + systemInfo.systems[0].options[i].optionGroupLabel + '</p>'
  }
  usedMacs.innerHTML +=`
  ${optionsLabel}
  `;
  //
}





  


