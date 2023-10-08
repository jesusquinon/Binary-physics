let boton=document.getElementById("boton");
boton.addEventListener("click", Mult);
function Mult(){
    let gra=Number(document.getElementById("gra").value);
    let vel=Number(document.getElementById("vel").value);


    let vy=vel*Math.sin(gra*Math.PI/180);
    let resultado2=document.getElementById("resultado2");
    resultado2.textContent=vy.toFixed(2);
    
    let vx=vel*Math.cos(gra*Math.PI/180);
    let resultado1=document.getElementById("resultado1");
    resultado1.textContent=vx.toFixed(2);

    let hm=(vel*vel) / (19.62);
    let resultado3=document.getElementById("resultado3");
    resultado3.textContent=hm.toFixed(2);

    let ts= vel / 9.81;
    let resultado6=document.getElementById("resultado6");
    resultado6.textContent=ts.toFixed(2);

    let ta= 2 * ts;
    let resultado5=document.getElementById("resultado5");
    resultado5.textContent=ta.toFixed(2);
    
    let dr= (vx) * (ta);
    let resultado4=document.getElementById("resultado4");
    resultado4.textContent=dr.toFixed(2);
    
}
