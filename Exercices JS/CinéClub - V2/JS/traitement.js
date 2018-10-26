function btnCalculer_onclick()
{
    var prix, age, film, representation, rabais, total;

    prix=parseFloat(document.getElementById("txtBasePrix").value);
    age=parseFloat(document.getElementById("txtAge").value);
    film=(document.getElementById("lstOptions").value);

    if((document.getElementById("chkMiSession").checked==true))
    {
        if(age<=16)
        {
            if((document.getElementById("radMidi").checked==true))
            {
                rabais=0.60;
                representation="midi";
            }
            else
            {
                rabais=0.40;
                representation="soir";
            }
        }
        else
        {
            if((document.getElementById("radMidi").checked==true))
            {
                rabais=0.30;
                representation="midi";
            }
            else
            {
                rabais=0;
                representation="soir";
            }
        }
    }
    else
    {
        rabais=0;
        if((document.getElementById("radMidi").checked==true))
        {
            representation="midi";
        }
        else
        {
            representation="soir";
        }
    }
    total=prix-(prix*rabais);
    console.log("un billet du "+representation+" pour un spectateur de "+age+ " ans coûte $"+total+" pour le film "+film+".")
}