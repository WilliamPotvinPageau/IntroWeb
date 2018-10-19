function btnCalculer_onclick()
{
    var Destination, Distance, Consommation, PrixLitre, Cout;

    Destination=(document.getElementById("txtDestination").value);
    Distance=parseFloat(document.getElementById("txtDistance").value);
    Consommation=parseFloat(document.getElementById("txtConsommation").value);
    PrixLitre=parseFloat(document.getElementById("txtPrixLitre").value);
    Cout=((Distance/100)*Consommation)*PrixLitre;

    console.log("Votre voyage vers "+Destination+" vous coutera "+Cout+"$");

}