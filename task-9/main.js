function add(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    alert("A + B = "+ (parseInt(a)+parseInt(b)));
}

function sub(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    alert("A - B = "+ (a-b));
}

function mul(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    alert("A * B = "+(a*b));
}

function div(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    if (b==0){
        alert("B can't be zero!")
    }else{
        alert("A / B = "+(a/b));
    }
}