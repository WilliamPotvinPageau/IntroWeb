var tabJoueurs=new Array(4);
var tabPoints=new Array(4);
var i=0;
function onclick_btnAjouter()
{
    tabJoueurs[i]=document.getElementById("txtNom").value;
    tabPoints[i]=parseFloat(document.getElementById("txtPoints").value);
    i++;
    if (i==4)
    {
        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
        document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur "+ i;
    }
    else
        document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur "+ (i+1);
}

function onclick_btnTrouverMoy()
{
    var Moyenne=0;

    for (i=0;i<4;i++)
    {
        Moyenne=Moyenne+tabPoints[i]
    }
    Moyenne=Moyenne/i;
    document.getElementById("lblReponse").innerHTML="La moyenne est de "+Moyenne+" points";
}

function onclick_btnTrouverMeilleur()
{
    var Meilleur=0;
    for (i=0;i<4;i++)
    {
        if(Meilleur<tabPoints[i])
        {
            Meilleur=tabPoints[i]
        }
    }
    document.getElementById("lblReponse").innerHTML="Le meilleur score est de "+Meilleur+" points";
}

function onclick_btnTrouverPire()
{
    var Pire=9999999;
    for (i=0;i<4;i++)
    {
        if(Pire>tabPoints[i])
        {
            Pire=tabPoints[i]
        }
    }
    document.getElementById("lblReponse").innerHTML="Le pire score est de "+Pire+" points";
}