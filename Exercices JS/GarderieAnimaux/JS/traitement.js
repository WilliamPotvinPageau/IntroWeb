var Veterinaire, NbJrs, NbHrs, Service,ServMsg, Animal, Tarif, TauxHoraire, Cout, Rabais, Total;


function btnCalculer_onclick()
{
    if(valideChamps()===true)
    {
        if(valideFormat()===true)
        {
            SaisirDonees();
            CalculerRabais();
            CalculerTauxHoraire();
            CalculerService();
            CalculerTotal();
        }
    }

    document.getElementById("lblMessage").innerHTML="Vétérinaire responsable est "+Veterinaire+". Le montant pour la garde de votre "+Animal+" est de "+Total+" pour "+NbJrs+" jours, "+ServMsg+" service de toilettage.";

}

function SaisirDonees()
{
    Veterinaire=(document.getElementById("lstVeterinaire").value);
    NbJrs=parseFloat(document.getElementById("txtNbreJours").value);
    NbHrs=parseFloat(document.getElementById("txtNbreHeures").value);
}

function CalculerRabais()
{
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
}

function CalculerTauxHoraire()
{
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
}

function CalculerService()
{
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
}

function CalculerTotal()
{
    Cout=(Tarif*NbJrs)+(TauxHoraire*NbHrs)+Service;
    Cout=Cout+(Cout*0.14975);
    Total=Cout-(Cout*Rabais);
}

function radChien_onclick()
{
    document.getElementById("imgAnimal").src="img/Img1.jpg"
}

function radChat_onclick()
{
    document.getElementById("imgAnimal").src="img/Img2.jpg"
}

function valideChamps()
{
    var tabValide=document.getElementsByName("txt");
    var i, valide=false;
    for (i=0;i<2;i++)
    {
        if(valideExiste(tabValide[i])===true)
        {
            valide=true
        }
    }
    return valide;
}
function valideExiste(chaine)
{
    var valide=true;
    if (chaine.value==="")
    {
        valide=false;
        chaine.style.borderColor="red";
    }
    else
    {
        chaine.style.borderColor="";
    }
    return valide;
}
function valideFormat()
{
    var valide=false;
    if(valideTel(document.getElementById("txtTel").value)===true)
    {
        valide=true;
        document.getElementById("txtTel").style.borderColor=""
    }
    else
    {
        document.getElementById("txtTel").style.borderColor="red"
    }
    if(valideNom(document.getElementById("txtNom").value)===true)
    {
        valide=true;
        document.getElementById("txtNom").style.borderColor=""
    }
    else
    {
        document.getElementById("txtNom").style.borderColor="red"
    }
    return valide;
}
function valideTel(Tel)
{
    return /^(\(\d{3}\) \d{3}-\d{4}|\d{3}-\d{3}-\d{4})$/.test(Tel)
}
function valideNom(Nom)
{
    return /^[A-Z][a-z]+(-[A-Z][a-z]+)? [A-Z][a-z]+(-[A-Z][a-z]+)?$/.test(Nom)
}