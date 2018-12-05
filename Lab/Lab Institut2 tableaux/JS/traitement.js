var tabNomComplet=new Array(5), tabAge=new Array(5);
var tabcpt=0;
function frmMembre_onsubmit()
{
    var valide=false;

    if(valideChamps()===true)
    {
        document.getElementById("lblMessageErreur").innerHTML="";
        if (valideFormat()===true)
        {
            if(confirm("Souhaitez-vous payer le prix d'inscription de "+calculTarif()+"$ afin de finaliser votre inscription?")===true)
            {
                valide=true;
            }
        }
        else
        {
            document.getElementById("lblMessageErreur").innerHTML="Les champs ne sont pas tous valide.";
        }
    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML="Tous les champs ayant une étoile sont obligatoires.";
    }
 
    return valide;
}
function calculTarif()
{
    var tarif, Categorie=document.getElementById("type").value;

    switch (Categorie)
    {
        case "adulte": tarif=90;
        break;

        case "étudiant": tarif=60;
        break;

        case "retraité": tarif=80;
        break;
    }
    return tarif;
}
function Ajouter_onclick()
{
    tabNomComplet[tabcpt]=document.getElementById("txtPrenom").value+" "+document.getElementById("txtNom").value;
    tabAge[tabcpt]=document.getElementById("txtAge").value;
    alert(tabNomComplet[tabcpt]+", âgé de "+tabAge[tabcpt]+" ans, à été ajouté");
    tabcpt++;
}
function Recherche_onclick()
{
    if (rechercherNomComplet()===5)
    {
        document.getElementById("lblMessageErreur").innerHTML="La personne recherchée n'as pas été trouvée"
    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML=tabNomComplet[rechercherNomComplet()]+" est âgé de "+tabAge[rechercherNomComplet()]+" ans";
    }
}
function rechercherNomComplet()
{
    var trouve=false, i=0, nom=document.getElementById("txtPrenom").value+" "+document.getElementById("txtNom").value;
    while (trouve===false && i<5)
    {
        if (tabNomComplet[i]===nom)
        {
            trouve=true;
        }
        else
        {
            i++
        }
    }
    return i;
}
function PlusJeune_onclick()
{
    document.getElementById("lblMessageErreur").innerHTML="Le membre le plus jeune est "+tabNomComplet[trouverPlusJeune()]+" âgé de "+tabAge[trouverPlusJeune()]+" ans";
}
function trouverPlusJeune()
{
    var i, PlusJeune=9999999, iSav;
    for(i=0;i<5;i++)
    {
        if (tabAge[i]<PlusJeune)
        {
            PlusJeune=tabAge[i];
            iSav=i;
        }
    }
    return iSav;
}
function valideChamps()
{
    var TabValide=document.getElementsByName("txt");
    var i, valide=false;

    for (i=0;i<5;i++)
    {
        if (valideExiste(TabValide[i])===true)
        {
            valide=true;
        }
    }
    return valide
}

function valideExiste(Txt)
{
    var valide=true;
    if (Txt.value==="")
    {
        valide=false;
        Txt.style.borderColor="red";
    }
    else
    {
        Txt.style.borderColor="";
    }
    return valide;
}
function valideFormat()
{
    var valide=false;

    if(valideNom(document.getElementById("txtNom").value)===true)
    {
        valide=true;
        document.getElementById("txtNom").style.borderColor="";
    }
    else
    {
        document.getElementById("txtNom").style.borderColor="red";
    }
    if(valideNom(document.getElementById("txtPrenom").value)===true)
    {
        valide=true;
        document.getElementById("txtPrenom").style.borderColor="";
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor="red";
    }
    if(valideNom(document.getElementById("txtVille").value)===true)
    {
        valide=true;
        document.getElementById("txtVille").style.borderColor="";
    }
    else
    {
        document.getElementById("txtVille").style.borderColor="red";
    }
    if(valideCodePostal(document.getElementById("txtCodePostal").value)===true)
    {
        valide=true;
        document.getElementById("txtCodePostal").style.borderColor="";
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor="red";
    }

    if(valideTel(document.getElementById("txtTel").value)===true)
    {
        valide=true;
        document.getElementById("txtTel").style.borderColor="";
    }
    else
    {
        document.getElementById("txtTel").style.borderColor="red";
    }

    if(valideCodePerm(document.getElementById("txtCodePerm").value)===true)
    {
        valide=true;
        document.getElementById("txtCodePerm").style.borderColor="";
    }
    else
    {
        document.getElementById("txtCodePerm").style.borderColor="red";
    }
    return valide;
}
function valideNom(Nom)
{
    return /^[A-Z][a-z]+(-[A-Z][a-z]+)?$/.test(Nom);
}
function valideCodePostal(Code)
{
    return /^[A-z]\d[A-z] \d[A-z]\d$/.test(Code);
}
function valideTel(Tel)
{
    return /^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4})$/.test(Tel);
}
function valideCodePerm(Code)
{
    return /^[A-z]{4}\d{8}$/.test(Code);
}
