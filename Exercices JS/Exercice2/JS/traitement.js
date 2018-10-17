function btnCalculer_onclick()
{
    var MoyKmMois, TotKM;

    MoyKmMois=parseFloat(document.getElementById("txtMoyKm").value);
    TotKM=MoyKmMois*12*5;
    console.log("Le cycliste fera "+TotKM+"Km dans les 5 prochaines années");


}