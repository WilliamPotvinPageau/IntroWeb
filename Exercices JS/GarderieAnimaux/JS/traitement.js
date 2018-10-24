function btnCalculer_onclick()
{
    var Veterinaire, NbJrs, Service,ServMsg, Animal, Tarif, Cout, Total;

    Veterinaire=(document.getElementById("lstVeterinaire").value);
    NbJrs=parseFloat(document.getElementById("txtNbreJours").value);

    if((document.getElementById("chkServ").checked))
    {
        Service=5;
        ServMsg="avec";
    }
    else
    {
        Service=0;
        ServMsg="sans";
    }

    if((document.getElementById("radChien").checked))
    {
        Tarif=18.50;
        Animal="chien";
    }
    else
    {
        Tarif=16.95;
        Animal="chat";

    }

    Cout=(Tarif*NbJrs)+Service;
    Total=Cout+(Cout*0.14975);
    console.log("Vétérinaire responsable est "+Veterinaire+". Le montant pour la garde de votre "+Animal+" est de "+Total+" pour "+NbJrs+" jours, "+ServMsg+" service de toilettage.")

}