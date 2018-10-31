function btnCalculer_onclick()
{ 
 	var NbBilletEtu, NbBillet65, NbBilletAdlt, Rabais,Cout, Total;

    NbBilletEtu=parseFloat(document.getElementById("txtEtu").value);
    NbBillet65=parseFloat(document.getElementById("txt65+").value);
    NbBilletAdlt=parseFloat(document.getElementById("txtAdlt").value);

    if(NbBilletEtu+NbBillet65+NbBilletAdlt > 5)
    {
 	     Rabais=0.10
    }
    else
    {
        Rabais=0
    }

    Cout=((NbBilletEtu*12)+(NbBillet65*15)+(NbBilletAdlt*20));
    Total = Cout-(Cout*Rabais)

 	console.log("Le coût total de vos billets est de "+Total+"$")
}