let boton=document.getElementById("btnfuncion");
boton.addEventListener("click", btnfuncion);
function btnfuncion(){
    let num1 =Number(document.getElementById("num1").value);

    let h= ((1.62) * (num1 * num1)) / 2;
    let resultado1=document.getElementById("resultado1");
    resultado1.textContent=h.toFixed(2);
    
    let vf= (1.62 * num1);
    let resultado2=document.getElementById("resultado2");
    resultado2.textContent=vf.toFixed(2);

}
