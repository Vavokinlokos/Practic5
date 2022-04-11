function calc(){
    let num = document.getElementById("in").value;
    let res = ""
    if (num[0]=="-"){
        res += "It's negative number.\n";
    }else{
        res += "It's positive number.\n";
    }

    if (isSimple(num)){
        res += "It's simple number.\n";
    }else{
        res += "It's not simple number.\n";
    }

    if (isDiv(num) == ""){
        res += "The number is not divisible by any of these numbers (2, 5, 3, 6, 9)";
    }else{
        res += "The number is devisible by " + isDiv(num)
    }

    
    document.getElementById("out").value = res;
}

function isSimple(num){
    if (num[0]=="-"){
        return false
    }
    for (let i = 2; i < parseInt(num); i++) {
	    if (num % i == 0) {
            return false
	    }
    }
    return true
}

function isDiv(num){
    let arr = [2,5,3,6,9]
    let res = []
    for (let i =0; i<arr.length; i++){
        if(num%arr[i]==0){
            res.push(arr[i])
        }
    }
    return res
}