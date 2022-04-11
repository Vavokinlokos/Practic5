function rect(){
    document.getElementById("rectangle").innerText = ""
    for(let i =0; i<7; i++){
        for(let j=0;j<16; j++){
            if(i==0 || i==6 || j == 0 || j==15){
                document.getElementById("rectangle").innerText += "*";
            }else{
                document.getElementById("rectangle").innerHTML += "&nbsp&nbsp";
            }
        }
        document.getElementById("rectangle").innerHTML += "<br>";
    }

}

function rightTriangle(){
    document.getElementById("rightTriangle").innerText = "";                
    for(let i =0; i<7; i++){
        for(let j=0;j<7; j++){
            if(i==0 || j == 6 || j==i){
                document.getElementById("rightTriangle").innerText += "*";   
                document.getElementById("rightTriangle").innerHTML += "&nbsp&nbsp";
            }else{
                document.getElementById("rightTriangle").innerHTML += "&nbsp&nbsp&nbsp&nbsp";
            }
        }
        document.getElementById("rightTriangle").innerHTML += "<br>";
    }
}

function triangle(){
    document.getElementById("triangle").innerText = "";                
    for(let i =0; i<7; i++){
        if (i<3){
            continue
        }
        for(let j=0;j<7; j++){
            if (j==i || j == 6-i || i == 6){
                document.getElementById("triangle").innerText += "*";   
                document.getElementById("triangle").innerHTML += "&nbsp&nbsp";
            }else{
                document.getElementById("triangle").innerHTML += "&nbsp&nbsp&nbsp&nbsp";
            }
        }
        document.getElementById("triangle").innerHTML += "<br>";
    }
}

function rhombus(){
    document.getElementById("rhombus").innerText = "";                
    for(let i =0; i<7; i++){
        if(i<3){
            continue
        }
        for(let j=0;j<7; j++){
            if(j==i || j == 6-i){
                document.getElementById("rhombus").innerText += "*";   
                document.getElementById("rhombus").innerHTML += "&nbsp&nbsp";
            }else{
                document.getElementById("rhombus").innerHTML += "&nbsp&nbsp&nbsp&nbsp";
            }
        }
        document.getElementById("rhombus").innerHTML += "<br>";
    }
    for(let i =0; i<7; i++){
        if(i==0 || i >3){
            continue
        }
        for(let j=0;j<7; j++){
            if (j==i || j == 6-i){
                document.getElementById("rhombus").innerText += "*";   
                document.getElementById("rhombus").innerHTML += "&nbsp&nbsp";
            }else{
                document.getElementById("rhombus").innerHTML += "&nbsp&nbsp&nbsp&nbsp";
            }
        }
        document.getElementById("rhombus").innerHTML += "<br>";
    }
}
