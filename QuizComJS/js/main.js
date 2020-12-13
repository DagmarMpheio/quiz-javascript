var pontos = 0;//pontuacao
perguntas = ["Quem foi o primeiro presidente de Angola?", "Em que ano Diogo Cão pisou em Angola?", "Qual é a extensao de angola?",
    "Quantos Municípios tem Angola?", "Qual é o monte mais alto de angola?", "Em que ano foi fundanda a tpa?", "Onde poddemos encontar o maior monte de angola?",
    "Em que ano foi lançado o primeiro satélite angolano?", "Que reino a rainha Njinga Mbandi governou?", "Qual é o nome actual da antiga cidade Sá da Bandeira?"];//perguntas
var per = document.getElementById("questao");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
document.getElementById("questao").innerHTML = perguntas[0].toUpperCase();
//ocultar mensagem de pontuacao
document.getElementById("pontos").style.display = 'none';
document.getElementById("pontosV").style.display = 'none';
document.getElementById("pontuacaoV").style.display = 'none';

//funcao para verificar a resposta
function verificarResposta() {
    var resp1 = document.formPergunta.resposta;

    if (resp1.value == "António Agostinho Neto") {
        per.innerHTML = perguntas[1].toUpperCase();
        op1.innerHTML = "2019";
        document.getElementById("opRadio1").value = "2019";
        op2.innerHTML = "1482";
        document.getElementById("opRadio2").value = "1482";
        op3.innerHTML = "1975";
        document.getElementById("opRadio3").value = "1975";
        op4.innerHTML = "2002";
        document.getElementById("opRadio4").value = "2002";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "1482") {
        per.innerHTML = perguntas[2].toUpperCase();
        op1.innerHTML = "820 km<sup>2</sup>";
        document.getElementById("opRadio1").value = "820 km2";
        op2.innerHTML = "1.700.246 km<sup>2</sup>";
        document.getElementById("opRadio2").value = "1.700.246 km2";
        op3.innerHTML = "100 km<sup>2</sup>";
        document.getElementById("opRadio3").value = "100 km2";
        op4.innerHTML = "1.246.700 Km<sup>2</sup>";
        document.getElementById("opRadio4").value = "1.246.700 Km2";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "1.246.700 Km2") {
        per.innerHTML = perguntas[3].toUpperCase();
        op1.innerHTML = "164";
        document.getElementById("opRadio1").value = "164";
        op2.innerHTML = "75";
        document.getElementById("opRadio2").value = "75";
        op3.innerHTML = "64";
        document.getElementById("opRadio3").value = "64";
        op4.innerHTML = "120";
        document.getElementById("opRadio4").value = "120";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "164") {
        per.innerHTML = perguntas[4].toUpperCase();
        op1.innerHTML = "Monte Evereste";
        document.getElementById("opRadio1").value = "Monte Evereste";
        op2.innerHTML = "Morro do Moco";
        document.getElementById("opRadio2").value = "Morro do Moco";
        op3.innerHTML = "Monte do Huambo";
        document.getElementById("opRadio3").value = "Monte do Huambo";
        op4.innerHTML = "Morro do Lubango";
        document.getElementById("opRadio4").value = "Morro do Lubango";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "Morro do Moco") {
        per.innerHTML = perguntas[5].toUpperCase();
        op1.innerHTML = "2008";
        document.getElementById("opRadio1").value = "2008";
        op2.innerHTML = "1979";
        document.getElementById("opRadio2").value = "1979";
        op3.innerHTML = "1975";
        document.getElementById("opRadio3").value = "1975";
        op4.innerHTML = "2010";
        document.getElementById("opRadio4").value = "2010";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "1975") {
        per.innerHTML = perguntas[6].toUpperCase();
        op1.innerHTML = "Benguela";
        document.getElementById("opRadio1").value = "Benguela";
        op2.innerHTML = "Huíla";
        document.getElementById("opRadio2").value = "Huíla";
        op3.innerHTML = "Janeiro";
        document.getElementById("opRadio3").value = "Rio de Janeiro";
        op4.innerHTML = "Huambo";
        document.getElementById("opRadio4").value = "Huambo";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "Huambo") {
        per.innerHTML = perguntas[7].toUpperCase();
        op1.innerHTML = "2017";
        document.getElementById("opRadio1").value = "2017";
        op2.innerHTML = "2002";
        document.getElementById("opRadio2").value = "2002";
        op3.innerHTML = "1975";
        document.getElementById("opRadio3").value = "1975";
        op4.innerHTML = "1969";
        document.getElementById("opRadio4").value = "1969";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "2017") {
        per.innerHTML = perguntas[8].toUpperCase();
        op1.innerHTML = "Reino do Kongo";
        document.getElementById("opRadio1").value = "Reino do Kongo";
        op2.innerHTML = "Reino de Angola";
        document.getElementById("opRadio2").value = "Reino de Angola";
        op3.innerHTML = "Reino do Ndongo";
        document.getElementById("opRadio3").value = "Reino do Ndongo";
        op4.innerHTML = "Reino de Malanje";
        document.getElementById("opRadio4").value = "Reino de Malanje";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == "Reino do Ndongo") {
        per.innerHTML = perguntas[9].toUpperCase();
        op1.innerHTML = "Lobito";
        document.getElementById("opRadio1").value = "Lobito";
        op2.innerHTML = "Luanda";
        document.getElementById("opRadio2").value = "Luanda";
        op3.innerHTML = "Lubango";
        document.getElementById("opRadio3").value = "Lubango";
        op4.innerHTML = "Caxito";
        document.getElementById("opRadio4").value = "Caxito";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    } else if (resp1.value == "Lubango") {
        pontos = pontos + 1;
        document.getElementById("corpo").style.display = 'none';
        document.getElementById("pontosV").style.display = 'block';
        document.getElementById("pontuacaoV").style.display = 'block';
        document.getElementById("pontuacaoV").innerText = "Parabéns Você Venceu! Pontuação: " + pontos;
    }

    else {
        window.alert("Resposta Errada!");
        document.getElementById("corpo").style.display = 'none';
        document.getElementById("pontos").style.display = 'block';
        document.getElementById("pontuacao").innerText = "Você Perdeu! Pontuação: " + pontos;
    }

    //limpar os radios button
    var ele = document.getElementsByName("resposta");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }

}