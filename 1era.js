let btnfuncion = document.getElementById("btnfuncion");
btnfuncion.addEventListener('click' , proceso);

function proceso(){
    let num1= Number (document.getElementById('num1').value);
    let num2= Number (document.getElementById('num2').value);
    let num3= Number (document.getElementById('num3').value);

    let peso=num1*9.81;
    let resultado1 = document.getElementById("resultado1");
    resultado1.textContent= peso.toFixed(2);

    let cosa=Math.cos(num2*3.1416/180);
    let resultado2 = document.getElementById("resultado2");
    resultado2.textContent= cosa.toFixed(2);

    let cosb=Math.cos(num3*3.1416/180);
    let resultado3 = document.getElementById("resultado3");
    resultado3.textContent= cosb.toFixed(2);

    let sina=Math.sin(num2*3.1416/180);
    let resultado4 = document.getElementById("resultado4");
    resultado4.textContent= sina.toFixed(2);

    let sinb=Math.sin(num3*3.1416/180);
    let resultado5 = document.getElementById("resultado5");
    resultado5.textContent= sinb.toFixed(2);

    let fy= cosa/cosb;
    let resultado6 = document.getElementById("resultado6");
    resultado6.textContent= fy.toFixed(2);

    let ta= peso / (sina + sinb);
    let resultado7 = document.getElementById("resultado7");
    resultado7.textContent= ta.toFixed(2);

    let tb= fy * ta;
    let resultado8 = document.getElementById("resultado8");
    resultado8.textContent= tb.toFixed(2);

}