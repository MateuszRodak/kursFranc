var tabfr= ["oui","marble","pomme","avoine","prunier","or","poste","travail","bières","veux","vin","vert","foin","chat","pain","bois","eau","chien","deux","vache","zoo","parc","avec", "Japon","gare"];
var tabpl= ["tak","marmur","jabłko","owies","śliwka","złoto","poczta","praca","piwa","chcieć","wino","zielony","siano","kot","chleb","drewno","woda","pies","dwa","krowa","zoo","park","z", "Japonia","dworzec"];


var zadanie= ["0","0","0","0","0","0","0"];
var tab;
var odpowiedz=0;
var punktacja=0;
var proby=1;
var rozgrywka=false;
var info=0;
var klikniete=true;
var buzka = ":-)";

var trybFr=true;

function sprawdz()
{
    if(rozgrywka)
    {
        var rate_value = 0;

        if (document.getElementById("radio1").checked) {
            rate_value = 1;
        } else if (document.getElementById("radio2").checked) {
            rate_value = 2;
        } else if (document.getElementById("radio3").checked) {
            rate_value = 3;
        } else if (document.getElementById("radio4").checked) {
            rate_value = 4;
        } else if (document.getElementById("radio5").checked) {
            rate_value = 5;
        } else if (document.getElementById("radio6").checked) {
            rate_value = 6;
        }

        if (odpowiedz == rate_value) {
            document.getElementById('radiobatony').style.backgroundColor = "green";
            punktacja++;
            document.getElementById("counter").innerText = punktacja + " / " + proby;
            buzka = ":-)";

        } else {
            document.getElementById("counter").innerText = punktacja + " / " + proby;
            document.getElementById('radiobatony').style.backgroundColor = "red";
            //document.getElementsByName("tabfr").style.color = "red" ;
             buzka = ":-(";
        }
        dajInfo();
    }

    rozgrywka = false;
}

function dajInfo() {
    proby++;

   var linia=  document.getElementById("INFO").innerText;
    document.getElementById("INFO").innerHTML = buzka + "&nbsp &nbsp" +tabfr[info] + "  -  " + tabpl[info];
    document.getElementById("INFO").innerHTML += "<br>";
    document.getElementById("INFO").innerText += linia;

    klikniete = true;
}

function czystka()
{
    zadanie= ["0","0","0","0","0","0","0"];
    document.getElementById('radiobatony').style.backgroundColor="lightseagreen"
    rozgrywka = true;
}

function stworzZadanie()
{
    if(klikniete) {
        czystka();

        var min = 0;
        var max = tabfr.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        if (trybFr){zadanie[0] = tabfr[random];}
        else {zadanie[0] = tabpl[random]; }
        info = random;

        var min2 = 1;
        var max2 = 7;
        var random2 = Math.floor(Math.random() * (+max2 - +min2)) + +min2;

       if(trybFr) {zadanie[random2] = tabpl[random];}
       else { zadanie[random2] = tabfr[random]; }
        odpowiedz = random2;

        var random3=0;

        var k=0;
        tab=[0,0,0,0,0,0,0];
        tab[k]=info;
        for (var i = 0; i <= 6; i++)
        {
                if (zadanie[i] == "0")
                {
                    function psychoza()
                    {
                        random3 = Math.floor(Math.random() * (+max - +min)) + +min;

                        if (tab[0] == random3 || tab[1] == random3 || tab[2] == random3 || tab[3] == random3 || tab[4] == random3 || tab[5] == random3)
                        {
                            psychoza();
                        }
                        else
                        {
                            tab[k] = random3;
                           if(trybFr){ zadanie[i] = tabpl[random3];}
                           else {zadanie[i] = tabfr[random3];}
                        }
                    }
                    psychoza();
            }
            k++;
        }
    }
    klikniete=false;
}

function wstawZadanie()
{
    stworzZadanie();

        document.getElementById("h1").innerText = zadanie[0];

        document.getElementById("label1").innerText = zadanie[1];
        document.getElementById("label2").innerText = zadanie[2];
        document.getElementById("label3").innerText = zadanie[3];
        document.getElementById("label4").innerText = zadanie[4];
        document.getElementById("label5").innerText = zadanie[5];
        document.getElementById("label6").innerText = zadanie[6];
}

function restart()
{
    klikniete=true;
    proby=1;
    punktacja=0;
    document.getElementById("counter").innerText = "0/0";
    wstawZadanie();
    document.getElementById("INFO").innerHTML = "INFO";
}

function zamiana() {

    if(trybFr)
    {
        trybFr=false;
        document.getElementById("STATUS").innerText = " PL -> FR";
    }
    else
        {
            trybFr=true
            document.getElementById("STATUS").innerText = " FR -> PL";
        }
    klikniete=true;
    wstawZadanie();

}

function gra1() {
    document.getElementById("PoleGry").style.display="block";
    document.getElementById("PoleGry2").style.display="none";
    restart();
}
function gra2() {
    document.getElementById("PoleGry").style.display="none";
    document.getElementById("PoleGry2").style.display="block";
    restart();
}
function gra3() {
    document.getElementById("PoleGry").style.display="none";
    restart();
}