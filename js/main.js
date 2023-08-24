// create array of objects
const ourTeam = [
  (member1 = {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
  }),
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
  for (let memberProps in member) {
    console.log(member[memberProps]);
  }
}

// !TODO: print the same info on the DOM as strings
