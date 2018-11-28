function btnCalculer_onclick()
{ 
 	var Total;

 	if (valideChampsObligatoire()===true)
    {
        if (valideChamps()===true)
        {
            Total=SaisirDonnees();
            document.getElementById("lblMessage").innerHTML=Total;
        }
        else
        {
            document.getElementById("lblMessage").innerHTML="Erreur";
        }
    }
    else
    {
        document.getElementById("lblMessage").innerHTML="Erreur";
    }
}
function SaisirDonnees()
{
    var Num1, Num2, Signe, Total;

    Num1=parseFloat(document.getElementById("txtNbre1").value);
    Num2=parseFloat(document.getElementById("txtNbre2").value);
    Signe=document.getElementById("txtOperateur").value;
    Total=CalculerTotal(Num1, Num2, Signe);
    return Total;
}
function CalculerTotal(Num1, Num2, Signe)
{
    var  Total;

    switch(Signe)
    {
        case "+":   Total=Num1+Num2;
            break;
        case "-":   Total=Num1-Num2;
            break;
        case "*":   Total=Num1*Num2;
            break;
        case "/":   Total=Num1/Num2;
            break;
        default:    Total=0;
            break;
    }
    return Total;
}

function valideChampsObligatoire()
{
    var tabValide = document.getElementsByName("txt");
    var valide = false, i = 0;

    for (i = 0; i < 3; i++)
    {
        if (valideExiste(tabValide[i])===true)
        {
            valide=true;
        }
    }
    return valide;
}
function valideExiste(Nbre)
{
    var valide=true;

    if(Nbre.value==="")
    {
        valide=false;
        Nbre.style.backgroundColor="red";
    }
    else
    {
        Nbre.style.backgroundColor="white";
    }
    return valide;
}
function valideNum(Num)
{
    return /^\d+$/.test(Num);
}
function valideSigne(Signe)
{
    return /^[-+*/]$/.test(Signe);
}
function valideChamps()
{
    var valide=true;
    if(valideNum(document.getElementById("txtNbre1").value)===false)
    {
        valide=false;
        document.getElementById("txtNbre1").style.backgroundColor="red"
    }
    else
    {
        document.getElementById("txtNbre1").style.backgroundColor="white"
    }
    if(valideNum(document.getElementById("txtNbre2").value)===false)
    {
        valide=false;
        document.getElementById("txtNbre2").style.backgroundColor="red"
    }
    else
    {
        document.getElementById("txtNbre2").style.backgroundColor="white"
    }
    if(valideSigne(document.getElementById("txtOperateur").value)===false)
    {
        valide=false;
        document.getElementById("txtOperateur").style.backgroundColor="red"
    }
    else
    {
        document.getElementById("txtOperateur").style.backgroundColor="white"
    }
    return valide;
}