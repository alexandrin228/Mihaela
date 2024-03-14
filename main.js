function pret() {

    let vopsea=document.getElementById("v1").value;
   

    let vopsea1=Number(vopsea);
    
    let pret=vopsea1/2;
    document.getElementById("rezultat").innerHTML =  "pretul= " + pret.toFixed(2);

}


