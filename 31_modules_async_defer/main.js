// модули, async, defer 
import { setItemToLocalStorage } from "./helpers.js";

console.log("Главный скрипт");

console.dir(document.getElementById("heading"));
// console.dir(document.getElementById("heading").textContent);

const numbersArray = [1, 2, 3, 4, 5];

setItemToLocalStorage("numbers", numbersArray);