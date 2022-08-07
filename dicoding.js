// const abc = function(a,b){
//     let restult = a + b
//     return restult
// }

// console.log(abc(2,3))

// parameter = variable yang menampung nilai inputan di dalam sebuah function
// argument = nilai (value) dari inputan yang dimasukkan kedalam sebuah parameter
// local variable = variable yang di deklarasikan di dalam sebuah blok code
// global variable = variable yang di deklasrasikan di luar dari sebuah blok code (global)
// local tidak bisa dipanggil di luar dari blok code
// global bisa di panggil dimanapun di dalam atau diluar dari sebuah blok code

// let varBaru = 768 // global variable

// function bcd(nama, hari) { // parameter
//     // let varBaru = 123 //local varibale

//     if(hari == "Senin") {
//         return `Halo ${nama}, Hari ini Senin`
//     } else {
//         return `${varBaru}`
//     }
// }

// let x = bcd("Hida", "Selasa") // argument
// console.log(x)
// console.log(varBaru)



// arrow function

// const xyz = x => x+6

// console.log(xyz(5))


// const minimal = (a,b) => {
//     let result = a > b ? b : a
//     return result
// }

// console.log(minimal(2,5))

// const power = (a,b) => a**b

// console.log(power(7,3))

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.info(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);