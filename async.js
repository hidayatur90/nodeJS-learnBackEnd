// class NetworkError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'NetworkError';
//     }
//   }
  
//   // TODO: 1
//   const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//       if (isOffline) {
//         reject(new NetworkError("Gagal mendapatkan data dari internet"));
//       } else {
//         resolve({ name: "John", age: 18 });
//       }
//     });
//   };
  
  
//   // TODO: 2
//   const gettingUserName = async () => {
//     try {
//       const data = await fetchingUserFromInternet(false);
//       return data.name;
//     } catch (error) {
//       return error.message;
//     }
//   };
//   gettingUserName();

// function main() {
//     try {
//         console.log("Fetching username...");
//         const username = await fetchUsername();
//         console.log(`You are logged in as ${username}`);
//         console.log("Welcome!");
//     } catch(e) {
//         console.log("Username tidak ditemukan");
//     }
// }

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");