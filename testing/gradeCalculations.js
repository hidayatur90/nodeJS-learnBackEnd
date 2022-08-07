// const averageExams = (valuesExam) => {
//     const numberValidation = valuesExam.every(exam => typeof exam === 'number');
//     if (!numberValidation) throw Error('please input number');
 
//     const sumValues = valuesExam.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
//     return sumValues / valuesExam.length;
// };
 
// const isStudentPassExam = (valuesExam, name) => {
//     const minValues = 75;
//     const average = averageExams(valuesExam);
    
//     if (average > minValues) {
//         console.log(`${name} pass the exams`);
//         return true;
//     } else {
//         console.log(`${name} fail the exams`);
//         return false;
//     }
// };
 
// module.exports = { averageExams, isStudentPassExam };

// let x;
// x = 7;
// x = 'JS is great';
// console.log(x);

// const firstString = "Hello";
// const secondString = "JavaScript";

// console.log(firstString + secondString);

// let myJob;
// myJob = "Backend Developer";


// console.log(myJob);


// const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// // TODO: Kode untuk menambahkan item Charlie pada index ke-2
// phoneticAlphabet.splice(2, 0, 'Charlie');
// console.log(phoneticAlphabet);

// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// delete artistsAndSongs["Keyakizaka46"];

// console.log(artistsAndSongs)

// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);

// function multiply(num) {
//     total = num * num;
//     return total;
// }

// const result = multiply(3);

// console.log(result);

// try {
//     const arr = [1, 2, 3, 4];
//     for (let i = 0; i <= 4; i++) {
//         console.log(arr[i]);
//     }
// } catch(e) {
//     console.log("Out of bounds");
// }

// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyError";
//     }
// }

// try {
//     throw new MyCustomError("This is an error");
// } catch (e) {
//     console.log(e.message);
// }

// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// const username = fetchUsername();
// console.log(`You are logged in as ${username}`);
// console.log("Welcome!");

// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//     console.log(`You are logged in as ${value}`);
// })
// console.log("Welcome!");

function findMin(a, b, c) {
    let minValue = 0;

    if (a < b) {
        minValue = a;
    } else if (b < c) {
        minValue = b;
    } else {
        minValue = c;
    }

    return minValue;
}

console.log(findMin(1,2,3))
console.log(findMin(5,1,2))
console.log(findMin(102, 404, 48))
console.log(findMin(-1, 0, -1))
console.log(findMin(2, 2, 2))