function btnCalculer_onclick()
{
    var PoidsLivre, Kg;

    PoidsLivre=parseFloat(document.getElementById("txtPdsLbs").value);
    Kg=PoidsLivre/2.2;
    console.log("Votre poids en kilogrammes est de "+Kg);
}