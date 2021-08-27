

var OdpowiedziDoWyboru= ["0","0","0","0","0","0","0"];
var tab;
var tryb1 = 1;
var odpowiedz=0;
var punktacja=0;
var iloscProb=0;
var rozgrywka=false;
var kociec=true;
var numerPoprawnejOdpowiedzi;
var g3=true;
//var info2=2;
var brakZadania=true;
var buzka = ":-)";
var tablicaWylosowanychNumerowPytan=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var tablicaWylosowanychNumerowPytanMIXED=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var nazwyZKolumny1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var nazwyZKolumny2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var trybFr=true;
var numerRadioButtona = 0;
var poprzedniNumerRadioButtona=0;
var zdane=false;

function SprawdzPoprawnoscOdpowiedziWQuizie()
{
    if(rozgrywka) {
        poprzedniNumerRadioButtona = numerRadioButtona;
        numerRadioButtona = 0;

        if (document.getElementById("radio1").checked) {
            numerRadioButtona = 1;
        } else if (document.getElementById("radio2").checked) {
            numerRadioButtona = 2;
        } else if (document.getElementById("radio3").checked) {
            numerRadioButtona = 3;
        } else if (document.getElementById("radio4").checked) {
            numerRadioButtona = 4;
        } else if (document.getElementById("radio5").checked) {
            numerRadioButtona = 5;
        } else if (document.getElementById("radio6").checked) {
            numerRadioButtona = 6;
        }

        if (odpowiedz === numerRadioButtona) {
            if(zdane===true && tryb1 === 1 && numerRadioButtona===poprzedniNumerRadioButtona ){iloscProb++;}

            zdane=true;
            document.getElementById('radiobatony').style.backgroundColor = "green";
            if(tryb1===1)
            {
                document.getElementById("PRZYCISK_NEXT").style.backgroundColor = "green";
            }
          //  if (rate_value !== stareRV) {
            //}
            punktacja++;
            document.getElementById("counter").innerText = punktacja + " / " + iloscProb;
            if (punktacja >= 0 && punktacja < 10) {
                buzka = "_GOOD_";
            } else if (punktacja >= 10 && punktacja < 30) {
                document.getElementById("counter").style.color = "orange";
                buzka = "_NICE_";
            } else if (punktacja >= 30 && punktacja < 50) {
                buzka = "_WELL_";
                document.getElementById("counter").style.color = "yellow";
            } else if (punktacja >= 50) {
                buzka = "_V.WELL_";
                document.getElementById("counter").style.color = "green";
            }
            if (tryb1 === 1) {
                buzka="";
                rozgrywka = false;
                dajInfo();
            }
        } else {
            if(zdane===true)
            {
                if (tryb1 === 1) { iloscProb++;}
                zdane=false;
            }

            document.getElementById("counter").innerText = punktacja + " / " + iloscProb;

            document.getElementById('radiobatony').style.backgroundColor = "red";
            if(tryb1===1) {
                setTimeout("document.getElementById('radiobatony').style.backgroundColor = \"darkblue\";", 500);
            }
            buzka = "";
        }


        if (tryb1 === 2) {
            rozgrywka = false;
            dajInfo();
            iloscProb++;
            document.getElementById("counter").innerText = punktacja + " / " + iloscProb;
        }


        if(rozgrywka){document.getElementById("label"+numerRadioButtona).style.color = "orange";}
        if (numerRadioButtona !== poprzedniNumerRadioButtona) {
            if(tryb1 === 1)
            {
                document.getElementById("counter").innerText = punktacja + " / " + iloscProb;
                iloscProb++;
            }

            //stareRV = 0;
            poprzedniNumerRadioButtona = 0;
            document.getElementById("counter").innerText = punktacja + " / " + iloscProb;
        }
       // if(rozgrywka===false)
      // {
       //     rate_value===1;

       // }
    }
  //  zdane=false;

}
//var stringi = "radio"+rate_value.toString();

function dajInfo()
{
    document.getElementById("label"+odpowiedz).style.color = "limegreen";

   var linia=  document.getElementById("INFO").innerText;
    document.getElementById("INFO").innerHTML = buzka + "&nbsp &nbsp" +tabfr[numerPoprawnejOdpowiedzi] + "  -  " + tabpl[numerPoprawnejOdpowiedzi] + "&nbsp &nbsp" + buzka;
    document.getElementById("INFO").innerHTML += "<br>";
    document.getElementById("INFO").innerText += linia;

    brakZadania = true;
}

function WyczyscOdpowiedziIKolory()
{
    OdpowiedziDoWyboru= ["0","0","0","0","0","0","0"];
    document.getElementById('radiobatony').style.backgroundColor="darkblue";
    //if(tryb1===2) {
        document.getElementById("label1").style.color = "white";
        document.getElementById("label2").style.color = "white";
        document.getElementById("label3").style.color = "white";
        document.getElementById("label4").style.color = "white";
        document.getElementById("label5").style.color = "white";
        document.getElementById("label6").style.color = "white";

        rozgrywka = true;
    //}
}

function stworzZadanie()
{

    if(brakZadania) {
      //  zdane=false;
        WyczyscOdpowiedziIKolory();
        document.getElementById("PRZYCISK_NEXT").style.backgroundColor = "white";


        var min = 1;
        var max = tabfr.length;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        if (trybFr){OdpowiedziDoWyboru[0] = tabfr[random];}
        else {OdpowiedziDoWyboru[0] = tabpl[random]; }
        numerPoprawnejOdpowiedzi = random;       

        var min2 = 1;
        var max2 = 7;
        var random2 = Math.floor(Math.random() * (+max2 - +min2)) + +min2;

       if(trybFr) {OdpowiedziDoWyboru[random2] = tabpl[random];}
       else { OdpowiedziDoWyboru[random2] = tabfr[random]; }
        odpowiedz = random2;

        var random3=0;

        var k=0;
        tab=[0,0,0,0,0,0,0];
        tab[k]=numerPoprawnejOdpowiedzi;
        for (var i = 0; i <= 6; i++)
        {
                if (OdpowiedziDoWyboru[i] === "0")
                {
                    function WylosujPytanie()
                    {
                        random3 = Math.floor(Math.random() * (+max - +min)) + +min;

                        if (tab[0] === random3 || tab[1] === random3 || tab[2] === random3 || tab[3] === random3 || tab[4] === random3 || tab[5] === random3)
                        {
                            WylosujPytanie();
                        }
                        else
                        {
                            tab[k] = random3;
                           if(trybFr){ OdpowiedziDoWyboru[i] = tabpl[random3];}
                           else {OdpowiedziDoWyboru[i] = tabfr[random3];}
                        }
                    }
                    WylosujPytanie();
            }
            k++;
        }
    }
    brakZadania=false;
}

function wstawZadanie()
{
  //  document.getElementById("PoleGry3").style.display="none";
    stworzZadanie();

        document.getElementById("h1").innerText = OdpowiedziDoWyboru[0];

        document.getElementById("label1").innerText = OdpowiedziDoWyboru[1];
        document.getElementById("label2").innerText = OdpowiedziDoWyboru[2];
        document.getElementById("label3").innerText = OdpowiedziDoWyboru[3];
        document.getElementById("label4").innerText = OdpowiedziDoWyboru[4];
        document.getElementById("label5").innerText = OdpowiedziDoWyboru[5];
        document.getElementById("label6").innerText = OdpowiedziDoWyboru[6];
}

function restart()
{
    brakZadania=true;
    iloscProb=0;
    punktacja=0;
    document.getElementById("counter").innerText = "0 / 0";
    document.getElementById("INFO").innerHTML = "INFO";
    document.getElementById("PRZYCISK_NEXT").style.backgroundColor = "white";

    for(var p=1;p<17;p++)
    {
        document.getElementById("k1" + p).style.backgroundColor = "whitesmoke";
        document.getElementById("k2" + p).style.backgroundColor = "orange";
    }
    brakOdpowiedziKolumna1=true;
    brakOdpowiedziKolumna2=true;
    wybranyNumerWiersza1=null;
    wybranyNumerWiersza2=null;
    wstawZadanie();
    g2stworzZadanie();
}

function zamiana()
{

    if(trybFr)
    {
        trybFr=false;
        document.getElementById("STATUS").innerText = " PL => FR";
    }
    else
        {
            trybFr=true;
            document.getElementById("STATUS").innerText = " FR => PL";
        }
    brakZadania=true;
    wstawZadanie();

}

function gra1() {
    wstawZadanie();
    document.getElementById("meniusio1").style.backgroundColor="red";
    document.getElementById("meniusio2").style.backgroundColor="white";
    document.getElementById("meniusio3").style.backgroundColor="white";

    document.getElementById("PoleGry").style.display="block";
    document.getElementById("PoleGry2").style.display="none";
    document.getElementById("counter").style.display="block";
    document.getElementById("STATUS").style.display="block";
    document.getElementById("jezyk").style.display="block";
   // document.getElementById("nazwatrybu").style.display="block";
    document.getElementById("tryb").style.display="block";
    document.getElementById("PoleGry3").style.display="none";

    restart();
}
function gra2() {
    document.getElementById("meniusio1").style.backgroundColor="white";
    document.getElementById("meniusio2").style.backgroundColor="red";
    document.getElementById("meniusio3").style.backgroundColor="white";

    document.getElementById("PoleGry").style.display="none";
    document.getElementById("jezyk").style.display="none";
    document.getElementById("PoleGry2").style.display="block";
    document.getElementById("counter").style.display="none";
    document.getElementById("STATUS").style.display="none";
    document.getElementById("tryb").style.display="none";
    document.getElementById("PoleGry3").style.display="none";

    //document.getElementById("nazwatrybu").style.display="none";

    //document.getElementById("INFO").innerText += "tutaj dziala";
    restart();
    g2stworzZadanie();
}
function gra3()
{
    document.getElementById("meniusio1").style.backgroundColor="white";
    document.getElementById("meniusio2").style.backgroundColor="white";
    document.getElementById("meniusio3").style.backgroundColor="red";

    document.getElementById("PoleGry").style.display="none";
    document.getElementById("PoleGry2").style.display="none";
    document.getElementById("PoleGry3").style.display="block";
    document.getElementById("jezyk").style.display="none";
    document.getElementById("tryb").style.display="none";
    document.getElementById("STATUS").style.display="none";
    restart();
    g3stworzZadanie();
}

var wybranyNumerWiersza1;
var wybranyNumerWiersza2;
var brakOdpowiedziKolumna1 = true;
var brakOdpowiedziKolumna2 = true;
var pozycjaWKolumnie1 ;
var pozycjaWKolumnie2 ;
var wybranaPozycjaWKolumnie1;
var wybranaPozycjaWKolumnie2;
var g2=false;
var iloscPoprawnychZaznaczen=0;

function g2stworzZadanie()
{
    tablicaWylosowanychNumerowPytan=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    tablicaWylosowanychNumerowPytanMIXED=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //  document.getElementById("INFO").innerText = "tutaj dziala";


    numerRadioButtona = 0;
    poprzedniNumerRadioButtona=0;
    brakOdpowiedziKolumna1=true;
    brakOdpowiedziKolumna2=true;
    wybranyNumerWiersza1=null;
    wybranyNumerWiersza2=null;
    var min4 = 0;
    var max4 = tabfr.length;
    var random4;
    random4 = Math.floor(Math.random() * (+max4 - +min4)) + +min4;
    tablicaWylosowanychNumerowPytan[0]=random4;

    var h=0;
    do {

        function LosowaniePytanDoGryNr2() {
            random4 = Math.floor(Math.random() * (+max4 - +min4)) + +min4;
        }

        if (tablicaWylosowanychNumerowPytan[0] === random4 || tablicaWylosowanychNumerowPytan[1] === random4 || tablicaWylosowanychNumerowPytan[2] === random4 || tablicaWylosowanychNumerowPytan[3] === random4 || tablicaWylosowanychNumerowPytan[4] === random4 || tablicaWylosowanychNumerowPytan[5] === random4 || tablicaWylosowanychNumerowPytan[6] === random4 || tablicaWylosowanychNumerowPytan[7] === random4 || tablicaWylosowanychNumerowPytan[8] === random4 || tablicaWylosowanychNumerowPytan[9] === random4 || tablicaWylosowanychNumerowPytan[10] === random4 || tablicaWylosowanychNumerowPytan[11] === random4 || tablicaWylosowanychNumerowPytan[12] === random4 || tablicaWylosowanychNumerowPytan[13] === random4 || tablicaWylosowanychNumerowPytan[14] === random4 || tablicaWylosowanychNumerowPytan[15] === random4)
        {
            LosowaniePytanDoGryNr2();
        }
        else
        {
            tablicaWylosowanychNumerowPytan[h] = random4;
            tablicaWylosowanychNumerowPytanMIXED[h] = random4;
            h++;
        }

    }while(tablicaWylosowanychNumerowPytan[15]===0);

    tablicaWylosowanychNumerowPytanMIXED.sort();

    for(var h=1;h<=16;h++)
    {

        nazwyZKolumny2[h-1]=tabpl[tablicaWylosowanychNumerowPytanMIXED[h-1]];
        nazwyZKolumny1[h-1]=tabfr[tablicaWylosowanychNumerowPytan[h-1]];


        document.getElementById("k1"+h).innerText = nazwyZKolumny1[h-1];
        document.getElementById("k2"+h).innerText = nazwyZKolumny2[h-1];

    }
    document.getElementById("INFO").innerHTML = "INFO";
}
//document.getElementById("INFO").innerText += linia;
function game2press(numerKolumny, numerWiersza)
{
if(kociec===true){
    if (document.getElementById("k" + numerKolumny + numerWiersza).style.backgroundColor !== "green") {

        if (numerKolumny === 1 && brakOdpowiedziKolumna1 === true) {
            wybranyNumerWiersza1 = numerWiersza;
            brakOdpowiedziKolumna1 = false;
            document.getElementById("k" + numerKolumny + numerWiersza).style.backgroundColor = "red";
            pozycjaWKolumnie1 = "k" + numerKolumny + numerWiersza;
        } else if (numerKolumny === 2 && brakOdpowiedziKolumna2 === true) {
            wybranyNumerWiersza2 = numerWiersza;
            brakOdpowiedziKolumna2 = false;
            document.getElementById("k" + numerKolumny + numerWiersza).style.backgroundColor = "red";
            pozycjaWKolumnie2 = "k" + numerKolumny + numerWiersza;
        }

        if (tablicaWylosowanychNumerowPytan[wybranyNumerWiersza1 - 1] === tablicaWylosowanychNumerowPytanMIXED[wybranyNumerWiersza2 - 1]) {
            if(iloscPoprawnychZaznaczen===15)
            {
                wygra=false;
                document.getElementById("konfetti").style.display="block";
                setTimeout("konfi()",10000);
            }
            kociec=false;
            wybranaPozycjaWKolumnie1=pozycjaWKolumnie1;
            wybranaPozycjaWKolumnie2=pozycjaWKolumnie2;
            document.getElementById(pozycjaWKolumnie1).style.backgroundColor = "limegreen";
            document.getElementById(pozycjaWKolumnie2).style.backgroundColor = "limegreen";
            iloscPoprawnychZaznaczen++;
            numerPoprawnejOdpowiedzi=tablicaWylosowanychNumerowPytan[wybranyNumerWiersza1-1];
            dajInfo();
            //document.getElementById("INFO").innerText += aa;
            brakOdpowiedziKolumna1 = true;
            brakOdpowiedziKolumna2 = true;
            g2 = false;
          //  aa = null;
            wybranyNumerWiersza2 = null;

            setTimeout("AnimacjaDobrejOdpowiedzi()",500);


        } else {

            if (brakOdpowiedziKolumna1 === brakOdpowiedziKolumna2) {
               document.getElementById(pozycjaWKolumnie1).style.backgroundColor = "red";
                document.getElementById(pozycjaWKolumnie2).style.backgroundColor = "red";
                wybranaPozycjaWKolumnie1=pozycjaWKolumnie1;
                wybranaPozycjaWKolumnie2=pozycjaWKolumnie2;
                setTimeout("AnimacjaZlejOdpowiedzi()",500);


            }
            else
            {
               // document.getElementById(bbbb).style.backgroundColor = "fffffff";
            }
        }
    }
}}

function AnimacjaZlejOdpowiedzi()
{
    document.getElementById(wybranaPozycjaWKolumnie1).style.backgroundColor = "whitesmoke";
    document.getElementById(wybranaPozycjaWKolumnie2).style.backgroundColor = "orange";
    wybranaPozycjaWKolumnie1=null;
    wybranaPozycjaWKolumnie2=null;
    brakOdpowiedziKolumna1 = true;
    brakOdpowiedziKolumna2 = true;
    g2 = false;
    wybranyNumerWiersza1 = null;
    wybranyNumerWiersza2 = null;
    kociec=true;
}

function AnimacjaDobrejOdpowiedzi()
{
    document.getElementById(wybranaPozycjaWKolumnie1).style.backgroundColor = "green";
    document.getElementById(wybranaPozycjaWKolumnie2).style.backgroundColor = "green";
  //  if(tryb1===2)
   // {

   // }
    wybranaPozycjaWKolumnie1=null;
    wybranaPozycjaWKolumnie2=null;
    brakOdpowiedziKolumna1 = true;
    brakOdpowiedziKolumna2 = true;
    g2 = false;
    wybranyNumerWiersza1 = null;
    wybranyNumerWiersza2 = null;
    kociec=true;
}

function zmianatrybu()
{
    if (tryb1===1)
    {
        tryb1=2;
      //  document.getElementById("nazwatrybu").innerText= "jedna szansa";
        document.getElementById("tryb").value= "jedna szansa";
    }
    else if(tryb1===2)
    {
        tryb1=1;
        //document.getElementById("nazwatrybu").innerText= "klikasz az trafisz";
        document.getElementById("tryb").value= "klikasz az trafisz";
    }
    restart();
}

var wohoho=10;
var siano = ["styczen", "luty", "marzec","kwiecien"];

function g3stworzZadanie()
{
     if(g3) {

         var kol5=[0,0,0,0,0,0,0,0,0,0];
         var min5 = 0;
         var max5 = 11;
         var random5;
         random5 = Math.floor(Math.random() * (+max5 - +min5)) + +min5;
         kol5[0]=random5;

         var h5=0;
         do {

             function psychoza3() {
                 random5 = Math.floor(Math.random() * (+max5 - +min5)) + +min5;
             }

             if (kol5[0] === random5 || kol5[1] === random5 || kol5[2] === random5 || kol5[3] === random5 || kol5[4] === random5 || kol5[5] === random5 || kol5[6] === random5 || kol5[7] === random5 || kol5[8] === random5 || kol5[9] === random5 || kol5[10] === random5)
             {
                 psychoza3();
             }
             else
             {
                 kol5[h5] = random5;
                 h5++;
             }
         }while(h5<10);

        for (var y = 1; y <= wohoho; y++)
        {
         document.getElementById("lock").innerHTML += "<div class=\"locki\" id='locki"    +y+       "' onclick=game3s("+y+    ")></div><br>";
            document.getElementById("slowa").innerHTML += "<div class=\"slowo\" id='slowo"  +y+"' onclick=game3p("+y+    ")>dzban</div><br>";
            document.getElementById("plusminus").innerHTML += "<div class=\"slowo\" id='a"  +y+    "'>dzban</div><br>";

            if(wohoho===7)
            {
                document.getElementById("slowo" + y).style.marginTop = 30+"px";
                document.getElementById("locki" + y).style.marginTop = 30+"px";
                document.getElementById("a" + y).style.marginTop = 30+"px";
            }
           else if(wohoho===10)
            {
                document.getElementById("slowo" + y).style.marginTop = 10+"px";
                document.getElementById("locki" + y).style.marginTop = 10+"px";
                document.getElementById("a" + y).style.marginTop = 10+"px";
            }
           else if(wohoho===12)
            {
                document.getElementById("slowo" + y).style.marginTop = 1+"px";
                document.getElementById("locki" + y).style.marginTop = 1+"px";
                document.getElementById("a" + y).style.marginTop = 1+"px";
            }


           // document.getElementById("INFO").innerText = kol5;

            document.getElementById("a" + y).innerText = tabliczbypl[y-1];
            document.getElementById("slowo" + y).innerText = tabliczbyfr[kol5[y-1]-1];

          // document.getElementById("INFO").innerText += pozycja;

           // document.getElementById("a" + y).innerText = tabliczbypl[y-1];
          //  document.getElementById("slowo" + y).innerText = tabliczbyfr[y-1];

         }





      //  document.getElementById("slowo2").style.backgroundColor = "blue";
      //  document.getElementById("slowo2").style.color = "red";
      //  document.getElementById("slowo3").innerText = "red";


    }
    g3=false;
}

function konfi() {

    document.getElementById("konfetti").style.display="none";
    iloscPoprawnychZaznaczen=0;

}
var szpinak;
function game3p( cebula) {
    szpinak=cebula;
    for (var y = 1; y <= wohoho; y++)
    {
        if(document.getElementById("slowo"+y).style.backgroundColor !== "blue")
        {
            document.getElementById("slowo" + y).style.backgroundColor = "wheat";
        }
    }

    if(document.getElementById("slowo" + szpinak).style.backgroundColor !== "blue")
    {
        document.getElementById("slowo"+cebula).style.backgroundColor = "red";
    }

}

//var rozmiarmin=1;

function dodaj3() {
    var przesuniecie=1;


    if(szpinak!==1 && document.getElementById("slowo" + szpinak).style.backgroundColor !== "blue")
    {

        while(document.getElementById("slowo" + (szpinak - 1)).style.backgroundColor === "blue")
        {
            szpinak--;
            przesuniecie++;
            if(szpinak ===1)
            {
                szpinak=szpinak+przesuniecie;
                przesuniecie=0;
            }

        }
        for (var y = 1; y <= wohoho; y++) {
            if(document.getElementById("slowo" + y).style.backgroundColor !== "blue")
            {
                document.getElementById("slowo" + y).style.backgroundColor = "wheat";
            }
        }
        document.getElementById("slowo" + (szpinak - 1)).style.backgroundColor = "red";
        szpinak--;

        var bufforA = document.getElementById("slowo" + szpinak).innerText;
        document.getElementById("slowo" + szpinak).innerText = document.getElementById("slowo" + (szpinak + przesuniecie)).innerText;
        document.getElementById("slowo" + (szpinak + przesuniecie)).innerText = bufforA;
    }
}
function odejmij3() {
    var kura2=1;

    if(szpinak!==wohoho && document.getElementById("slowo" + szpinak).style.backgroundColor !== "blue")
    {

        while(document.getElementById("slowo" + (szpinak + 1)).style.backgroundColor === "blue")
        {
            szpinak++;
            kura2++;
            if(szpinak===wohoho){
                szpinak=szpinak-kura2;
                kura2=0;
            }


        }
        for (var y = 1; y <= wohoho; y++) {
            if(document.getElementById("slowo" + y).style.backgroundColor !== "blue")
            {
                document.getElementById("slowo" + y).style.backgroundColor = "wheat";
            }

        }

        document.getElementById("slowo" + (szpinak + 1)).style.backgroundColor = "red";
        szpinak++;


        var bufforAA = document.getElementById("slowo"+szpinak).innerText;

        document.getElementById("slowo"+szpinak).innerText = document.getElementById("slowo"+(szpinak-kura2)).innerText;
        document.getElementById("slowo"+(szpinak-kura2)).innerText = bufforAA;
    }
}


function game3s(kliknietylock) {

    if(document.getElementById("locki" + kliknietylock).style.backgroundColor !== "blue")
    {
        document.getElementById("a" + kliknietylock).style.backgroundColor = "blue";
        document.getElementById("locki" + kliknietylock).style.backgroundColor = "blue";
        document.getElementById("slowo" + kliknietylock).style.backgroundColor = "blue";
    }

    else
    {
        document.getElementById("a" + kliknietylock).style.backgroundColor = "wheat";
        document.getElementById("locki" + kliknietylock).style.backgroundColor = "yellow";
        document.getElementById("slowo" + kliknietylock).style.backgroundColor = "wheat";
    }

}