function FirstTask(){
    let x = 6;
    let y = 15;
    let z = 4;
    x += y - x++ * z;
    console.log("\nFirst Task:");
    console.log("1) x += y - x++ * z\nx = ", x);
    z = -- x -y * 5; 
    console.log("2) z = -- x -y * 5\nz =", z);
    y /= x + 5 % z;
    console.log("3) y /= x + 5 % z\ny = ", y);
    z = x++ + y * 5;
    console.log("4) z = x++ + y * 5\nz = ", z);
    x = y - x++ * z;
    console.log("5) x = y - x++ * z\n x = ", x)
}

function SecondTask(a, b, c){
    console.log("\nSecond Task:");
    console.log("Nums: ", a, ", ", b, ", ", c, "\nAvarage is ", (a+b+c)/3);
}

function cylinderVolume(r, h){
    return Math.PI * Math.pow(r, 2) * h;
}

function cylinderSquare(r, h){
    return 2 * Math.PI * r * (r + h);
}

function forthTask(a, b){
    let sum = 0;
    let odd = [];
    for (let i = a; i < b; i++){
        sum += i
        if (i%2 == 1){
            odd.push(i)
        }
    }
    console.log("\nFourth Task:\nA = ", a, "\nB = ", b, "\nSum = ", sum, "\nAll odd numbers:", odd)
}

function sixthTask(){
     
}

function seventhTask(n){
     let array = [];
     let odds = []
     for(let i =0; i <n; i++){
        let el = Math.floor(Math.random() * 100);
        array.push(el);
        if (el%2 ==1){
            odds.push(el)
        }
     }
     sum = array.reduce((a, b) => a + b, 0)
     console.log("\nSeventh Task:\nArray is ", array, "\nMin element is ", Math.min.apply(Math, array), "\nMax element is ", Math.max.apply(Math, array),
     "\nSum of elements is ", sum, "\nAvarage is ", sum/array.length, "\nAll odd elements: ", odds)
}

function eightTask(){
    let array = new Array(5);
    let replacedArray = new Array(5);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(5);
        replacedArray[i] = new Array(5);
        for (let j =0; j < array[i].length; j++){
            let el = Math.floor(Math.random() * 201) -100;
            array[i][j] = el;
            replacedArray[i][j] = el;
            if (i==j){
                if (el < 0){
                    replacedArray[i][j] = 0;
                }else{
                    replacedArray[i][j] = 1;
                }
            }
        }
    }
    console.log("\nEight Task: \nArray:\n", array, "\nArray with replacements:\n", replacedArray);
}

FirstTask();
SecondTask(5, 2, 7);

let r = 2;
let h = 5;
console.log("\nThird Task:\nr = ", r, "\nh = ", h, "\nV = ",cylinderVolume(r, h), "\nS = ", cylinderSquare(r,h))

forthTask(2, 10);


seventhTask(10);
eightTask();
