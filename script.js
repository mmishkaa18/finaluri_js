// let totalMonth = 12;
// let passedMonth = 1;
// let monthsLeft = totalMonth - passedMonth;
// console.log(monthsLeft)

// let y = 3;
// const totalTrees = 10 - y;
// console.log(totalTrees);

// let x = 7;
// x *= 3;
// console.log(x);

// const testScore = 100;
// const testBarrier = 70;
// let testResult = 50;
// const testPass = testResult > testBarrier;
// if (testPass == true) {
//     console.log("tkven chaabaret gamocda") 
// } else {
//     console.log("tkven ver chaabaret gamocda")
// }

// let userLoggedIn = true;
// let userPaid = false;
// let userIsAdmin = true;
// let userIsFromLink = false;

// const showProducts = userLoggedIn && userPaid || userIsAdmin;
// if (showProducts == true) {
//     console.log(showProducts)
// } else {
//     console.log("samwuxarod ver gachvenebt produkts")
// };

// const showLoginScreen = !userLoggedIn;
// const showBuyButton = !(userIsAdmin || userPaid);
// const discount = userIsFromLink ? 25 : 0;

// console.log(showLoginScreen, showBuyButton); 
// console.log(discount);

// const userDistance = 20
// const shippingCost = userDistance <= 15 ? 10 : 15;
// console.log(shippingCost);
// let shippingCost;

// if(userDistance<=15) {
//     shippingCost = 10;
//     console.log(shippingCost)
// } else {
//     shippingCost = 20;
//     console.log('tkveni mitanis safasuria',shippingCost)
// }

// let x = 5
// {
//     let x = 7
//     console.log(x);
//     {
//         let x = 20
//         console.log(x);
//     }
// }
// console.log(x)

// let cxvari = 0;

// while (cxvari <= 50) {
//     console.log("cxvari",cxvari);
//     cxvari++;
// }

// console.log("tkven chagedzinat")

// let number = 0;

// while (number<100) {
//     number += 2
//     console.log(number)
// }

// let sec = 60;

// while(sec > 0) {
//     console.log(`დარჩა ${sec} წამი`);
//     sec --;
// }



// for(let sec = 60; sec > 0; sec-=2) {
//     console.log(`დარჩა ${sec} წამი`);
// }

// let tR = [10, 23, 89, 100];

// for(let i = 0; i < tR.length; i++) {
//     // console.log(tR[i])
    
//     // if(i>2) {
//     //     console.log(tR[i])
//     // }

//     // if(tR[i]>25) {
//     //     console.log(tR[i])
//     // }
// }

// let message = "kargad iyavi!"
// const angerLevel = 10

// for(i = 0; i <= angerLevel; i++) {
//     message += "!"
// }

// console.log(message);

// const array = ["mari", "landa", "mishka", "gogita"];
// let search = "mishka";
//  for(let i = 0; i < array.length; i++) {
//     if(array[i] == search) {
//         console.log(`${search} found!`);
//         break;
//     }
//  }

// const numbers = [10, 13, 15, 17, 19]

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] <= 15) {
//         continue;
//     }
//     console.log("good job!")
// }

// const testResults = [23, 45, 55, 34, 66, 83, 12]

// const goodResults = []

// for (let i = 0; i < testResults.length; i++) {
//     if (testResults[i] > 51) {
//         goodResults[goodResults.length] = testResults[i];
//     }
// }

// console.log(goodResults);

// for (let i = 0; i < 5; i++) {
//     for (let j = i + 1; j < 5; j++) {
//         console.log(i, j)
//     }
// }

// let array = [45, 34, 67, 83];
// console.log(typeof(array));

// let student = {
//     firstName: "luka",
//     lastName: "polada",
//     age: 19,
//     university: "seu"
// };

// student.car = "none";
// student.region = "georgia"

// console.log(student);

// let student = ["mishka", "khoshebaevi", 19, "seu", ["luka", "rati"]]

// console.log(student[4][1]);


// const mentor = {
//     firstName: "misha",
//     lastName: "pailodze",
//     age: 29,
//     students: [
//         {
//             firstName: "gio",
//             lastName: "smith"
//         },
//         {
//             firstName: "mari",
//             lastName: "biden"
//         }
//     ]
// };

// for(let i = 0; i < mentor.students.length; i++) {
//     console.log(mentor.students[i])
// }

// function welcome(userFirstname) {
//     return `zdarova ${userFirstname}`;
// }

// // welcome("mishka")

// console.log(welcome("mishka"))

// function calculateAge(birthYear) {
//     return 2025 - birthYear;
// }
// if(calculateAge() > 18) {
//     console.log("shen sruwlovani xar")
// } else {
//     console.log("jer patara xar")
// }


// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / heightJohn ** 2;

// if(BMIMark > BMIjohn)  {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIjohn})!`);
// } else {
//     console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMIMark})!`);
// }

// const x = Number("23.758")

// console.log(x.toFixed(1));

// let x = Math.ceil(5.2);
// console.log(x);

// let x = Math.random() * 10000;

// console.log(x);

// let x = Math.floor(Math.random() * 10000);

// let welcomeMessage = "zdarova luka";
// let goodbyeMessage = welcomeMessage.replace("zdarova", "ciao");
// console.log(goodbyeMessage);

// let message = 'lukito rogora xaar'
// let words = message.split('')
// console.log(words);

// let array = [1, 2, 3, 4, 5, 6]
//  let removedElement = array.pop();
//  console.log(array);
 
  
// let aboutUs = document.querySelectorAll(".container p");
// let aboutUs = document.getElementById("p1");
// console.log(aboutUs.getAttribute("id"));
// aboutUs.setAttribute("p1", "newp1");






        // amocanaa 1
        // დავწეროთ ფუნქცია, რომელიც პარამეტრად გადაცემულ ტექსტს გამოიტანს ასევე
        // პარამეტრად გადაცემული ზომის შრიფტით.



    // function displayText(text, fontSize) {
//     const div = document.createElement("div")
//     div.textContent = text;
//     div.style.fontSize = fontSize;
//     document.body.appendChild(div);
// }

// displayText("mishkaaa", "50px")


// function randomRicxvi(m, n) {

// }
    




          //  amocana 2

        //    დავწეროთ ფუნქცია, რომელიც გამოიტანს m-დან n-მდე ნატურალურ რიცხვებს
        //    ცალ-ცალკე ხაზზე, m, n პარამეტრებია. გაითვალისწინეთ, რომ m შეიძლება მეტი
        //    იყოს n-ზე.



// function printNumbers (m, n) {
//     if (m > n) {
//         [m, n] = [n, m];
//     }

//     for(let i = m; i <= n; i++) {
//         console.log(i);
        
//     }
// }

// printNumbers(1, 10);



            //   amocana 3
// const car = {
//     brand: "mercedes",
//     model: "cls",
//     year: 2013
// }
// console.log(car.brand,car.year);


        //    amocana 4
        // დავწეროთ ფუნქცია, რომელიც დაბეჭდავს შემთხვევით რიცხვს პარამეტრებად
        // გადაცემული [a, b] შუალედიდან.



// function printRandomNumbers (a, b) {
//     const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
//     console.log(randomNumber);
// }

// printRandomNumbers (10, 20)


            //  amocana 5
 
 
// const student = {
//     name: "mishka",
//     age: 19,
//     subjects: ["math", "english"]
//  }

// student.subjects.push("programing");
// console.log(student.name, student.age, student.subjects);


// function displayText(text, fontSize) {
//         const div = document.createElement("div");
//         div.textContent = text;
//         div.style.fontSize = fontSize;
//         document.body.appendChild(div);
// }

// displayText("seu", "40px")

// function printNumber(m, n) {
//         if(m > n) {
//                 [m, n] = [n, m];
//         }

//         for(i = m; i<=n; i++) {
//                 console.log(i);
//         }
// }

// printNumber(1, 15)

// function printRandomNumber(a, b) {
//         if(a > b) {
//                 [a, b] = [b, a]
//         }

//         const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;

//         console.log(randomNumber);
        
// }

// printRandomNumber(1, 10);

// let student = {
//         name: "mishka",
//         age: 19,
//         subjects: ["math", "english"]
// }

// student.subjects.push("programming");

// console.log(student.name, student.age, student.subjects);


// let calculator = {
//         num1: 10,
//         num2: 5,

//         add: function() {
//                 return this.num1 + this.num2;
//         },

//         subtract: function() {
//                 return this.num1 - this.num2;
//         },
// }

// console.log(calculator.add(), calculator.subtract());


// const btn = document.querySelector(".btn");
// const teqsti = document.querySelector(".teqsti");

// let clicked = 0;

// btn.addEventListener("click", function() {
//         clicked++;
//         teqsti.textContent = `შენ დააჭირე ${clicked} ჯერ`;

//         if(clicked === 10) {
//                 btn.disabled = true;
//         }
// })


// function displayText(text, fontSize) {
//         const div = document.createElement("div");
//         div.textContent = text;
//         div.style.fontSize = fontSize;
//         document.body.appendChild(div);
// }

// displayText("seu", "50px");

// function printNumber(m, n) {
//         if (m > n) {
//                 [m, n] = [n, m];
//         }

//         for(i = m; i <=n; i++) {
//                 console.log(i);
//         }
// }

// printNumber(10, 1)

// function printRandomNumber(a, b) {
//         if (a > b) {
//                 [a, b] = [b, a]
//         }

//         const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
//         console.log(randomNumber);
        
// }

// printRandomNumber(1, 10)

// let calculator = {
//         num1: 10,
//         num2: 5,

//         add: function() {
//                 return this.num1 + this.num2;
//         },

//         subtract: function () {
//                 return this.num1 - this.num2
//         }
// }

// console.log(calculator.add(), calculator.subtract());


// const btn = document.querySelector(".btn");
// const teqsti = document.querySelector(".teqsti");

// let clicked = 0;

// btn.addEventListener("click", function() {
//         clicked++;
//         teqsti.textContent = `შენ დააჭირე ${clicked} ჯერ`

//         if(clicked === 10) {
//                 btn.disabled = true;
//         }
// })












        





