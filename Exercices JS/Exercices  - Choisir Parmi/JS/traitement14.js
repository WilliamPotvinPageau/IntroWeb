function btnCalculer_onclick()
{ 
 	var Num1, Num2, Signe, Total;

 	Num1=parseFloat(document.getElementById("txtNbre1").value);
    Num2=parseFloat(document.getElementById("txtNbre2").value);
 	Signe=document.getElementById("txtOperateur").value;

    switch(Signe)
    {
        case "+":   Total=Num1+Num2;
                    break;
        case "-":   Total=Num1-Num2;
                    break;
        case "*":   Total=Num1*Num2;
                    break;
        case "/":   Total=Num1/Num2;
                    break;
        default:    Total="Erreur";
                    break;
    }

    document.getElementById("lblMessage").innerHTML=Total;
}