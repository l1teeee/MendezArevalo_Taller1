var Band1 = false;
var Band2 = false;
var Band3 = false;
var Band4 = false;


//VALORES
var tasaGlo = 0.0;
var tasaIni = 0.15;
var tasaMid = 0.03;
var tasaMuj = 0.05;

var m;

do{
    do{
        m = prompt("1)Mujer  2)Hombre");
        switch(m){
            case '1':
                Band3 = true;
                Band1 = true;
                break;
            case '2':
                Band3 = true;
                Band1 = true;
                break;
            default:
                alert("ERROR... dato no valido");
                Band3 = false;
                break;
    }while(Band3 == false);
    
    
    var nom = prompt ("Digite su nombre");
    var edad = prompt("Digite su edad");
    Band1 == true;
    if(isNaN(edad) || (edad > 100) || (edad < 12)){
        alert("Digite un dato valido.");
        
    }else{ 
        if(( edad > 24) && (edad < 35)){
            alert("Su tasa se le reducirá a 3%")
        }
    }Band1 == false;
    
    } while (Band1 == true);


}while(Band1 == true)














