var kutyakTomb;
var irany = true;
$(function(){
    kutyakTomb =[
        
        {nev:"Mira",kor: 3, fajta:"Terrier"},
        {nev:"Boxer",kor: 2, fajta:"Buldog"},
        {nev:"Morzsi",kor: 1, fajta:"Husky"}
    ];
    tablazatKiir();
    
    
})

function tablazatKiir(){
    $("article").empty();
    $("article").append("<tabel></table>");
    $("article>tabel").append("<tr><th>Név</th><th>kor</th><th>fajta</th></tr>");
    for (let i = 0; i < kutyakTomb.length; i++) {
        $("article>tabel").append("<tr></tr>");
        for(var item in kutyakTomb[i]){
            $("article>tabel>tr").eq(i+1).append("<td>"+kutyakTomb[i][item]+"</td>");
        }
    }
    $("article>tabel>tr>th").click(rendez);

}

function rendez(){
    if(irany==true){
        kutyakTomb.sort(
            function(a,b){
                return Number(a.nev > b.nev)-0.5;
            }
        );
        irany=false;
    }
    else{
        kutyakTomb.sort(
            function(a,b){
                return Number(a.nev < b.nev)-0.5;
            }
        );  
        irany=true;
    }
    tablazatKiir();
}
