var prix, age, film, representation, rabais, total;

function btnCalculer_onclick()
{
    inserrerDonees();
    calculerRabais();
    calculerTotal();

    console.log("un billet du "+representation+" pour un spectateur de "+age+ " ans coûte $"+total+" pour le film "+film+".")
}

function calculerTotal()
{
    total=prix-(prix*rabais);
}

function inserrerDonees()
{
    prix=parseFloat(document.getElementById("txtBasePrix").value);
    age=parseFloat(document.getElementById("txtAge").value);
    film=(document.getElementById("lstOptions").value);
}

function calculerRabais()
{
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
}

function onchange_lstOptions()
{
    var img;
    film=(document.getElementById("lstOptions").value);
    switch(film)
    {
        case "Au poste!":img="Film1";
            break;

        case "Colette": img="Film2";
            break;

        case "Halloween":img="Film3";
            break;

        case "La religieuse":img="Film4";
            break;

        default:img="Film1";
            break;
    }
    document.getElementById("imgFilm").src="img/"+img+".jpg"
}