
// Mild Challenges 
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;




// 1. If divided evenly, how much would each sibling get for the week?

const share = weeklyAllowance/3
console.log(share)

// 2. How many games can Jordan buy with their cut?
console.log(Math.floor(share/game)); 

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game = game + 1
shoes = shoes/2


// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let qrbudget = share*8


console.log(Math.floor(qrbudget/shoes)); 
// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
 


// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."

 console.log("Jordan, Quinn and Ricardo Montoya De La Rosa Ramirez");

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(sibling3.trim().length);


// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
const str1 = "RICARDO MONTOYA DE";
const str2 = "LA ROSA RAMIREZ";

console.log(str1.concat(" ", str2));




// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
const str3 = "ricardo montoya de";
const str4 = "la rosa ramirez";

console.log(str3.concat(" ", str4));
// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
const str5 = "ricrdo montoya de";
const str6 = "l ros rmirez";

console.log(str5.concat(" ", str6));
// 11. Use console.log() and a built-in method to print out "De La Rosa"
const str7 = "De La";
const str8 = "Rosa";


console.log(str7.concat(" ", str8));
// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => {
    return Math.floor(Math.random() * 100);
}

console.log(getRandomNum());

const greeting = (name) => {
    return `Hello ${name}, I'm glad you can make it!`;
}

console.log(greeting("Nemesis"));

const perfectRoot = (x)  => {
    let root = Math.sqrt(x);
    if (Math.floor(root) === root) {
        return root;
    } else {
        return "No perfect root"
    }
}

console.log(perfectRoot("9"))
// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
}
// uncomment the line below, to call the function, and add one more function call
// console.log( addNums(4, 6) );


/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
     if (name == "Beyonce" ) { 
     return "Welcome Queen!";
     } else {
         return `Sorry ${name}, you're not Beyonce`;
    }
}
var beyoname = prompt("What's your name you goddamn bum")

console.log(isBeyonce(beyoname))


/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11

const reduceEvens = (x) => {
        if(x % 2 ==0){
          return x/2
        } else {
        return x;
     }
}
//Write your own function calls
console.log(reduceEvens(4))

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (w) => {
   if(w.length <= 10){
    return w
}  else{
    return w.substring(0,0)
  }
}

console.log()




// Spicy Challenges
let burger = 5.00;
let fries = 3.00;
let soda = 1.00;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
// Prompt the user for their budget and call the function.
/// If no burgers, fries, and sodas can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    budget = parseFloat  (prompt("How much money you got bum"))

    let foodprice = Math.floor(budget / burger)

    if(foodprice < 1){
        return "Sorry, no burgers for you"
    }
    return foodprice
}

console.log (buyBurgers( ))


// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
// Prompt the user for their budget and call the function.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {
    let meal = burger + fries + soda
    
    budget = parseFloat  (prompt("How much money you got bum"))


    let mealAmount = Math.floor(budget / meal)
    let cost = meal * mealAmount
    let remainingMoney = budget - cost

    return 'You can buy ${mealAmount} meals with $${remainingMoney} left'
}

console.log(buyMeals())


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
// Prompt the user for the two sides and call the function
/// The larger side should be the hypotenuse  
const missingLeg = (side1, side2) =>{
side1 = parseInt(prompt("What is the length of this side?"))
side2 = parseInt(prompt("What is the length of this side?"))

let sqrOfside1 = side1 ** 2
let sqrOfside2 = side2 ** 2

let hypotenuse = sqrOfside1 + sqrOfside2
return hypotenuse

}

console.log(missingLeg())

// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
// Prompt the user for a number and call the function

const factorial = x  =>{
    for (let i = 0; x < i ; i++) {
       x * x--;
       x--
      }
}
