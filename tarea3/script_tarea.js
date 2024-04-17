function comparacion() {
    var num1 = prompt("Enter the first number:"); // Ask user for the first number
    var num2 = prompt("Enter the second number:"); // Ask user for the second number

    if (num1 > num2) {
        alert("Numero 1 mayor al numero 2");
    }
    else if (num1 < num2) {
        alert("numero 1 menor al numero 2");
    }
    else {
        alert("numero 1 = numero 2");
    }
}

document.getElementById("boton").addEventListener("click", function() {
    comparacion();
});


//Ejercicio uno 
function logicas() {
    var  uno =  true;
    var dos = false;
    console.log(uno && dos);
    console.log(uno || dos);
    console.log(!uno);
}

function suma(a, b , c){
    console.log(a + b + c);
} 

function multiplica(x, y ,z){
    console.log(x * y * z);
}

function isString(x,y,z){
    console.log(typeof x);
    console.log(typeof y);
    console.log(typeof z);
}

function verifyVocal(x){
    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
        console.log("Es vocal");
    }else{
        console.log("No es vocal");
    }
}

function edad(x){
    if(x >= 18){
        console.log("Es mayor de edad");
    }else{
        console.log("Es menor de edad");
    }
}

function dataType(){
    console.log(typeof 1);
    console.log(typeof "hola");
    console.log(typeof true);
    console.log(typeof null);
    console.log(typeof undefined);
}

dataType();
verifyVocal("a");
isString("hola", 2 , "como estas");
multiplica(1, 2, 3);
suma(1, 2, 3);
logicas();
edad(18);