// console.log("Hello Goodbye!");

/*
	JavaScript
		-is a high-level programming language that is widely used for web development
		-it is a scripting language that can embedded directly to HTML documents allowing developer to create interactive and dynamic web page
			-scripting language
				-is a type of programming language that is used to automate and control software application
				-unlike C++ or Java, require the source code to be compiled into an executable file
				-scripting language (JavaScript) is interpreted by another program such as web browser or operating system
				ex. JavaScript, Python, Ruby, Bash, PowerShell
	-Brendan Eich in 1998. It was originally called Mocha, then LiveScript and finally, JavaScript.
		-involvement in creation of Mozilla web browser and development of the Rust programming language. He is the CEO of Brave Software.
*/

// Writing Comments in JavaScript
// There are two ways of writing comments in JS:
		// -single line comments
			// ctrl + /

/*
	multi-line comments
		ctrl + shift + /

	- comments in JS, much like CSS and HTML, is not read by any browser. So, these comments are of use to add notes and to add marker to your code
*/

/*
	consoles are part of our browser which will allow us to see/log messages, data or information from our programming language which is JavaScript
	
	statements
		- are instructions, expressions we add to our programming language which will then be communicated to our computers
		- in JavaScript, it commonly ends in semi-colon (;)

	syntax
		-in programming, is a set of rules that describe how statements are properly made/constructed

	line/blocks of code must follow a certain set of rules for it to work. Because remember, you are not merely communicating with another human, in fact you are communicating with a computer


	Variables
		-In HTML, elements are container of other elements and text
		-In JavaScript, variables are container of data. A name to describe a piece of data
	Variable also allow us to use or refer to data in a multiple time
		let/const keyword in creating or declaring a variable
*/

//declaring variables
//Declaring variable - tell our devices that a variable is create and is ready to store data

/*
	syntax in declaring variable:
		let/const variableName
	declaring variable without giving it a value will automatically assign it with the value of 'undefined', meaning the variable's value was 'not define'
*/
let num;
// console.log() is useful for printing values of variables or certain results of code into the Google Chrome Browser's console or in our server
// console.log(num);

let hello;
// console.log(hello);

let productName= 'Mac notebook';
// console.log(productName);

let productPrice= 20000;
// console.log(productPrice);

// variable must be declared first before they are used - using variable before they declare will return an error
/*num2=5
let num2;
console.log(num2);*/

//In the context of certain application, some variables/information are constant and should not be change

const pi = 3.1416;
// console.log(pi);

let name = "Yujin";
// console.log(name);
name = "Wonyoung";
// console.log(name);

let supplier;
// initialization is done after the variable has been declared
// This is considered as initialization because it is the first time that a value has been assigned to a variable name
supplier = "Fernandez Trading";
// console.log(supplier);
// This is considered as reassignment because its initial value was already declared
supplier = "Fullybooked";
// console.log(supplier);

/*
	let/const are blocked scope
		-block is a chunk of code bounded by {}. A block lives in curly braces or anything within curly braces is a block.
*/

// [Section] Data Types

/*
	In most programming languages, data is differentiated by their types. For most programming languages, you have to declare not only variable name but also the type of data you are saving into a variable, however, JS it does not require

	To create with particular data types, some data type require adding with literal

	string literal: '' or ""
	template literal: ``
	object literal: {}
	array literal: []

*/

// strings are a series of character that create a word, phrase, sentence or anything related to creating text
// strings in JavaScript can be written using either a single ('') or double ("") quotes

let country = 'Philippines';
let province = "Metro Manila";

// console.log(province, country);
// Concatenating strings

let fullAddress = province + ", " + country
// console.log(fullAddress);

let greeting = 'Mabuhay! I live in the '+ country + '!';
// console.log(greeting);

// the escape (\) in string in combination with other character can produce different effects
// '\n' refers to creating a new line in between text
let mailAddress = '123 Sapphire Bldg. Sacred Heart \nQuezon City, Metro Manila \nPhilippines'
// console.log(mailAddress);

let message = "Yujin's employees went home early.";
// console.log(message);
message = 'Wonyoung\'s employees went home later.';
// console.log(message);


/*
	Mini-Activity
*/

let word1 = "is";
let word2 = "student";
let word3 = "of";
let word4 = "School";
let word5 = "De La Salle University";
let word6 = "a";
let word7 = "- Dasmarinas";
let word8 = "University";
let space = " ";
let studentName = "Francis Ian Salazar"

console.log(studentName + space + word1 + space + word6 + space + word2 + space + word3 + space + word5 + space + word7 + space + word4);

/*
	Number(Data type)
	Integers (whole numbers) or float (decimals). These are our number data which can be used for mathematical operation
*/
let numString1 = '5';
let numString2 = '7';
let num1 = 5
let num2 = 7

console.log(numString1 + numString2); //(concatenated strings)
console.log(num1 + num2); //(added integers)

let num3 = 5.5
let num4 = .5
console.log(num1 + num3);
console.log(num3 + num4);

// when the + or addition operator is used on number, it will do proper mathematical operation. However when it used in string, it will concatenate

console.log(numString1 + num1); // 55 - resulted in concatenation
console.log(num3 + numString2);//5.57 resulted in concatenation

console.log(num4 + parseInt(numString2));// resulted in mathematical operation

// parseInt() - this can change the type of a numeric string to a proper number
// numString2 was properly converted into a number
// mathematical( -, /, %, *)

console.log(name - numString1); //NaN - this is the result if the operand is not a number. When we are trying to perform a mathematical operation between the alphanumeric string and numeric strying, the NaN (Not a Number)

//Division/Multiplication by 0

console.log(5*0)
console.log(5/0)// infinity - division by 0 is not accurately and should not be done, because it results to infinity
console.log(-5/0)// infinity
console.log(Infinity + (-Infinity));

// Boolean(true or false)
// Boolean is usually used for logic operation for if-else conditions
// When creating a variable which will contain a boolean, the variable name is usually a yes or no

let isAdmin = true;
let isMarried = false;
let isMVP = true

console.log('Is she married? ' +isMarried);
console.log(`is ${name} the MVP? ${isMVP}`);
console.log('Is Yujin the current admin?' + ' ' + isAdmin);

// Arrays are special kind of data type used to store multiple values
// Arrays can actually store data with different types BUT as the best practice, arrays are used to contain multiple values of the SAME type
// values in an array are separated by commas
// an array is created with an array literal = []

let izoneMembers = ['Wonyoung', 'Sakura', 'Yuri', 'Yena', 'Yujin', 'Hitomi', 'Nako', 'Eunbi', 'Hyewon', 'Chaeyeon', 'Chaewon', 'Minju'];
console.log(izoneMembers);

let heroes = ["One Punch Man", true, 500, 'Saitama'];
//console.log(heroes);

// arrays are better thought of as groups of data
//objects are another special kind of data type used to mimic real world objects
// used to create complex data that contain pieces of information that are relevant to each other
// objects are created with object literals {}
// each data/value are paired with a key
// each field is called a property
// each field is separated by comma

let hero1 ={
	heroname: 'One Punch Man',
	isActive: true,
	power: 500,
	realName: 'Saitama',
	height: 200
};

//console.log(hero1);


// Mini-Activity 2

let ive = ['Yujin', 'Gaeul', 'Rei', 'Wonyoung', 'Liz', 'Leeseo']

let member1 ={
	firstName: 'Yujin',
	lastName: 'An',
	isDeveloper: true,
	hasPortfolio: true,
	age: 19
};

console.log(ive);
console.log(member1);

// undefined vs null
/*
	null is explicit absence of data/value. This is done to project that a variable contains nothing over undefined. As undefined merely means there is no data in the variable because the variable has not been assigned an initial value
*/

let sampleNull = null;
