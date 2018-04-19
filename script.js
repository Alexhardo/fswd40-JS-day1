document.write("<h1> 	 Basic exercises  </h1>");
document.write("<h3>First Exercise</h3>");
var players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
document.write(players[2] + " is the best Player in the world <br>");
document.write("<h3>second Exercise</h3>");
document.write("yes thats right <br>");

console.log(players[2] + " is the best Player in the world <br>");
console.log("yes thats right <br>");
document.write("<hr>");
document.write("<h1> Intermediate exercises</h1>");
document.write("<h3>First Exercise</h3>");

var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari", "Bugatti"];
//var models= [[Tesla,S], [Audi,A5], [Renault,Megan], [Volvo,Xc90], [Mazda,MX5], [Fiat,500], [Ferrari,GTC4lusso]];
document.write(cars.sort());
document.write("<br>");

document.write("<h3>second Exercise</h3>");
var fruits = ["apple", "banana", "kiwi"];
document.write("before pushing the elemnt : " + fruits);
document.write("<br>");
fruits.push("<strong>orange</strong>")
document.write("after pushing new elemnt : " + fruits);
document.write("<br>");
fruits.pop("<strong>orange</strong>")
document.write("after popping <strong>orange</strong> : " + fruits);
document.write("<br>");

document.write("<h3>third Exercise</h3>");

var animals = ["monkey", "horse", "dog"];
document.write("before sorting the variable : " + animals.join(', '));
document.write("<br>");
document.write("after sorting the variable : " + animals.sort());
document.write("<br>")
animals.unshift("<strong>cat</strong>")
document.write("after unshifting the variable : " + animals);


// var fruitsTwo = ["mango/cherries/kiwi/grapes/pear/peach/orange/lemon"]
// document.write(fruitsTwo);
// document.write("<br>");
// fruitsTwo = fruitsTwo.replace(/\//g, "SHIT");
// document.write(fruitsTwo)

document.write("<hr>");
document.write("<h1>Advanced Exercises</h1>");
document.write("<h3>First Exercise</h3>");
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var x = Number(c);
var y = Number(d);
var sum = a + b + x + y + e;
document.write("All variables converted into integers and summed :" + sum);
document.write("<br>")

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var n1 = Number(f);
var n2 = Number(i);
document.write("All variables converted into integers and multiplied :" + (mul = n1 * g * h * n2));
document.write("<br>");
document.write("Both previous figures divided :" + (divide = sum / mul));
document.write("<br>");
document.write("<h3>Second Exercise</h3>");
document.write("<br>");

var myarray = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];
//Select and output the numbers 11, 25, 17, 27 and 0 to the Web Browser.
document.write("we have the following Array : <br><br>")

for (x1 = 0; x1 < myarray.length; x1++) {
    for (x2 = 0; x2 < myarray[x1].length; x2++) {
        document.write("<strong>" + myarray[x1][x2] + " " + "</strong>");
    }
    document.write("<br>");
}
document.write("<br>");
document.write("we want to print out some elements like : ");
for (x1 = 0; x1 < myarray.length; x1++) {
    for (x2 = 0; x2 < myarray[x1].length; x2++) {
        if (myarray[x1][x2] == 11 || myarray[x1][x2] == 25 || myarray[x1][x2] == 17 || myarray[x1][x2] == 27 || myarray[x1][x2] == 0) {
            document.write("<strong>" + myarray[x1][x2] + " " + "</strong>");

        }
    }

}

document.write("<h3>Third Exercise</h3>");


var str2 = "With the online map of Vienna you can easily navigate through Vienna."
document.write("we have the next Text : " + "<strong>" + str2 + "</strong>");
document.write("<br>");
var vie = str2.match(/Vienna/g);
document.write(vie);



document.write("<hr>");
document.write("<h1>Challenge </h1>");
document.write("<h3>First Exercise</h3>");
document.write("<br>");


var multi = [
    ["Vienna"],
    ["Vienna"],
    ["Vienna"],
    ["Vienna"],
    ["Vienna"]
];
var lengtharray = multi.length;
var sum1 = 0;
for (z1 = 0; z1 < multi.length; z1++) {
    for (z2 = 0; z2 < multi[z1].length; z2++) {
        document.write(" <strong>" + multi[z1][z2] + " " + "</strong>");
        document.write("<br>");
        var n = multi[z1][z2].length;
        sum1 = sum1 + n;
        lengtharray=lengtharray-1;
    }
    if (lengtharray>0){
    for (k = 0; k < sum1; k++) {
        document.write('+');
    }
}}

document.write("<br>");


var mn = 4;
for (k = 0; k < mn; k++) {
    document.write('&nbsp;')
}
document.write(".");