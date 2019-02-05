const person = { name: 'David Walsh', gender: 'Male' };
const tools = { computer: 'Mac', editor: 'Atom' };
const attributes = { handsomeness: 'Extreme', hair: 'Brown', eyes: 'Blue' };

const summary = { ...person, ...tools, ...attributes };

console.log(summary);

const person1 = { name: 'David Walsh', age: 33 };
const person2 = { name: 'David Walsh Jr.', role: 'kid' };

const merged = { ...person1, ...person2 };

console.log(merged);
