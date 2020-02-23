// Task 1
// function test(start, end, step) {
//     if ( !step ) {
//         step = 1;
//     }
//     for (start; start <= end; start += step){
//         console.log(start);
//     }
// }
// test(10, 20);

// Task 2.1
// function mult() {
//     const num = +prompt('enter the number');
//     for (let i = 1; i <= 10; i++) {
        
//         let str  = num + "*" + i + "=" + num * i;
//         console.log (str);
//     }
// }

// Task 2.2

// function mult() {
//     const num = +prompt('enter the number');
//     const max = +prompt('enter the max multiplier');
//     for (let i = 1; i <= max; i++) {
        
//         let str  = i + "*" + num + "=" + num * i;
//         console.log (str);
//     }
// }
// mult();


// Task 3
// function func(str) {
//     if(str[str.length - 1] === "1") {
//         str += "st";
//     } else if(str[str.length - 1] === "2") {
//         str += "nd";
//     } else {
//         str += "th";
//     }
//     return str;

// }
// console.log (func("708"));
// console.log (func("701"));
// console.log (func("702"));

// task 4 

// function func(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         obj[str[i]] = str[i].toUpperCase();
//         }
//     return obj;
// }

// console.log(func("abc"));

// task 5

// function freeShipping (shopList) {
//     let sum = 0;
//     for (key in shopList) {
//         sum  += shopList[key];
//     }
//     let result = sum >= 50 ? 1 : 0;
//     return Boolean(result);
// }
// console.log (freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));


// task 6 
let obj = {
    user1:{
      name: "sasha",
      surname: "ivanov",
      yearsInCompany: 5,
      salary: 1000
    },
    user2:{
      name: "pasha",
      surname: "stepanov",
      yearsInCompany: 2,
      salary: 600
    },
    user3:{
      name: "vasya",
      surname: "pupkin",
      yearsInCompany: 1,
      salary: 400
    },
    user4:{
      name: "petya",
      surname: "bamper",
      yearsInCompany: 15,
      salary: 3000
    }
  }

function remove(removedKey, removedValue) {
    for (key in obj) {
        if (obj[key][removedKey] === removedValue) {
            delete obj[key];
        }
    }
    return obj;
}



// console.log (remove('name', "petya"));
console.log (remove('salary', 600));

