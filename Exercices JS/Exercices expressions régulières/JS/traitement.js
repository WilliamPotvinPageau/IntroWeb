function btnValider_onclick()  //mettre la fonction dans un IF tester une fonction à la fois
{
   alert(verifierEntreUnVingt(document.getElementById("txtValidation").value));
}

function validerNAS( Chaine )  // numéro d'assurance social 418 789 123
{
    var valide=/^\d{3} \d{3} \d{3}$/.test(Chaine);
    return valide
}

function validerTel( Chaine )  // au format (418) 876-8373  un numéro ça change
{
    var valide=/^\(\d{3}\) \d{3}-\d{4}$/.test(Chaine);
    return valide
}

function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{
    var valide=/^[A-z]+(-)?[A-z]+$/.test(Chaine);
    return valide
}

function validerNo( Chaine )   // un chiffre peut etre 0 5 25 200 etc..
{
    var valide=/^\d*(0|5)$/.test(Chaine);
    return valide
}

function verifierEntreDixTrente( Chaine ) //un chiffre entre 10 et 30
{
    var valide=/^([1-2]\d|30)$/.test(Chaine);
    return valide
}

function verifierEntreUnVingt( Chaine ) //un chiffre entre 1 et 20
{
    var valide=/^(1*\d|20)$/.test(Chaine);
    return valide
}