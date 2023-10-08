let boton=document.getElementById("boton");
boton.addEventListener("click", Mult);
function Mult(){
    let velo=Number(document.getElementById("velo").value);
    let tiempo=Number(document.getElementById("tiempo").value);


    let vy=tiempo*9.8+velo;
    let resultado1=document.getElementById("resultado1");
    resultado1.textContent=vy.toFixed(2);
    
    let vx=velo*tiempo+9.8*(tiempo)*(tiempo)/2;
    let resultado2=document.getElementById("resultado2");
    resultado2.textContent=vx.toFixed(2);

    let hm=(velo*velo)/(19.6);
    let resultado3=document.getElementById("resultado3");
    resultado3.textContent=hm.toFixed(2);

    let ta=(tiempo/9.80665) * (2);
    let resultado5=document.getElementById("resultado5");
    resultado5.textContent=ta.toFixed(2);
}
