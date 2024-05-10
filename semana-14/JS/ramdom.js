function apostar(){
let b=101;
let intentos=0;
var a=Math.round(Math.random()*100);
//ciclo while
while(a!=b){
    b=parseInt(prompt("INGRESE NUMERO AL AZAR [0 a 100]"));
    //
    if(b>a){
        alert("EL NUMERO ES MAS BAJO");
    }else{
        alert("EL NUIMERO ES MAS ALTO");
    }
    intentos++;//conmtador de intentos consumidos
}
// SALIDA al asertar numero random
document.getElementById("apostado").value=b;
document.getElementById("resultado").value=a;
document.getElementById("salida").value="Has consumido.."+intentos+"..intentos";
swal("FELICITACIONES USUARIO","HAS ASERTADO NUMERO AL AZAR EXITOSAMENTE","success");
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}