/* var function scope */

function abd() {
    for (var i = 0; i < 12; i++) {
        console.log(i);
    }
    console.log(i); //using var outside the loop but under parent function.
}

abd(); //calling out function


/*let braces scope */


function uchiha() {
    for (let i = 1; i < 5; i++) {
        console.log(i); //this will  run
    }
   // console.log(i); //using let outside the loop but it will not run coz it's outside the braces
}

uchiha();

/* var in window object */
var a  = 23; //can see in window browser
var name  = "M HASSAN MALIK"; //can see
let game = "Super Mario"; //can't  see
const god = "ALLAH";  


/* execution context and lexical  environment  */

function gintama() {
    var charac = "gintoki"; //variable
    function kagura() {   //function
        var character = shinpachi;  //can't use this var in parent func that is lexical enviro
    }
}

/* spread operator */

var l = [1,2,3,4,5,];
var k = [...l]; // it will create  a copy of reference value which is l.
k.pop();
document.write(k);

//same for object

var pathan = { name: "Shahid Afridi"};
var copyPathan = {...pathan};
console.log(copyPathan);

/* truthy and falsy value */

if (7) {       // 7 is truthy
    console.log("hello");
} else {
 console.log("sharingan")
}

if (0) {       // 7 is truthy
    console.log("hello");
} else {
 console.log("sharingan")
}


/* for each for in for of do-while */

var num0 = [1,2,3,4,5,6,7,8,9,9];

num0.forEach((val) => {
    console.log(val+2);
})


var obj = {
    name : "hassan",
    age : 23,
    city: 'karachi'
}

for(var key in obj) {
   // console.log(key);
   // console.log(obj);
    console.log(key, obj[key]);
}

/* callback function */

setTimeout(() => {
    console.log("2000 milisecond equals to 2 second"); //this is a callback function
},2000);


/* first class function */
function foo(firstClass) {
  firstClass();  
}
foo( () => {
  console.log("hello")
})