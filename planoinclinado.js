let btnfuncion = document.getElementById("btnfuncion");
btnfuncion.addEventListener('click' , proceso);

function proceso(){
    let num1= Number (document.getElementById('num1').value);
    let num2= Number (document.getElementById('num2').value);
    let num3= Number (document.getElementById('num3').value);
    let num4= Number (document.getElementById('num4').value);
    let num5= Number (document.getElementById('num5').value);

    let peso=num1*9.81;
    let resultado1 = document.getElementById("resultado1");
    resultado1.textContent= peso.toFixed(2);

    let FAX=(Math.cos(num3*3.1416/180)) * (num2);
    let resultado2 = document.getElementById("resultado2");
    resultado2.textContent= FAX.toFixed(2);

    let FAY=(Math.sin(num3*3.1416/180)) * (num2);
    let resultado3 = document.getElementById("resultado3");
    resultado3.textContent= FAY.toFixed(2);

    let FN=peso-FAY;
    let resultado4 = document.getElementById("resultado4");
    resultado4.textContent= FN.toFixed(2);

    let FC=FN*num5;
    let resultado5 = document.getElementById("resultado5");
    resultado5.textContent= FC.toFixed(2);

    let Tmin= FC*num4;
    let resultado6 = document.getElementById("resultado6");
    resultado6.textContent= Tmin.toFixed(2);

    let Tmax= (num2-FC)*num4;
    let resultado7 = document.getElementById("resultado7");
    resultado7.textContent= Tmax.toFixed(2);

}