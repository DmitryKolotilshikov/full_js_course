import { getItemFromLocalStorage} from "./helpers.js";

const numbersArray = getItemFromLocalStorage("numbers");

console.log("otherLogic script =>", numbersArray);