var d= document.getElementById("display");

function Numclick(x){
    d.value = d.value + "" +x;
}
var op = "";
var firstvalue = "";
var Secondvalue = "";

function Sum(){
    op = "sum";
    firstvalue = d.value;
    Crl();
}
function Sub(){
    op = "sub"
    firstvalue = d.value;
    Crl();
    
}
function Mul(){
    op = "mul";
    firstvalue = d.value;
    Crl();
}
function Div(){
    op = "div";
    firstvalue = d.value;
    Crl();
}


function Equal(){
    firstvalue = parseInt(firstvalue);
    Secondvalue = parseInt(d.value);
    if(op == "sum"){d.value = firstvalue + Secondvalue;}
    if(op == "sub"){d.value = firstvalue - Secondvalue;}
    if(op == "mul"){d.value = firstvalue * Secondvalue;}
    if(op == "div"){d.value = firstvalue / Secondvalue;}
}
function Crl(){
    d.value = "";
}