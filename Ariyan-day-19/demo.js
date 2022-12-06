        // for loop
        var text="";
        for(let i = 1 ; i <= 5 ; i++){
            text = text + "This is number " + i +"<br>";
        }
        document.getElementById("forloop").innerHTML = text;
        // while loop
        let x = 0;
        var text2 ="";
        while(x <10){
            text2 = text2 + "This is number "+ x + "<br>";
            x++;
        }
        document.getElementById("whileloop").innerHTML = text2;

        // do while
        let z = 0;
        var text3 = "";
        do{
            text3 = text3 + "this is number " + z + "<br>";
            z++;
            if(z== 3){
                break;
            }
        }
        while(z<10);
        document.getElementById("dowhile").innerHTML = text3;