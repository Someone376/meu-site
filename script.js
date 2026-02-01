
const rp1d = document.querySelector("#p1a");
const rp2d = document.querySelector("#p2");
const rp3d = document.getElementsByName("Pergunta3c");
const rp4d = document.querySelector("#rps4");
const rp5d = document.getElementById("p5");
const botao =document.getElementById("button");
const respostasCorretas1 ="Orgulho/Obstinação";
const limparResposta = document.getElementById("laura");
const respostasCorretas2 ="Amar o Próximo";
const respostasCorretas4 ="Cobiça";
const respostasCorretas3 =" Snhos Impuros, Cobiça, Pensamentos Pecaminosos";
const respostasCorretas5 ="Pensamentos Pecaminosos";
let  checado  =  [false,false,false,false,false];

let acertos = 0;
function resposta1(){
if (rp1d.checked == true && checado[0] == false ){
checado[0]= true;
acertos++;

}

}

function limparTexto(texto){

return texto

    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();



}

function resposta2(){

 let rp2 = rp2d.value; 
 rp2= limparTexto(rp2);


if (rp2== "amar o proximo" && checado[1]==false){
    acertos++;
checado[1] = true;



}

}


function resposta3(){
if (rp3d[0].checked ==true && rp3d[1].checked == true && rp3d[2].checked == true && checado[2] == false){
    checado[2]= true;

acertos++;
}
}
function resposta4(){

    let resp= rp4d.value;

    if (resp== "Cobiça"&& checado[3] == false){
        checado[3]= true;

acertos++;

        }    }


      function  resposta5() {
            let p5r= rp5d.value;

            p5r=limparTexto(p5r);
            if(p5r== "pensamentos pecaminosos" && checado[4]==false){
                checado[4]=true;
                acertos++;

            }
            


        }
function resposta(){

resposta2();

resposta1();

resposta3();

resposta4();
resposta5();

}

limparResposta.addEventListener("click", function(){
checado[0]=false;
checado[1]=false;
checado[2]=false;
checado[3]=false;
checado[4]=false;

});



botao.addEventListener("click", function(){

event.preventDefault();
resposta();
localStorage.setItem("pontuação", acertos);
window.location.href = "indes.html";



});

