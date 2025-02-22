// var generateName = require("sillyname");  //cjs
// import generateName from "sillyname"; //esm
import { randomSuperhero } from "superheroes"; //esm
const sillyName = randomSuperhero();
console.log(`My name is ${sillyName}`);
