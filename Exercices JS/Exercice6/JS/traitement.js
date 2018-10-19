function btnCalculer_onclick()
{
    var _1c, _5c, _10c, _25c, Total;

    _1c=parseFloat(document.getElementById("txt1c").value);
    _5c=parseFloat(document.getElementById("txt5c").value);
    _10c=parseFloat(document.getElementById("txt10c").value);
    _25c=parseFloat(document.getElementById("txt25c").value);
    Total=((_1c)+(_5c*5)+(_10c*10)+(_25c*25))/100;

    console.log("Vous avez "+Total+"$ Canadian Tire");

}