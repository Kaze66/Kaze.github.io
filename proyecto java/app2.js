const inputemail=document.getElementById("email")
const inputclave=document.getElementById("clave");
const miElemento=document.getElementById("miElemento");
const myForm=document.querySelector("form");
myForm.addEventListener("click", function(event){
    event.preventDefault();
});
function validaform(){
    const expresion= new RegExp('^(.+)@(\\S+)$');
    if(expresion.test(inputemail.value)){ 
    }else{
        alert("El correo tiene formato incorrecto")
        return;
    }
    if(inputclave.value === ""){
        alert("Debe ingresar una clave");
    }else{
    if(inputclave.value == "miclave"){
        alert("Ha ingresado correctamente");
        miElemento.innerHTML= "Bienvenido" + inputemail.value;
    }else{
        alert("La clave esta equivocada");
        }
    }

}
