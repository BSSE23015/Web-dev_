use("CrudDb");

db.createCollection("courses");

db.courses.insertMany([
  {
    name: "Mobile App Dev",
    price: 0,
    assignments: 35,
    projects: 25,
  },
  {
    name: "Data Science",
    price: 100,
    assignments: 30,
    projects: 15,
  },
  {
    name: "Machine Learning",
    price: 120,
    assignments: 28,
    projects: 22,
  },
  {
    name: "Cybersecurity",
    price: 80,
    assignments: 40,
    projects: 18,
  },
  {
    name: "Game Development",
    price: 150,
    assignments: 20,
    projects: 30,
  },
  {
    name: "UI/UX Design",
    price: 70,
    assignments: 25,
    projects: 20,
  },
  {
    name: "Cloud Computing",
    price: 90,
    assignments: 32,
    projects: 19,
  },
  {
    name: "AI & Robotics",
    price: 200,
    assignments: 18,
    projects: 25,
  },
  {
    name: "Database Systems",
    price: 60,
    assignments: 38,
    projects: 10,
  },
  {
    name: "Blockchain Dev",
    price: 110,
    assignments: 26,
    projects: 24,
  },
]);

let a = db.courses.find({ price: 0 });
console.log(a.toArray()); //to return all documents
let b = db.courses.findOne({ price: 0 }); //returns first document from array
console.log(b);
