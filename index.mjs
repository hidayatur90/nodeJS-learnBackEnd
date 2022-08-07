// // import { createRequire } from 'module';
// // const require = createRequire(import.meta.url);
// import { coffeeStock as stock, isCoffeeMachineReady } from './state.mjs';
// // const coffeeStock = require('./state');
// // const displayStock = stock => {
// //     for (const type in stock) {
// //         console.log(type);
// //     }
// // }

// // displayStock(coffeeStock);

// // console.log(stock);
// console.log(isCoffeeMachineReady);

// let myString = "";

// try {
//     myString += "a";
//     throw Error();
// } catch(e) {
//     myString += "b";
// } finally {
//     myString += "c";
//     throw Error();
//     myString += "d";
// }

// console.log(myString);

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}