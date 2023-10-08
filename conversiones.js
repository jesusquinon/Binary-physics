let boton=document.getElementById("boton");
boton.addEventListener("click", Mult);
function Mult(){
    let centimetros=Number(document.getElementById("centimetros").value);

    let mm= centimetros*10;
    let resultado1=document.getElementById("resultado1");
    resultado1.textContent=mm.toFixed(2);
    
    let m= centimetros/100;
    let resultado2=document.getElementById("resultado2");
    resultado2.textContent=m.toFixed(2);

    let km= centimetros/100000;
    let resultado3=document.getElementById("resultado3");
    resultado3.textContent=km.toFixed(5);

    let pg= centimetros*0.393701;
    let resultado4=document.getElementById("resultado4");
    resultado4.textContent=pg.toFixed(2);

    let ft= centimetros*0.03280841666667;
    let resultado5=document.getElementById("resultado5");
    resultado5.textContent=ft.toFixed(2);

    let yd= centimetros*0.010936138888889999563;
    let resultado6=document.getElementById("resultado6");
    resultado6.textContent=yd.toFixed(2);

    let ml= centimetros*0.0000062123;
    let resultado7=document.getElementById("resultado7");
    resultado7.textContent=ml.toFixed(5);
}
