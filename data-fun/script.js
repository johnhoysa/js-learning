// Orig tutorial https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

let feedMeContnet = document.querySelector("#feedMeContnet");

var superData = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      name: "Eternal Flame",
      age: 100,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    },
    {
      name: "People Power",
      age: 100,
      secretIdentity: "It's them over there",
      powers: ["Morality", "Compassion", "Empathy", "Togetherness", "Community"]
    }
  ]
};

var villianData = {
  squadName: "Villians United",
  homeTown: "Trumpville",
  formed: 2016,
  secretBase: "Super Tower",
  active: true,
  members: [
    {
      name: "Spam Man",
      age: 46,
      secretIdentity: "Ben Dover",
      powers: ["Robo Call", "Chain Letters"]
    },
    {
      name: "Mad Villian",
      age: 58,
      secretIdentity: "That Guy",
      powers: ["none"]
    },
    {
      name: "Fire Proof",
      age: 100,
      secretIdentity: "Unknown",
      powers: ["Can lie without pants catching on fire", "Creator of Alt-Facts"]
    }
  ]
};

var theVillian = "The Mad Villian";

function displayContnet() {
  for (i = 0; i < superData.members.length; i++) {
    feedMeContnet.innerHTML += `
    <div class="round">
    <p>My name is ${superData.members[i].name} </p>
    <p>My age is ${superData.members[i].age} </p>
    <p>My secret identity is ${
      superData.members[i].secretIdentity
    } but don't tell ${theVillian}, I don't trust him. </p>
    </div>
  `;
  }
}

displayContnet();
