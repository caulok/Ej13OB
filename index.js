import { suma, multiplica } from "./controller.js";
import chalk from 'chalk';

let suma1 = suma(1, 2);
let suma2 = suma(4, 5);

let multi = multiplica(suma1, suma2);
console.log(chalk.green(multi));