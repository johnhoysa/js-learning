import { getUsefulContents } from "./files/getjson.js";
import { headings } from "./files/showData.js";
//
export { getUsefulContents, data } from "./app.js";

getUsefulContents(
  "https://eshop.macsales.com/api/upgrades/json/systems/",
  data => {
    console.log("from getUsefulCOntent", data);
    headings(data);
  }
);
