// TAsk 1

// const str = "border-left-color";

// function func(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i-1] === "-") {
//             str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1, str.length);
//         }
//     }
    
//     let arr = str.split("-");
//     const str1 = arr.join("");
//     return str1;
// }
// console.log(func(str));

// task  2

// const str = "www.facebook.com/userID/456";
// function func(str) {
//    let arr = str.split("/");
//    arr.shift();
//    arr.unshift("www.youtube.com");
//    const str1 = arr.join("/");
//    return str1;
// }


// console.log(func(str));

// task 3
// const arr = [
//     {
//       name: "name1",
//       age: 10
//     },
//     {
//       name: "name2",
//       age: 15
//     },
//     {
//       name: "name3",
//       age: 30
//     },
//     {
//       name: "name4",
//       age: 20
//     }
//   ]
  
// function checkAge(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i].age < 18) {
//       arr.splice (i, 1);
//       i--;
//     }
//   }
//   return arr;
// }
// console.log(checkAge(arr));

//task 4
// function func(){ // не приймає аргументів
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(func(10,20,30,40,50)); //-->повинно вернути 150

// const users = [
//   {
//     name: "John",
//     salary: 300,
//     age: 25
//   },
//   {
//     name: "Steve",
//     salary: 1100,
//     age: 25
//   },
//   {
//     name: "Steve",
//     salary: 2000,
//     age: 25
//   },
//   {
//     name: "Steve",
//     salary: 600,
//     age: 25
//   }
// ]

// в кого зарплата більше 1000,
// додати тому юзеру властивість isRich = true
// в кого менше 1000, isRich = false
// повернути модифікований массив

// function func(userList) {
//   for (let i = 0; i < userList.length; i++) {
//     userList[i].isRich = Boolean (userList[i].salary >= 1000 ? 1 : 0);
//   }
//   return userList;
// }
// console.log(func(users));



// task 5 


const users = [
  {
    name: "user1",
    age: 25
  },
  {
    name: "user2",
    age: 15
  },
  {
    name: "user3",
    age: 33
  },
  {
    name: "user4",
    age: 42
  },
  {
    name: "user5",
    age: 60
  }
]

// функція повинна кожному юзеру створити властивість
// yearOfBirthday(можна коротшу назву)
// яка буде означати рік народження юзера
// const date = String(new Date());
// console.log(date);
// потрібно теперішній рік відняти від віку 

function countYear(userList) {
  const date = String(new Date());
  const arrTime = date.split(" ");
  for (let i = 0; i < userList.length; i++) {
    userList[i].yearOfBirthday = arrTime[3] - userList[i].age;
  } 
  return userList;
}

console.log(countYear(users));
// використовувати метод new Date(), а не просто 2020
// тому що код має працювати не тільки в 2020 році)

// потрібно правильно розпарсити date і дістати рік

