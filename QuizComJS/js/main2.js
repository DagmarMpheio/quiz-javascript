document.getElementById("pontosV").style.display = 'none';
document.getElementById("pontuacaoV").style.display = 'none';
var pontos = 0;//pontuacao
perguntas = ["Quem foi o primeiro presidente de Angola?", "Em que ano Diogo Cão pisou em Angola?", "Qual é a extensao de angola?",
    "Quantos Municípios tem Angola?", "Qual é o monte mais alto de angola", "Em que ano foi fundanda a tpa?", "Onde situa-se o maior monte de angola?",
    "Em que ano foi lançado o primeiro satélite angolano?", "Que reino a rainha Njinga Mbandi governou?", "Qual é o nome actual da antiga cidade Sá da Bandeira?"];//perguntas
respostas = ["António Agostinho Neto", "1482", "1.246.700 Km2", "164", "Morro do Moco", "1975", "Huambo", "2017", "Reino do Ndongo", "Huíla"];
var per = document.getElementById("questao");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
document.getElementById("questao").innerHTML = perguntas[0].toUpperCase();
document.getElementById("pontos").style.display = 'none';

function verficarResposta() {
    per.innerText = perguntas[0].toUpperCase();
    var resp1 = document.formPergunta.resposta;
    if (resp1.value == respostas[0]) {
        per.innerHTML = perguntas[1].toUpperCase();
        op1.innerHTML = "2019";
        document.getElementById("opRadio1").value = "2019";
        op2.innerHTML = "1482";
        document.getElementById("opRadio2").value = "1482";
        op3.innerHTML = "1975";
        document.getElementById("opRadio3").value = "1975";
        op4.innerHTML = "1596";
        document.getElementById("opRadio4").value = "1596";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    if (resp1.value == respostas[1]) {
        per.innerHTML = perguntas[2].toUpperCase();
        op1.innerHTML = "1.200 Km2";
        document.getElementById("opRadio1").value = "1.200 Km2";
        op2.innerHTML = "250 Km";
        document.getElementById("opRadio2").value = "250 Km";
        op3.innerHTML = "1.246.700 Km2";
        document.getElementById("opRadio3").value = "1.246.700 Km2";
        op4.innerHTML = "1.700.246 K2";
        document.getElementById("opRadio4").value = "1596";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == respostas[2]) {
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
    else if (resp1.value == respostas[3]) {
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
    else if (resp1.value == respostas[4]) {
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
    else if (resp1.value == respostas[5]) {
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
    else if (resp1.value == respostas[6]) {
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
    else if (resp1.value == respostas[7]) {
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
    else if (resp1.value == respostas[8]) {
        per.innerHTML = perguntas[9].toUpperCase();
        op1.innerHTML = "Benguela";
        document.getElementById("opRadio1").value = "Benguela";
        op2.innerHTML = "Moxico";
        document.getElementById("opRadio2").value = "Moxico";
        op3.innerHTML = "Huíla";
        document.getElementById("opRadio3").value = "Huíla";
        op4.innerHTML = "Namibe";
        document.getElementById("opRadio4").value = "Namibe";
        window.alert("Resposta Certa!");
        pontos = pontos + 1;
    }
    else if (resp1.value == respostas[9]) {
        pontos = pontos + 1;
        document.getElementById("corpo").style.display = 'none';
        document.getElementById("pontosV").style.display = 'block';
        document.getElementById("pontuacaoV").style.display = 'block';
        document.getElementById("pontuacaoV").innerText = "Parabens Você venceu! Pontuação: " + (pontos / 10) * 100 + " % ";
    }

    else {
        window.alert("Resposta Errada!");
        document.getElementById("corpo").style.display = 'none';
        document.getElementById("pontos").style.display = 'block';
        document.getElementById("pontuacao").innerText = "Você Perdeu! Pontuação: " + (pontos / 10) * 100 + " % ";

    }

    //limpar os radios button
    var ele = document.getElementsByName("resposta");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
    //window.open("http://localhost:8080/QuizComJS/Pergunta1.html","mywindow","status=1, toolbar=0")
}