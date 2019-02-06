//Orig Tutorial: https://davidwalsh.name/merge-objects

const person = { name: "John Hoysa", gender: "Male", age: "39" };
const tools = {
  computer: "Mac",
  editor: "VS Code",
  phone: "iPhone",
  vehicle: "car"
};
const attributes = {
  height: "Tall",
  hair: "Dark",
  eyes: "Brown",
  inShape: true
};

const summary = { ...person, ...tools, ...attributes };

console.log(summary);
