// class Animal {

//     constructor(){
//         this.animal = "Kucing";
//     }
    
//     nameAnimal(name){
//         console.log(` this animal is ${name} enemy of ${this.animal}`);
//     }
    
// }

// const animal1 = new Animal();
// animal1.nameAnimal("Anjing");


// /** 
// cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
// **/
// var contacts = [];
// // contoh
// function Mail() {
//     this.from = 'pengirim@dicoding.com';
//     var contacts = [];
// }
 
// /**
// cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
// **/
// this._contacts = []
// // contoh
// class Mail {
//     constructor() {
//         this._contacts = [];
//         this.from = 'pengirim@dicoding.com';
//     }
// }
 
// /** 
// cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
//   **/
// // #contacts = [];
// // contoh
// class Mail {
//     #contacts = [];
//     constructor() {
//         this.from = 'pengirim@dicoding.com';
//     }
// }

// class Mail{
//     constructor(author) {
//         this._contacts = [];
//         this.from = author;
    // }
    // sendMessage = function(msg, to) {
    //     console.log('you send:', msg, 'to', to, 'from', this.from);
    //     this._contacts.push(to);
    // }
//     showAllContacts() {
//         return this._contacts;
//     }
// }

// class WhatsApp extends Mail {
//     constructor(username, isBussinessAccount, phoneNumber) {
//         super(phoneNumber);
//         this.username = username;
//         this.isBussinessAccount = isBussinessAccount;
//     }
 
//     // Overriding method => Melakukan Override Total
//     sendMessage(msg, to) {
//         super.sendMessage(msg, to);
//         console.log('Send by WA');
//     }
// }

// const wa1 = new WhatsApp("1", true, "2");
// wa1.sendMessage("Hallo Regita", "08175729321");

// const wa2 = new WhatsApp('di', true, '089000999888');
// wa2.sendMessage('halo', '089000999888');
// wa1.readMessage("Hiday");

// const mail1 = new Mail();
// mail1.sendMessage("Hallo Hiday", "08175729371");
// const mail2 = new Mail();
// mail2.sendMessage("Hallo Hiday2", "08275729371");
// const mail3 = new Mail();
// mail3.sendMessage("Hallo Hiday3", "08375729371");

// console.log(mail1.showAllContacts());
// console.log(mail2.showAllContacts());
// console.log(mail3.showAllContacts());



class Animal {
    constructor(){
        this.name = "";
        this.age = 0;
        this.isMammal = true;
    }
}

class Rabbit extends Animal {
    constructor(name, age){
        super(name);
        this.name = name;
        this.age = age;
        this.isMammal = true;
    }
    eat(){
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor(name, age){
        super(name);
        this.name = name;
        this.age = age;
        this.isMammal = false;
    }
    fly(){
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);
console.log(myRabbit.eat());
console.log(myEagle.fly());