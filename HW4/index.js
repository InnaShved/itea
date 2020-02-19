//3.
// const obj1 = {
//          name: "John",
//          salary: 500,
//          bonus: 50
//        } 

// function myFunc(obj) {
//     if (obj.salary < 600) {
//         obj.bonus *= 2;
//     }
//     return obj;
// }
// console.log(myFunc(obj1));

// 4.	Написати функцію, яка повертає кількість символів в залежності від переданого параметра.             
//   Наприклад, console.log(truncate_string("Robin Singh", 4));
//    Функція має повернути "Robi".

// function truncate_string(str, number) {
//     const str2 = str.substring(0, number); 
//     return str2;
// }
// console.log(truncate_string("Robin Singh", 4));

// !5.	Написати функцію, яка заміняє всі пробіли на переданий символ. Наприклад,                     
// console.log(string_parameterize("Robin Singh from USA."));
//    Функція має повернути "robin-singh-from-usa”.

// function string_parameterize(str) {
//     const lgth = str.length;
//     for (let i = 0; i < lgth; i++) {
//         if (str[i] === " ") {
//             str = str.substring(0, i) + "-" + str.substring(i++, lgth);
//         }
        
//     }
//     return str;
// }

// console.log(string_parameterize("Robin Singh from USA.")); 
//?!!!!!!! in case str.substring(i++, lgth) there are extra spaces after -; if (i, lgth) all symbols are replaced with -

// 6.Написати функцію, яка переводить слово з camelCase і розділяє його переданим параметром.               Наприклад,
//    console.log(uncamelize('helloWorld'));
//    console.log(uncamelize('helloWorld','-'));
//    console.log(uncamelize('helloWorld','_'));
//    "hello world"
//    "hello-world"
//    "hello_world"

// function uncamelize(str, smbl) {
//     const lgth = str.length;
//     for (let i = 0; i < lgth; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             if(smbl) {
//                 str = str.substring(0, i) + smbl + str.substring(i++, lgth);
//             } else {
//                 str = str.substring(0, i) + ' ' + str.substring(i++, lgth);
//             }
//         }
//     }
//     return str;
// }
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));


//7.	Напишіть функці, яка приймає о'бєкт як аргумент і повертає стрінг з даними про місто.
//	 Наприклад:
//	 cityFacts({
//	     name: "Paris",
//	     population: "2,140,526",
//	     continent: "Europe"
//	   }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//	
//	   cityFacts({
//	     name: "Tokyo",
//	     population: "13,929,286",
//	     continent: "Asia"
//	   }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asias

// function cityFacts(city) {
//     let str =   city.name +" has a population of " + city.population + " and is situated in " + city.continent;
//     return str;
// }

// console.log (cityFacts({
//     	     name: "Tokyo",
//     	     population: "13,929,286",
//     	     continent: "Asia"
//     	   }))

// console.log(cityFacts({
//     	     name: "Paris",
//     	     population: "2,140,526",
//     	     continent: "Europe"
//     	   }))


// 8.Напишіть функцію, яка приймає значення і об'єкт в якому є 2 ключі(min, max) з відповідними до них значеннями.
// Функція має повернути true, якщо значення(перший аргумент) лежить в проміжку min-max.
// Наприклад:
// isInRange(4, { min: 0, max: 5 }) ➞ true
// isInRange(4, { min: 4, max: 5 }) ➞ true
// isInRange(4, { min: 6, max: 10 }) ➞ false
// isInRange(5, { min: 5, max: 5 }) ➞ true

// function isInRange(num, obj) {
//     let result = 0;
//     if (obj.min <= num && num <= obj.max) {
//         result = 1;
//     }
    
//     return Boolean(result);
// }
// console.log(isInRange(5, { min: 5, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));

 //9. 
// Напишіть функцію, яка перевірятиме чи об'єкт має певний ключ. Наприклад:
// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

// function hasKey(obj, value) {
//     let result = 0;
//     if (value in obj) {
//         result = 1;
//     }
//     return Boolean(result);
    
// }
// console.log( hasKey({ craves: true, midnight: true, snack: true }, "morning"));
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));


// 10.
// Написати функцію, яка прийматиме об'єкт, будуватиме з нього привітання і повертатиме стрінг.
// Наприклад:

const guestList = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

// greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
// greeting("Monti") ➞ "Hi! I'm a guest.
// Якщо переданого імені немає в об'єкті, то виводимо "Hi! I'm a guest."

function greeting(name) {
    let str = "";
    if ( name in guestList){
        str = "Hi! I'm " + name + ", and I'm from " + guestList[name] + ".";
    } else {
        str = "Hi! I'm a guest.";
    }
    return str;
}
console.log (greeting("Randy"));




// --11-------
// function countAll(str) {
//     let obj = {
//         letters: 0,
//         digits: 0,
//     };

//     for (i = 0; i < str.length; i++) {
//         if ( +str[i]) {
//             obj.digits++;
//         } else  if (str[i] === " ") {
            
//         } else {
//             obj.letters++;
//         }
//     }
//     return (obj);
// }
// console.log (countAll("Hello World"));
// console.log (countAll("H3ll8 Wor1d"));