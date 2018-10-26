function btnCalculer_onclick()
{
    var prix, age, rabais, total;

    prix=parseFloat(document.getElementById("txtBasePrix").value);
    age=parseFloat(document.getElementById("txtAge").value);

    if(age<=16)
    {
        if(document.getElementById("radMidi").checked==true)
        {
            rabais=0.60;
        }
        else
        {
            rabais=0.40;
        }
    }
    else
    {
        if((document.getElementById("radMidi").checked==true))
        {
            rabais=0.30;
        }
        else
        {
            rabais=0;
        }
    }
    total=prix-(prix*rabais);
    console.log("votre billet vous couteras "+total+"$")
}