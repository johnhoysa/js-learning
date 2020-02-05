// Orig tutorial https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

let feedMeContnet = document.querySelector("#feedMeContnet");

var superData = {
  squadName: "The Super Squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Bat Cave",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      pronoun: "his",
      secretIdentity: "Danny Jukes",
      powers: ["Radiation resistance", " Turning tiny", " Radiation blast"]
    },
    {
      name: "Madame Haymaker",
      age: 39,
      pronoun: "her",
      secretIdentity: "Jane Wilson",
      powers: ["Mean right hook", " Super strength", " Superhuman reflexes"]
    },
    {
      name: "Eternal Flame",
      age: 77,
      pronoun: "her",
      secretIdentity: "Jenny Block",
      powers: [
        "Immortality",
        " Heat Immunity",
        " Inferno Punch",
        " Interdimensional travel"
      ]
    },
    {
      name: "Penelope Power",
      age: 1342,
      pronoun: "their",
      secretIdentity: "The People",
      powers: [
        "Morality",
        " Compassion",
        " Empathy",
        " Togetherness",
        " Community"
      ]
    }
  ]
};

var villianData = {
  squadName: "Villians United",
  homeTown: "Big Business",
  formed: 2016,
  secretBase: "Super Tower",
  active: true,
  members: [
    {
      name: "Spam Man",
      age: 46,
      pronoun: "his",
      secretIdentity: "Ben Dover",
      powers: ["Robo Call", " Chain Letters"]
    },
    {
      name: "Mad Villian",
      age: 58,
      pronoun: "his",
      secretIdentity: "That Guy",
      powers: ["Mad"]
    },
    {
      name: "Fire Proof",
      age: 90,
      pronoun: "her",
      secretIdentity: "Unknown",
      powers: ["Can lie without pants catching on fire", " Smarty Pants"]
    },
    {
      name: "Untouchable",
      age: 64,
      pronoun: "his",
      secretIdentity: "That Guy",
      powers: ["Slippery", "Slick"]
    }
  ]
};

function displayContnet() {
  for (i = 0; i < superData.members.length; i++) {
    feedMeContnet.innerHTML += `
    <div class="superHero">
      <p>${superData.members[i].name}</p>
      <p>Watch out for ${superData.members[i].pronoun} ${superData.members[i].powers}</p>
    </div>
    <div class="villians">
      <p>${villianData.members[i].name}</p>
      <p>Watch out for ${villianData.members[i].pronoun} ${villianData.members[i].powers}</p>
    </div>
  `;
  }
}

displayContnet();
