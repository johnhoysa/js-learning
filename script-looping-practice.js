let feedMeContnet = document.querySelector('#feedMeContnet');

var myData = {
  squadName: 'Super hero squad',
  homeTown: 'Metro City',
  formed: 2016,
  secretBase: 'Super tower',
  active: true,
  members: [
    {
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast']
    },
    {
      name: 'Madame Uppercut',
      age: 39,
      secretIdentity: 'Jane Wilson',
      powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes']
    },
    {
      name: 'Eternal Flame',
      age: 100,
      secretIdentity: 'Unknown',
      powers: ['Immortality', 'Heat Immunity', 'Inferno', 'Teleportation', 'Interdimensional travel']
    }
  ]
};

var theVillian = 'The Mad Villian';
function displayContnet() {
  for (i = 0; i < 3; i++) {
    feedMeContnet.innerHTML += `
    <div class="round">
    <p>My name is ${myData.members[i].name} </p>
    <p>My age is ${myData.members[i].age} </p>
    <p>My secret identity is ${myData.members[i].secretIdentity} but don't tell ${theVillian}, I don't trust him. </p>
    </div>
  `;
  }
}

displayContnet();
