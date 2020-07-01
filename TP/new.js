var a = 10;
var b = 12;
var i, j;
let para = document.getElementById("ppp");
if (a > b) {
    console.log("a is greatest " + a);
}
else {
    console.log("b is greatest " + b);
}
//loops
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= i; j++) {
        para.innerHTML += "* ";
    }
    para.innerHTML += "<br>";
}
//# sourceMappingURL=new.js.map