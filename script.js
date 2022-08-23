//string all methods and questions

//1-slice(start,end)
//1-slice(start,end)-extracts a part of string return extracted in a new str

/* let str = "princepatel";
finding the length of the string
console.log(str.length);
let str1 = "princepatelbestinworld";
let newstr = str1.slice(-5, -1); //whenever we enter -1 it starts from end.
console.log(str1);
console.log(newstr); */

//now extracting the string parts there are three methods to perform this task
//2-substring(start,end)-start and end value less than 0 are treated as 0.

/* let str2 = "helloworld";
console.log(str2.length);
console.log(str2.substring(8, 10));
 */
//3-substr(start,lenght) similar to slice but the second parameter specifies the length of the extracted part.
/* 
let str3 = "helloworld";
console.log(str3.substr(1, 5));
 */
//4-string to array
//if we don't specify the split ticks it makes index 0 as array.

/* let str4 = "hello";
let arr1 = str4.split();
console.log(arr1);
console.log(str4); */

//5-charAt() and charCodeAt() charAt gives the character at that position
//while charCodeAt returns the unicode of the character at that position;
/* let str5 = "world";
console.log(str5.charAt(2));
console.log(str5.charCodeAt(2));
 */

//done with strings method

//arrays
//array methods and operations on array

//string are immutable like str[1]="p" won't work
/* let str = "hello";
let str1 = str;
str1 = "helloworld";
console.log(str1);
console.log(str);
 */ /* let arr = [1, 3, 4, 5, 6, 7];
let arr = [1, 2, 3, 4];
console.log(arr);
 */

/* let a = 10;
let c = a;

c = a + 1;

console.log(a);
console.log(c);
 */

/* let arr = [1, 2, 3];
let arr2 = arr;

arr2 = [5, 6, 7];
let arr3 = arr2;
arr3.push(4);
console.log(arr3);
console.log(arr2); */

//string number boolean undefined null are primitive data types
//array object function are non primitive data types

/* function addition(a, b) {
  return a + b;
}
console.log(addition(1, 2));
 */

//swapping two numbers

/* let a = 5;
let b = 6;

let c = a;
a = b;
b = c;

console.log(a, b);
 */

//swapping variable without using temporary variable

// let a=5;
// let b=6;
// a=b;
// b=a-1;
// console.log(a,b);

//js program to check if the number is prime or not
//number that is divisible by itself and 1 and prime number

//objects in javascript

//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
/* 
function checkNumber(num1, num2) {
  if (num1 === 50 || num2 === 50) {
    return true;
  } else if (num1 + num2 === 50) return true;
  else return false;
}
console.log(checkNumber(29, 5));
 */

//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

/* function checkNumber(number) {
  if (Math.abs(number - 19) > 19) return (number - 19) * 3;
  else return Math.abs(number - 19);
}
console.log(checkNumber(29));
 */

/* 
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. */

/* function sumOfTwoNumbers(num1, num2) {
  if (num1 === num2) return 3 * (num1 + num2);
  else return num1 + num2;
}
console.log(sumOfTwoNumbers(2,2)) */

//to check positive or negative numbers

/* function numberGiven(num) {
  if (num > 0) return "positive";
  else return "negative";
}

console.log(numberGiven(1));
 */

/* 
Write a JavaScript program to remove a character at the specified position of a given string and return the new string. */

/* function removeChar(string, position) {
  const arrCreated = string.split("");
  arrCreated.splice(position, 1);

  return arrCreated.join("");
}
console.log(removeChar("prince", 2));
 */

/* const arr = [];
arr.push(1);
arr.pop();
arr.unshift(1, 2, 3, 4);
arr.shift();
arr.splice(0, 0, 1);
console.log(arr); */

//loggin h1 elements

/* let h1elem = document.getElementsByTagName("h1");
console.log(h1elem);

let arr = Array.from(h1elem);
console.log(arr[1].innerText);
 */
/* 
function findName(name) {
  let listItems = document.getElementById("names");
  let listItem = listItems.getElementsByTagName("li");

  let arr = Array.from(listItem);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].innerText === name) {
      return "found";
    } else {
      return "notfound";
    }
  }
}
console.log(findName("Johny"));
 */

// let x = 5;

// function fn() {
//   x = 10;
//   y = 20;
// }

// fn();
// console.log(x);
// console.log(y);

//object destructuring

//function in js are first class object they can act as variable and also
//can function can return function don't forget to use

// let sum = function (x, y) {
//   return x + y;
// };

// let multiply = function (x, y) {
//   return x * y;
// };

// let substraction = function (x, y) {
//   return x - y;
// };

// let arr = [sum, multiply, substraction];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i](12, 12));
// }

// Given the below starter HTML

// Write a function searchPerson(elemId, name) which takes in a DOM element's id (here "names") and searches the name in the list.
// If name is present, log “Found”, else log “Not Found”
// Eg: searchPerson(“names”, “John”) // logs “Found”
// Eg: searchPerson(“names”, “Crio.Do”) // logs “Not Found”

// function searchPerson(elemId, name) {
//   let items = document.getElementById(elemId);
//   let collection = items.getElementsByTagName("li");
//   let arr = Array.from(collection);
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].innerText === name) {
//       return "found";
//     }
//   }
//   return "not found";
// }

// console.log(searchPerson("names", "Dora"));

// const pElement = document.createElement("p");
// pElement.innerText = "innerText property refers to the text inside an element";

// const divElement = document.getElementById("facts-list");
// divElement.appendChild(pElement);

// const h3Elem = document.createElement("h3");
// h3Elem.innerText = "hello this is inside h3 element";
// const whereTo = document.body.appendChild(h3Elem);

//doing more with functions

/* function addNewFact(factText) {
  const pElement = document.createElement("p");
  pElement.innerText = factText;
  const divElement = document.getElementById("facts-list");
  divElement.appendChild(pElement);
}
addNewFact("hello this is the text");
 */

/* let divselect = document.getElementById("facts-list");
divselect.innerHTML =
  "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>";
 */

// let tableDivElement = document.getElementById("table-div");

// tableDivElement.innerHTML = `

//     <table border="1" width="400px">

//         <thead>

//             <tr>

//                 <td>Id</td>

//                 <td>Name</td>

//             </tr>

//         </thead>

//         <tbody>

//             <tr>

//                 <td>1</td>

//             <td>Ramesh</td>

//             </tr>

//         </tbody>

//     </table>

// `;

/* function fnGenerator() {
  return function () {
    console.log("Ran the inner function");
  };
}

const fnReturned = fnGenerator();
console.log(fnReturned); // -> [Function]
fnReturned(); // -> Ran the inner function
 */
/* 
function calcGrade(marks) {
  if (marks > 0 && marks < 40) {
    return "fail";
  } else if (marks < 60) {
    return "c";
  } else if (marks < 80) {
    return "b";
  } else {
    return "a";
  }
}
console.log (calcGrade(55)) */

/* function getGreekString(val) {
  switch (val) {
    case 1 || "a":
      console.log("alpha");
      break;
    case 2 || "b":
      console.log("beta");
      break;
    case 3 || "c":
      console.log("gamma");
      break;
    case 4 || "d":
      console.log("delta");
      break;

    default:
      console.log("not found");
  }
}
getGreekString(2);
  */

/* let str1 = "prince";
let str2 = "patel";
console.log(str1.slice(1, 3)); */
/* console.log(str1.indexOf("p"));
console.log(str1.slice(1, 4));
console.log(str1);
 */
/* console.log(str1.concat(str2));
 */
/* console.log(str1.length);
console.log(str2.length);

console.log(str1.concat(str2).length);
 */

/* function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case val === "bob":
      answer = "Marley";
      break;
    case val === 42:
      answer = "The Answer";
      break;
    case val === 1:
      answer = "There is no #1";
      break;
    case val === 99:
      answer = "Missed me by this much!";
      break;
    case val === 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "not the one";
  }
  // Only change code above this line
  return answer;
}
console.log(chainToSwitch(99));
 */

/* let str = "prince patel";
str[1] = "b";

let arr = [1, 2, 3];
arr[1] = 5;
console.log(arr);
console.log(str);
 */

// let a = "ap";
// a = a + "cd"

// console.log(a)

/* function x() {
  let a = 12;
  function y() {
    console.log(a);
  }
  return y;
}
let z = x();
console.log(z);

z();
 */

/* let obj = {
  name: "prince",
  age: 25,
  work: "MERN developer",
  add: function (x, y) {
    return x + y;
  },
};

for (let y in obj) {
  console.log(obj[y]);
}
 */

/* let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let ke in user) {
  // keys
  console.log(ke); // name, age, isAdmin
  // values for the keys
  console.log(user[ke]); // John, 30, true
}
 */

/* const user = { name: "john", surname: "smith" };
user.name = "pete";

console.log(user);
delete user.name;
console.log(user); */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;

for (prop in salaries) {
  sum += salaries[prop];
}
console.log(sum);
 */
/* 
function multiplyNumberic(obj) {
  let product;
  for (prop in obj) {
    if (typeof obj[prop] === Number) {
      product = obj[prop] * 2;
    }
    console.log(product);
  }
}

multiplyNumberic({
  width: 200,
  height: 300,
  title: "My menu",
});
 */

/* const userDetails = {
  name: {
    first: "Yash",
    last: "Gulati",
  },
  jobTitle: "JS Instructor @ Crio.do",
  email: {
    work: "",
    personal: "yashgulati.g1@gmail.com",
  },
  status: {
    isOnline: true,
    isVerified: false,
  },
};

userDetails.name.first = "prince";
userDetails.name.last = "patel";

userDetails.jobTitle = "MERN stack developer";
userDetails.email.work = "princepatelcode7@gmail.com";
userDetails.email.personal = "princepotlya@gmail.com";
userDetails.status.isOnline = false;
userDetails.status.isVerified = true;
userDetails.status.isProMember = true;
console.log(userDetails);
 */

//TODO:merge array based on the id
/* array = [
  { id: 1, name: "name-1", address: "pune" },
  { id: 2, name: "name-2", address: "pune-2" },
  { id: 3, name: "name-3", address: "pune-3" },
];

array_v = [
  { vid: 1, vendor_name: "tcs" },
  {
    vid: 2,
    vendor_name: "abc",
  },
];
 */ //now merge array if their id is same

//TODO: dom manipulation

/* let collection = document.getElementsByClassName("heading");

collection.item(0).textContent = "Modifying table content";
collection.item(1).textContent = "Create one more list element";

let list = document.getElementsByTagName("ul");

let collectionList = list.item(0).getElementsByTagName("li");
collectionList[4].textContent = "item-5M";

document.getElementById("heading2").innerText = "Modified with javascript";
 */

//TODO:creating and appending the element in the dom practice

/* let createElem = document.createElement("p");
let createElem2 = document.createElement("p");
createElem2.textContent =
  "Hello this the second para insidefirst para yeah good";
createElem.textContent = "hello this is para created using create element";

document.getElementById("card").append(createElem, createElem2);
 */

//TODO:Use the following list as starter code
/* Write a function appendToParent(parent, childTagType, text) to add a new child to the parent with the given childTagType and the given text content for the child.
<ol id="elem">

     <li>Hello</li>

     <li>World</li>

 </ol> */
/* 
function appendToParent(parent, childTagType, text) {
  const createElem = document.createElement(childTagType);
  createElem.textContent = text;
  document.getElementById("elem").append(createElem);
}
appendToParent("li", "p", "hello added with function");
 */
/* 
function timer() {
  const settimeout1 = setTimeout(() => {
    console.log("timeout 1 expired");
  }, 1000);
  console.log("First timeout", settimeout1);

  const settimeout2 = setTimeout(() => {
    console.log("timeout2 expired");
  }, 2000);
  console.log("timeout2", settimeout2);
}
timer();
 */

/* function addNewChildElementToParent(parentId, childTagType, text) {
  const createElem = document.createElement(childTagType);
  createElem.textContent = text;

  const elemAdd = document.getElementById(parentId);
  elemAdd.append(createElem);
}
addNewChildElementToParent("numbers-list", "li", "Hello this is done with js");
 */

/* console.log("Greetings Start"); // 1

function showGreeting(name) {
  console.log("Hello " + name + "!"); // 2
}

console.log("Greeting Rohan"); // 3
setTimeout(() => showGreeting("Rohan"), 5000);

console.log("Greetings End"); // 4
 */
//1 3 4 2
/* 
function addNewChildElementToParent(parentId, childTagType, text) 
It adds a new child to the element with id,  parentId
Tag type of the child should be childTagType and content should be text
 */
/* 
function addNewChildElementToParent(parentId, childTagType, text) {
  const createElem = document.createElement(childTagType);
  createElem.textContent = text;

  const targetElem = document.getElementById(parentId);

  targetElem.append(createElem);
}

addNewChildElementToParent("content-section", "p", "hello this coming from js");
 */

function parent() {
  const message = "\n👨 I am from parent";
  function child1() {
    console.log(message, "👧 Called from child 1️⃣");
  }

  function child2() {
    const message = "Child Message";
    console.log(message, "Called from child 2️⃣\n");
  }

  child1();
  child2();
}

parent();
//i am from parent called from child 1 // child message called from child
