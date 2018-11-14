var tabJoueurs=new Array(4);
var tabPoints=new Array(4);
var i=0;
function onclick_btnAjouter()
{
    tabJoueurs[i]=document.getElementById("txtNom").value;
    tabPoints[i]=parseFloat(document.getElementById("txtPoints").value);
    i++;
    if (i===4)
    {
        activerBtn();
        document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur "+ i;
    }
    else
        document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur "+ (i+1);
}

function activerBtn()
{
    document.getElementById("btnAjouter").disabled=true;
    document.getElementById("btnTrouverMoy").disabled=false;
    document.getElementById("btnTrouverMeilleur").disabled=false;
    document.getElementById("btnTrouverPire").disabled=false;
    document.getElementById("btnRechercher").disabled=false;
}

function onclick_btnTrouverMoy()
{
    var Moyenne;

    Moyenne=trouverMoy();
    document.getElementById("lblReponse").innerHTML="La moyenne est de "+Moyenne+" points";
}
function trouverMoy()
{
    var Moyenne=0;

    for (i=0;i<4;i++)
    {
        Moyenne=Moyenne+tabPoints[i]
    }
    Moyenne=Moyenne/i;
    return Moyenne;
}

function onclick_btnTrouverMeilleur()
{
    var Meilleur;

    Meilleur=trouverMeilleur();
    //document.getElementById("txtNom").value=nom;
    document.getElementById("lblReponse").innerHTML="Le meilleur score est de "+Meilleur+" points";
}
function trouverMeilleur()
{
    var Meilleur=0,nom;
    for (i=0;i<4;i++)
    {
        if(Meilleur<tabPoints[i])
        {
            Meilleur=tabPoints[i];
            //nom=tabJoueurs[i];
        }
    }
    return Meilleur;
}

function onclick_btnTrouverPire()
{
    var Pire;

    Pire=trouverPire();
    //document.getElementById("txtNom").value=nom;
    document.getElementById("lblReponse").innerHTML="Le pire score est de "+Pire+" points";
}
function trouverPire()
{
    var Pire=9999999,nom;
    for (i=0;i<4;i++)
    {
        if(Pire>tabPoints[i])
        {
            Pire=tabPoints[i];
            //nom=tabJoueurs[i];
        }
    }
    return Pire;
}

function onclick_btnRechercher()
{
    var trouve;

    trouve=rechercheJoueur();
    if(trouve===true)
        document.getElementById("lblReponse").innerHTML="le joueur(Joueuse) "+tabJoueurs[i]+" à "+tabPoints[i]+" points";
    else
        document.getElementById("lblReponse").innerHTML="le joueur(Joueuse) "+tabJoueurs[i]+" n'existe pas";
}
function rechercheJoueur()
{
    var trouve=false;
    i=0;
    while (i<4&&trouve===false)
    {
        if (tabJoueurs[i] === document.getElementById("txtNom").value)
        {
            trouve=true;
            document.getElementById("txtPoints").value=tabPoints[i];
        }
        else
        {
            i++
        }
    }
    return trouve;
}