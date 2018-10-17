function btnCalculer_onclick()
{ 
 	var ArgentCAN, TauxChangeEuro, Euro;

    ArgentCAN=parseFloat(document.getElementById("txtArgntCad").value);
    TauxChangeEuro=parseFloat(document.getElementById("txtTxChnge").value);
    Euro=ArgentCAN*TauxChangeEuro;
    console.log("Cela fait "+Euro+" Euros")
}