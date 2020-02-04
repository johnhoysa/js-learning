import { getUsefulContents, data } from "../app.js";

export function headings(data) {
  for (let i = 0; i < data.group.length; i++) {
    contentHere.innerHTML += `<h3>${data.group[i].headline}</h3>`;
  }
}
