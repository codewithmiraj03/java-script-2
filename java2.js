


//                         // chapter4
//                 // Declare 3 variables in one statement.

var firstName = "First name: Miraj\n", lastName = "Last name: Ahmed\n", age = "My age is: 20";

console.log(firstName+lastName+age)
alert(firstName+lastName+age)



                // legal variables

var name;

var name_;

var name1;

var $name;

var firstName;


                // illegal variables

var 1name; // cannot start with a number

var name variables; // space not allow

var function; // reserved keyword not allow

var var; // reserved keyword not allow

var @name; // special characters not allow
// ..................................................................................................

                // chapter5

var a = 13;
var b = 16;

console.log(a + b)

var c = 20;
var d = 7;

console.log(c - d)

var e = 2;
var f= 10;

console.log(e * f)

var g = 10;
var h = 5;

console.log(g / h)

var i = 10;
var j = 3;

console.log(i % j)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets.

var price = 600;

var ticket = 5;

var totalCost = price * ticket;

console.log("The cost of one movie ticket is: " + price +" PKR")

console.log("The total cost of buying " + ticket + " tickets is: " + totalCost + " PKR")

// ..................................................................................................

                        // chapter12-13

var present = true;

var notPresent = false;

if (present) {
        console.log("allow")
}
else{
        console.log("not allow")
}


var name1 = "miraj"
var name2 = "Miraj"

if(name1.toLocaleLowerCase === name2.toLocaleLowerCase) {
        console.log("this is equal")
}
else{
        console.log("this is not equal")
}

var m = "20"
var z = 20

if(Number(m) === (z)) {
        console.log("this is same")
}
else{
        console.log("this is not same")
}




