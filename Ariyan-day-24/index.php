<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>



Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>


    <?php
    
    // function fullName($fname,$lname){
    //     echo $fname ." ". $lname . "<br>";
    // }
    // fullName("Ashadul","Islam");
    // // associative array
    // $persons = array("Jone" => 600,"Doe" => 1000, "piter" => 5000);
    // echo $persons["piter"] ."<br>";

    // // count

    // $cars = array("Toyota","BMW","VOLVO");
    // for($x = 0; $x < count($cars); $x++){
    //     echo $cars[$x] . "<br>";
    
    // }
    // // super global
    // var_dump($_SERVER);
    // echo "<br>";
    // echo $_SERVER["HTTP_HOST"];
   
    ?>
    
</body>
</html>