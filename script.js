document.write("<h1> Basic exercises</h1>");
var players = ["Martin" , "Thomas", "Peter", "Mathias", "Niki"];
document.write (players [2] + " is the best Player in the world <br>");
document.write ("yes thats right <br>");

console.log(players [2] + " is the best Player in the world <br>");
console.log("yes thats right <br>");
document.write("<hr>");
document.write("<h1> Intermediate exercises</h1>");


var cars= ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat" , "Ferrari","Bugatti"];
//var models= [[Tesla,S], [Audi,A5], [Renault,Megan], [Volvo,Xc90], [Mazda,MX5], [Fiat,500], [Ferrari,GTC4lusso]];
document.write(cars.sort());
document.write("<br>");
document.write("<hr>");

var fruits = ["apple", "banana", "kiwi"];
document.write("before pushing the elemnt : "+fruits);
document.write("<br>");
fruits.push("<strong>orange</strong>")
document.write("after pushing new elemnt : "+ fruits);
document.write("<br>");
fruits.pop("<strong>orange</strong>")
document.write("after popping <strong>orange</strong> : "+ fruits);
document.write("<br>");
document.write("<hr>");

var animals = ["monkey" , "horse" , "dog"];
document.write("before sorting the variable : "+ animals.join(', '));
document.write("<br>");
document.write("after sorting the variable : "+ animals.sort());
document.write("<br>")
animals.unshift("<strong>cat</strong>")
document.write("after unshifting the variable : "+animals);
document.write("<hr>")

// var fruitsTwo = ["mango/cherries/kiwi/grapes/pear/peach/orange/lemon"]
// document.write(fruitsTwo);
// document.write("<br>");
// fruitsTwo = fruitsTwo.replace(/\//g, "SHIT");
// document.write(fruitsTwo)
document.write("<hr>");
document.write("<h1>Advanced Exercises</h1>");
document.write("<hr>");
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var x = Number(c);
var y = Number(d);
var sum = a+b+x+y+e;
document.write("All variables converted into integers and summed :" + sum);
document.write("<br>")

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var n1 = Number(f);
var n2 = Number(i);
document.write("All variables converted into integers and multiplied :" + (mul = n1*g*h*n2));
document.write("<br>");
document.write("Both previous figures divided :" + (divide = sum/mul)); 
document.write("<br>");
















