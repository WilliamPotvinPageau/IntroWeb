function btnCalculer_onclick()
{
 	var Age, Categorie;

 	Age=parseInt(document.getElementById("txtAge").value);

    if((Age>=6)&&(Age<=8))
    {
        Categorie="Poussin"
    }
    else
    {
        if((Age==9)||(Age==10))
        {
            Categorie="Pupille"
        }
        else
        {
            if((Age==11)||(Age==12))
            {
                Categorie="Minime"
            }
            else
            {
                Categorie="Cadet"
            }
        }
    }

    document.getElementById("lblMessage").innerHTML=Categorie;
}