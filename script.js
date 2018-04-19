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