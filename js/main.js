const targetContainer = document.getElementById("par-container");

// create array of objects
const ourTeam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    pic: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    pic: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    pic: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    pic: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    pic: "barbara-ramos-graphic-designer.jpg",
  },
];

// print on console: name, role and pic(string) for each member of the team
for (const member of ourTeam) {
  for (let attribute in member) {
    console.log(member[attribute]);
  }
}

// print the same info on the DOM as strings
// for (const member of ourTeam) {
//   targetContainer.innerHTML += `Name: ${member.name} <br>`;
//   targetContainer.innerHTML += `Role: ${member.role} <br>`;
//   targetContainer.innerHTML += `Pic link: ${member.pic} <br><br>`;
// }

// #BONUS1: make pic link show as actual pic
// for (const member of ourTeam) {
//   targetContainer.innerHTML += `Name: ${member.name} <br>`;
//   targetContainer.innerHTML += `Role: ${member.role} <br>`;
//   targetContainer.innerHTML += `<img src="../img/${member.pic}"><br><br>`;
// }

// #BONUS2: organise members in cards
for (const member of ourTeam) {
  targetContainer.innerHTML += `
    <div class="card mb-5" style="width: 18rem;">
    <img src="../img/${member.pic}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${member.name}</h5>
      <p class="card-text">${member.role}</p>
    </div>
  </div>`;
}
