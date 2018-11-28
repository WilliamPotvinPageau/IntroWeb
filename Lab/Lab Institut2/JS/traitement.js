function frmMembre_onclick()
{
    if(valideChamps()===true)
    {
        if (valideFormat()===true)
        {

        }
    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML="Tous les champs ayant une étoile sont obligatoires."
    }
 

}
function valideChamps()
{
    var TabValide=document.getElementsByName("txt");
    var i, valide=false;

    for (i=0;i<4;i++)
    {
        if (valideExiste(TabValide[i])===true)
        {
            valide=true
        }
    }
    return valide
}

function valideExiste(Txt)
{
    var valide=true;
    if (txt==="")
    {
        valide=false;
        txt.style.borderColor="red";
    }
    else
    {
        txt.style.borderColor="";
    }
    return valide;
}
function valideFormat()
{
    var valide=false;
    if(valideNom(document.getElementById("txtNom").value)===true)
    {
        valide=true;
        document.getElementById("txtNom").style.borderColor=""
    }
    else
    {
        document.getElementById("txtNom").style.borderColor="red"
    }
    if(valideNom(document.getElementById("txtPrenom").value)===true)
    {
        valide=true;
        document.getElementById("txtPrenom").style.borderColor=""
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor="red"
    }
    if(valideNom(document.getElementById("txtVille").value)===true)
    {
        valide=true;
        document.getElementById("txtVille").style.borderColor=""
    }
    else
    {
        document.getElementById("txtVille").style.borderColor="red"
    }
    if(valideCodePostal(document.getElementById("txtCodePostal").value)===true)
    {
        valide=true;
        document.getElementById("txtCodePostal").style.borderColor=""
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor="red"
    }

    if(valideTel(document.getElementById("txtTel").value)===true)
    {
        valide=true;
        document.getElementById("txtTel").style.borderColor="red"
    }
    else
    {
        document.getElementById("txtTel").style.borderColor=""
    }

    if(valideCodePerm(document.getElementById("txtCodePerm").value)===true)
    {
        valide=true;
        document.getElementById("txtCodePerm").style.borderColor=""
    }
    else
    {
        document.getElementById("txtCodePerm").style.borderColor="red"
    }
}
function valideNom(Nom)
{
    return /[]/.test(Nom);
}
function valideCodePostal(Code)
{
    return /[]/.test(Code);
}
function valideTel(Tel)
{
    return /[]/.test(Tel);
}
function valideCodePerm(Code)
{
    return /[]/.test(Code);
}