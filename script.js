var carSeller1 = {
    firstName: "Nukri",
    lastName: "Goodman",
    regYear: 2015,
    hasDiscount: true,
    discount: 0,
    calculate: function() {
            var discount;
            var numberOfYears = 2019 - this.regYear;
            if(numberOfYears <= 2) {
            discount = 0;
            } else if((numberOfYears > 2) && (numberOfYears <= 5)) 
            {
            discount = 20;
            }   else if (numberOfYears > 5) {
            discount = 30;
            }
            this.discount = discount;
    }
}
carSeller1.calculate();
console.log(carSeller1);

/*var cars = [
    {
        carProducer: "subaru",
        carModel: "crosstrek",
        carAge: "2016",
        color: "white",
        isSold: true,
        fuelType: "gasoline",
        mileage: 45000
    },
    {
        carProducer: "Toyota",
        carModel: "Corolla",
        carAge: "2019",
        color: "black",
        isSold: false,
        fuelType: "hybrid",
        mileage: 30000
    },
    {
        carProducer: "Ford",
        carModel: "Mustang",
        carAge: "2020",
        color: "red",
        isSold: true,
        fuelType: "gasoline",
        mileage: 20000
    }
];

for(var i = 0; i < cars.length; i++) {
    if(cars[i].isSold === true) {
        console.log(cars[i]);
    }
}

cars.forEach(function(car) {
    if(cars.isSold === true) {
        console.log(cars); 
    }
})
/*var colors = ["red", "orange", 'yellow'];
var personJack = {
    firstNam: "Jack",
    lastName: "Black",
    age: "29",
    isMarried: true,
    pets: ["cat", "dog", "snake"],
}

var numbers = [[1,2,3], [4,5,6], [7,8,9,10]];
console.log(numbers[1][2]);

console.log(personJack.pets[1]);

var sellers = [

{
    firstName: "Peter",
    lastName: "Goodman",
    regDate: "09.08.2019",
    hasDiscount: true,
    age: 48,
    cars: [{
        carProducer: "fiat",
        carModel: "punto"
    },
    {
        carProducer: "mercedes",
        carModel: "vito"
    },
    {    
        carProducer: "opel",
        carModel: "vectra"
    }]
},
{
    firstName: "John",
    lastName: "Parker",
    regDate: "79.10.2019",
    hasDiscount: false,
    age: 32,
    cars: ["mazda", "mercedes", "toyota"] 
}
]
console.log(sellers[0].cars[1].carModel);

/*var names = ["John", "Jane", "Jack", "Jim"];
console.log(names);
//names[4]

var x = names.push("Jeen");
x = names.push("Nukri");
console.log(names);
console.log(x);

var y = names.pop();
console.log(names);
console.log(y);

x = names.unshift("Liana");
console.log(names);
console.log(x);

names.shift();
console.log(names);
console.log(y);

names.push("John");
names.push("Jack");
console.log(names);

var z = names.indexOf("Jack");
console.log(z);*/

//var carToyota = ["Camry", 2010, "sedan", "black", true];
//console.log(carToyota[2]);

/*var carToyota = {
    model: "Camry",
    year: 2010,
    carBody: "sedan",
    color: "black",
    hasAirbag: true
};

var x = "hasAirbag";
console.log(carToyota[x]);
console.log(carToyota.year);
console.log(carToyota.hasAirbag);

carToyota.color = "red";
console.log(carToyota.color);
console.log(carToyota);
carToyota.year += 2
console.log(carToyota);

var carMazda = {};
var carOpel = new Object()
carOpel.model = "hatchback";

console.log(carOpel);

carMazda.year = 2018;
carMazda.model = "crossover";
carMazda.carBody = "CX7";
carMazda.color = "blue";
carMazda.hasAirbag = false;
carMazda.doorNumber = 4;



console.log(carMazda);

//var carMazda = ["CX7", 2015, "crossover", "red", false];
//console.log(carMazda[2]);




/*var isSedan = toyota.indexOf("hatchback") === -1 ?
console.log("Type is not sedan.") :
console.log("Type is sedan.");

var cars = ["Honda", "KIA", "Peugeot", "Mercedes", "Opel", "Toyota"];
var germanCars = cars.slice(3, 5);
console.log(germanCars);
console.log(cars);


/*var color1 = "red";
var color2 = "orange";
var color3 = "yellow";
var color4 = "green";
var color5 = "blue";
var color6 = "indigo";
var color7 = "violet";

var rainbowColors = ["red","orange","yellow","green","blue","indigo","violet"];
var emptyArray = [];
var emptyArray = new Array();

var numbers = [1,3,5,32];
console.log(numbers);

var anyItems = [1, "some text", null];
console.log(anyItems);

/*console.log("the sky is " + rainbowColors[4]);

rainbowColors[0] = "orange";
console.log(rainbowColors);

rainbowColors[8] = "red";
console.log(rainbowColors);

rainbowColors[rainbowColors.length] = "dark blue";
console.log(rainbowColors);

/*function someFunction() {
    var x = 1;
    var y = 10;
    console.log(x);
    console.log(y);
    y++;
    console.log(y);
}

var y = 2;

someFunction();
console.log(y);



/*function isNumberOdd(number) {
    if(number % 2 === 0) {
        return false;
    } else {  
       return true;
    }
}
var x = isNumberOdd(11);
console.log(x);
console.log(isNumberOdd(0));

isNumberOdd(0);
isNumberOdd(23);

function factorial(naturalNumber) {
    if(naturalNumber < 0) {
        return 0;
    }
    var result = 1;
    for(i = 1; i <= naturalNumber; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(-3));


function changeSpaceToUnderscore(str) {
    return str.replace(/ /g, "_");
}

console.log(changeSpaceToUnderscore("create function")); // Output: "create_function"
console.log(changeSpaceToUnderscore("my first name")); // Output: "my_first_name"
console.log(changeSpaceToUnderscore("user")); // Output: "user"



/*var animalVoice = function(animal, animalName) {
    switch(animal) {
        case "dog":
            return animalName + " barks.";
        case "cat":
            return animalName + " meows.";
        case "pig":
            return animalName + " grunts.";
        default:
            return animalName + " mixed sounds.";            
    }
}
console.log(animalVoice("cat", "pisho"));

animalVoice = 19;

console.log(animalVoice("cat", "pisho"));
function animalVoice(animal, animalName) {
    switch(animal) {
        case "dog":
            return animalName + " barks.";
        case "cat":
            return animalName + " meows.";
        case "pig":
            return animalName + " grunts.";
        default:
            return animalName + " mixed sounds.";            
    }
}

console.log(animalVoice("cat", "pisho"));



function complexHello(helloText, name, age) {
    console.log(helloText + " My name is " + name + ". I'm " + age + " years old.");
}

function square(number) {
    return number * number;
}

var x = square(2);
console.log(x);

function isSquareBig(side) {
    var squareArea = square(side);
    if(squareArea > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquareBig(11));
/*square(150);

function rectangularArea(width, height) {
    console.log(width * height);
}

rectangularArea(4,5);

complexHello("Hey!", "John", 30);
complexHello("Hi!", "Joe", 20);
complexHello("Hello!", "Jane", 10);

/*    console.log("Hello")
}
hello();
hello();
hello();



function alertHello() {
    alert("Hello!");
}
alertHello();



/*for(i = 29; i >= 0; i-=2){
    console.log(i);
}

/*for(i = 1; i <= 30; i++){
    if(i % 7 === 0){
    console.log(i);
    }
}

for(i = 2; i <= 30; i+=2){
    console.log(i);
}


var count = 1;
while(count <=10){
    console.log(count);
    count++;
}

for(count = 1; count <= 10; count++){
    console.log(count);
}*/

/*var helloString = "Hello For Loop!";
for(i = 5; i < helloString.length; i+=2) {
    console.log(helloString[i]);
}
/*var count = 30;

while(count > 0){

    console.log(count);
    count-=5;
}



/*var count = 1;

while(count <= 30){
   if(count % 5 ===0){
    console.log(count);
   }
   count++;
}


/*var count = 2;

while(count < 30){
    console.log(count);
    count+=3;
}



/*var x = 1;

while(x <= 10) {
    console.log(x);
    x++;
}
console.log("Loop has finished");
var helloString = "Hello JavaScript";
var count = 0;

while(count < helloString.length){
    console.log(helloString[count]);
    count+=3;
}

/*var section = "html5"

switch(section) {
    case "html" :
    case "html5" :    
        console.log("I'm learning 'HTML' section");
        break;
    case "css" :
        console.log("I'm learning 'CSS' section");
        break;
    case "javascript" :  
        console.log("I'm learning 'JavaScript' section");
        break;
        default :
        console.log("I'm learning something else")    
}

var age = 40;
var groupNumber;

if(age >= 18 && age <= 25){
    groupNumber = 1;
} else if(age > 25 && age <= 46){
    groupNumber = 2;
} else {
groupNumber = 3;
}
console.log(groupNumber);

switch(true) {
    case age >= 18 & age <= 25 :
        groupNumber = 2;
        break;
        default : 
        groupNumber = 3;
}
console.log(groupNumber);


/*var userName = 'Jack'
var userWeight = 91;

/*if(userWeight > 90) {
    console.log(userName + " has redundant userWeight.");
} else {
    console.log(userName + " has normal weight.");
} 

var weightDescription;

weightDescription = userWeight > 90 ? "redundant" : "normal";

console.log(userName + " has " + weightDescription + " weight.");





/*var userName = "Ivan";
var userAge = 21;
var isMarried = true;

if(userAge >= 20){
    console.log(userName + " is adult.");
} else if (userAge < 10){
    console.log(userName + " is a child");
} else {
    console.log(userName + " is a teenager");
}
if(isMarried){
    console.log(userName + " is married.");
} else {
    console.log(userName + " will be married soon");
}
console.log("wat")


//var firstName = "Nukri"
/*hgfghjv,jhlh
*var firstName = "Nukri";
console.log(firstName); 

var firstName = "Nukri";
//console.log(firstName);

//alert(firstName);

firstname = prompt("What is your name?");
console.log(firstName);*/
/*var x = null;
var y = undefined;

var isXMEqualY = x === y;
var x, y;
console.log(x, y);
x = y = 2 + 8 - 3 * 2;
console.log(x, y);
x++;
x++;
x--;
x--;
var x = 5;
x += 7;
x -= 2;
x *= 5;
x /= 10

x++;

var y = 10;

x = y--;
console.log(x, y);*/

