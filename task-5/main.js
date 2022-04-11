function calc(){
    let num = document.getElementById("in").value;
    let i = 1;
    do {
        i *= num;
        num--;
    } while (num>0);
    document.getElementById("out").value = i;
}