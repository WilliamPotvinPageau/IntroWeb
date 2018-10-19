function btnCalculer_onclick()
{
    var Revenus, Loyer, Nourriture, Deplacement, Reste;

    Revenus=(document.getElementById("txtRevenus").value);
    Loyer=parseFloat(document.getElementById("txtLoyer").value);
    Nourriture=parseFloat(document.getElementById("txtNourriture").value);
    Deplacement=parseFloat(document.getElementById("txtDeplacement").value);
    Reste=12*(Revenus-Loyer-Nourriture-Deplacement)/52;

    console.log("Il vous reste "+Reste+"$ par semaines");

}