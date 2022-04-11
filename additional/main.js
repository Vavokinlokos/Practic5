// #1
let a = 10;
let b = 2;
let res = "A is " + a +"\nB is "+ b + "\n";
res += "Sum is " + (parseInt(a) + parseInt(b)) + "\n";
res += "Sub is " + (a - b)+ "\n";
res += "Mul is " + (a * b)+ "\n";
res += "Div is " + (a / b)+ "\n";
res += "A % B = " + (a % b)+ "\n";
// console.log(res);

// #2
function f(){
    let a = 5;
    let b = 7;
    for(let i =0; i<a; i++){
        for(let j=0;j<b; j++){
                document.getElementById("rectangle").innerHTML += "*&nbsp&nbsp";
        }
        document.getElementById("rectangle").innerHTML += "<br>";
    }
}

// #3
let array = [1,2,3,4,5,6,7,8,9,10];
// console.log(array);
let revArray = array.reverse();
// console.log(revArray);

// #4
function Calculate(a, b, c){
    let arr = [a,b,c];
    console.log(arr.reduce((a, b) => a + b, 0)/arr.length);
}
Calculate(7,5,3);