var tabfr= ["","fromage","trois","un","pierre","pompier","avion","mars","cuivre","noir","poulet","marché","mai","fer","mouton","ici","maïs","café","jus","thé","divan","oui","marble","pomme","avoine","prunier","or","poste","travail","bières","veux","vin","vert","foin","chat","pain","bois","eau","chien","deux","vache","zoo","parc","avec", "Japon","gare"];
var tabpl= ["","ser","trzy","jeden","kamień","strażak","samolot","marzec","miedź","czarny","kurczak","targ","maj","żelazo","owca","tutaj","kukurydza","kawa","sok","herbata","kanapa","tak","marmur","jabłko","owies","śliwka","złoto","poczta","praca","piwa","chcieć","wino","zielony","siano","kot","chleb","drewno","woda","pies","dwa","krowa","zoo","park","z", "Japonia","dworzec"];


var zadanie= ["0","0","0","0","0","0","0"];
var tab;
var tryb1 = 2;
var odpowiedz=0;
var punktacja=0;
var proby=0;
var rozgrywka=false;
var kociec=true;
var info;
var g3=true;
//var info2=2;
var klikniete=true;
var buzka = ":-)";
var kol1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var kol2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var kol11=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var kol22=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var trybFr=true;
var rate_value = 0;
var stareRV=0;
var zdane=false;
function sprawdz()
{
    if(rozgrywka) {
        stareRV = rate_value;
        rate_value = 0;

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

        if (odpowiedz === rate_value) {
            if(zdane===true && tryb1 === 1 && rate_value===stareRV ){proby++;}

            zdane=true;
            document.getElementById('radiobatony').style.backgroundColor = "green";
            if(tryb1===1)
            {
                document.getElementById("next2").style.backgroundColor = "green";
            }
          //  if (rate_value !== stareRV) {
            //}
            punktacja++;
            document.getElementById("counter").innerText = punktacja + " / " + proby;
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
                if (tryb1 === 1) { proby++;}
                zdane=false;
            }

            document.getElementById("counter").innerText = punktacja + " / " + proby;

            document.getElementById('radiobatony').style.backgroundColor = "red";
            if(tryb1===1) {
                setTimeout("document.getElementById('radiobatony').style.backgroundColor = \"darkblue\";", 500);
            }
            buzka = "";
        }


        if (tryb1 === 2) {
            rozgrywka = false;
            dajInfo();
            proby++;
            document.getElementById("counter").innerText = punktacja + " / " + proby;
        }


        if(rozgrywka){document.getElementById("label"+rate_value).style.color = "orange";}
        if (rate_value !== stareRV) {
            if(tryb1 === 1)
            {
                document.getElementById("counter").innerText = punktacja + " / " + proby;
                proby++;
            }

            //stareRV = 0;
            stareRV = 0;
            document.getElementById("counter").innerText = punktacja + " / " + proby;
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
    document.getElementById("INFO").innerHTML = buzka + "&nbsp &nbsp" +tabfr[info] + "  -  " + tabpl[info] + "&nbsp &nbsp" + buzka;
    document.getElementById("INFO").innerHTML += "<br>";
    document.getElementById("INFO").innerText += linia;

    klikniete = true;
}

function czystka()
{
    zadanie= ["0","0","0","0","0","0","0"];
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

    if(klikniete) {
      //  zdane=false;
        czystka();
        document.getElementById("next2").style.backgroundColor = "white";


        var min = 1;
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
                if (zadanie[i] === "0")
                {
                    function psychoza()
                    {
                        random3 = Math.floor(Math.random() * (+max - +min)) + +min;

                        if (tab[0] === random3 || tab[1] === random3 || tab[2] === random3 || tab[3] === random3 || tab[4] === random3 || tab[5] === random3)
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
  //  document.getElementById("PoleGry3").style.display="none";
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
    proby=0;
    punktacja=0;
    document.getElementById("counter").innerText = "0 / 0";
    document.getElementById("INFO").innerHTML = "INFO";
    document.getElementById("next2").style.backgroundColor = "white";

    for(var p=1;p<17;p++)
    {
        document.getElementById("k1" + p).style.backgroundColor = "whitesmoke";
        document.getElementById("k2" + p).style.backgroundColor = "orange";
    }
    aaa=true;
    bbb=true;
    aa=null;
    bb=null;
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
    klikniete=true;
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
    restart();
    g3stworzZadanie();
}

var aa;
var bb;
var aaa = true;
var bbb = true;
var aaaa ;
var bbbb ;
var aaaaa;
var bbbbb;
var g2=false;

function g2stworzZadanie()
{
    kol1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    kol2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  //  document.getElementById("INFO").innerText = "tutaj dziala";

    rate_value = 0;
    stareRV=0;
    aaa=true;
    bbb=true;
    aa=null;
    bb=null;
    var min4 = 0;
    var max4 = tabfr.length;
    var random4;
    random4 = Math.floor(Math.random() * (+max4 - +min4)) + +min4;
    kol1[0]=random4;

    var h=0;
    do {

        function psychoza2() {
            random4 = Math.floor(Math.random() * (+max4 - +min4)) + +min4;
        }

        if (kol1[0] === random4 || kol1[1] === random4 || kol1[2] === random4 || kol1[3] === random4 || kol1[4] === random4 || kol1[5] === random4 || kol1[6] === random4 || kol1[7] === random4 || kol1[8] === random4 || kol1[9] === random4 || kol1[10] === random4 || kol1[11] === random4 || kol1[12] === random4 || kol1[13] === random4 || kol1[14] === random4 || kol1[15] === random4)
        {
            psychoza2();
        }
        else
        {
            kol1[h] = random4;
            kol2[h] = random4;
            h++;
        }

    }while(kol1[15]===0);

    kol2.sort();

    for(var h=1;h<=16;h++)
    {

        kol22[h-1]=tabpl[kol2[h-1]];
        kol11[h-1]=tabfr[kol1[h-1]];


        document.getElementById("k1"+h).innerText = kol11[h-1];
        document.getElementById("k2"+h).innerText = kol22[h-1];

    }
    document.getElementById("INFO").innerHTML = "INFO";
}

function game2press(a, b)
{
if(kociec===true){
    if (document.getElementById("k" + a + b).style.backgroundColor !== "green") {

        if (a === 1 && aaa === true) {
            aa = b;
            aaa = false;
            document.getElementById("k" + a + b).style.backgroundColor = "red";
            aaaa = "k" + a + b;
        } else if (a === 2 && bbb === true) {
            bb = b;
            bbb = false;
            document.getElementById("k" + a + b).style.backgroundColor = "red";
            bbbb = "k" + a + b;
        }


        if (kol1[aa - 1] === kol2[bb - 1]) {
            kociec=false;
            aaaaa=aaaa;
            bbbbb=bbbb;
            document.getElementById(aaaa).style.backgroundColor = "limegreen";
            document.getElementById(bbbb).style.backgroundColor = "limegreen";
            info=kol1[aa-1];
            dajInfo();
            //document.getElementById("INFO").innerText += aa;
            aaa = true;
            bbb = true;
            g2 = false;
          //  aa = null;
            bb = null;

            setTimeout("dadaw2()",500);


        } else {

            if (aaa === bbb) {
               document.getElementById(aaaa).style.backgroundColor = "red";
                document.getElementById(bbbb).style.backgroundColor = "red";
                aaaaa=aaaa;
                bbbbb=bbbb;
                setTimeout("dadaw()",500);


            }
            else
            {
               // document.getElementById(bbbb).style.backgroundColor = "fffffff";
            }
        }
    }
}}

function dadaw()
{
    document.getElementById(aaaaa).style.backgroundColor = "whitesmoke";
    document.getElementById(bbbbb).style.backgroundColor = "orange";
    aaaaa=null;
    bbbbb=null;
    aaa = true;
    bbb = true;
    g2 = false;
    aa = null;
    bb = null;
    kociec=true;
}

function dadaw2()
{
    document.getElementById(aaaaa).style.backgroundColor = "green";
    document.getElementById(bbbbb).style.backgroundColor = "green";
  //  if(tryb1===2)
   // {

   // }
    aaaaa=null;
    bbbbb=null;
    aaa = true;
    bbb = true;
    g2 = false;
    aa = null;
    bb = null;
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

var wohoho=7;
var wohoho2=((1/wohoho)*100)+"%";
var siano;

function g3stworzZadanie()
{


     if(g3) {



        if(wohoho===7)
        {
            document.getElementById("lock").style.lineHeight = 75+"px";
           document.getElementById("slowa").style.lineHeight = 75+"px";
        }

        for (var y = 1; y <= wohoho; y++) {
         document.getElementById("lock").innerHTML += "<div class=\"locki\"></div><br>";
            document.getElementById("slowa").innerHTML += "<div class=\"slowo\"></div><br>";
         }

    }
    g3=false;
}