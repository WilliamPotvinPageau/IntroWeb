function btnCalculer_onclick()
{
    var Veterinaire, NbJrs, NbHrs, Service,ServMsg, Animal, Tarif, TauxHoraire, Cout, Rabais, Total;

    Veterinaire=(document.getElementById("lstVeterinaire").value);
    NbJrs=parseFloat(document.getElementById("txtNbreJours").value);
    NbHrs=parseFloat(document.getElementById("txtNbreHeures").value);

    if((NbJrs>=1)&&(NbJrs<5))
    {
        Rabais=0;
    }
    else
    {
        if((NbJrs>=5)&&(NbJrs<10))
        {
            Rabais=0.05;
        }
        else
        {
            if((NbJrs>=10)&&(NbJrs<30))
            {
                Rabais=0.10;
            }
            else
            {
                Rabais=0.15;
            }
        }
    }

    switch(Veterinaire)
    {
        case "Audrey Bouchard": TauxHoraire=25;
        break;
        case "Stéphane Tremblay": TauxHoraire=35;
        break;
        case "Maxime Simard": TauxHoraire=40;
        break;
        case "Mélissa Caron": TauxHoraire=45;
        break;
        default:TauxHoraire="Erreur";
    }

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

    Cout=(Tarif*NbJrs)+(TauxHoraire*NbHrs)+Service;
    Cout=Cout+(Cout*0.14975);
    Total=Cout-(Cout*Rabais);
    document.getElementById("lblMessage").innerHTML="Vétérinaire responsable est "+Veterinaire+". Le montant pour la garde de votre "+Animal+" est de "+Total+" pour "+NbJrs+" jours, "+ServMsg+" service de toilettage.";

}
function radChien_onclick()
{
    document.getElementById("imgAnimal").src="img/Img1.jpg"
}

function radChat_onclick()
{
    document.getElementById("imgAnimal").src="img/Img2.jpg"
}