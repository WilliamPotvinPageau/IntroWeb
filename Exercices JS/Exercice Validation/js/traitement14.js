function btnCalculer_onclick()
{ 
 	var Total;

 	valideChamps();
    Total=SaisirDonnees();
    document.getElementById("lblMessage").innerHTML=Total;
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

function valideChamps() {
    var tabValide = new Array(3);
    var valide = false, i = 0;

    tabValide[0] = "txtNbre1";
    tabValide[1] = "txtNbre2";
    tabValide[2] = "txtOperateur";

    for (i = 0; i < 3; i++)
    {
        if (valideExiste(tabValide[i])===true)
        {
            valide=true;
        }
    }


}
function valideExiste(Nbre)
{
    var valide=true;

    if(document.getElementById(Nbre).value==="")
    {
        valide=false;
        document.getElementById(Nbre).style.backgroundColor="red";
    }
    else
    {
        document.getElementById(Nbre).style.backgroundColor="white";
    }
    return valide;
}