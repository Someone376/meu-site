
const acertos= Number(localStorage.getItem("pontuação"));

    if(acertos <=1){

document.getElementById("joão").textContent ="Não desista, aprendendo com erros, evitamos mais falhas";

document.getElementById("sindy").textContent = acertos;
    }else if(acertos == 2 || acertos == 3){

document.getElementById("joão").textContent ="Bom esforço, mas há espaço para melhorias";

document.getElementById("sindy").textContent = acertos;
    }
     else if(acertos == 4 || acertos == 5){

document.getElementById("joão").textContent ="Ótimo trabalho! Você tem um bom conhecimento sobre os pecados";

document.getElementById("sindy").textContent = acertos;
    }


