function recarrega () {
    document.location.reload(true);
}
/* variáveis que acessam os elementos no HTML utilizando o DOM */

var mensagem = document.querySelector ("#mensagem");
var botao1 = document.querySelector ("#botao1");
var botao2 = document.querySelector ("#botao2");

/* estrutura function

mensagem que aparece:
var.textContent = "texto";

mensagem que aparece nos botões:
var.innerText = "texto";

função que chama o botão quando clicamos:
var.onclick = função;

botoes que são mostrados e escondidos:
var.style.display = "inline-block"; */

function iniciar () {

    mensagem.textContent = "Você é programadora chefe de realidades virtuais do Planeta Cervejinha-2704. É dia 891 do mês Lilith e sua mãe te liga para te comunicar que a antiga casa do seu avô está a venda.\nSeus tios querem se desfazer da casa velha logo mas sua mãe não quer e não consegue os convencer, por isso te procura. Pede que você vá a Terra ajudá-la.";
    botao1.style.display = "inline-block";
    botao1.innerText = "Vai a Terra";
    botao2.innerText = "Não posso ir, sinto muito.";

    botao1.onclick = IrATerra;
    botao2.onclick = NaoIr;
}

function IrATerra () {

    mensagem.textContent = "Você chega na Terra, vai a casa do seu avô e lá encontra sua mãe. \nEla te explica que queria muito que você viesse pois seu avô sempre disse que havia grandes segredos na casa e só uma pessoa muito corajosa poderia descobrí-los mas isso só seria possível morando nela.\n No entanto, para morar, você precisa reformar a casa.";
    botao1.style.display = "inline-block";
    botao1.innerText = "Reformar a casa";
    botao2.innerText = "Não reformar, desistir de tudo e voltar para seu trabalho";

    botao1.onclick = reformarCasa;
    botao2.onclick = voltarPlaneta;
}
    
function NaoIr () {

    mensagem.textContent = "Você não atendeu ao chamado da sua mãe e não descobriu o que era! Vá a Terra!";
    botao1.style.display = "none";
    botao2.innerText = "Ir a Terra";

    botao2.onclick = IrATerra;
}

function reformarCasa () {
    mensagem.textContent = "Você começa a reformar a casa e um dia, enquanto o piso do 3º andar é retirado, você descobre uma caixa vermelha escondida. Dentro desta caixa, existe um livro que parece ter instruções de criptografia e um mapa que, aparentemente, está criptografado. Você fica curioso mas não sabe se quer perder todo esse tempo. O que você faz?";
    botao1.style.display = "inline-block";
    botao1.innerText = "Tenta descriptografar o mapa e descobrir o que é";
    botao2.innerText = "Joga a caixa fora";

    botao1.onclick = descriptografarCaixa;
    botao2.onclick = jogaCaixa;
}

function voltarPlaneta () {
    mensagem.textContent = "Você decidiu voltar ao seu planeta. De noite, enquanto dormia, seu avô puxou seu pé. Você acordou com o susto e infartou. No segundo plano, te deram uma segunda chance. Você deseja recomeçar a jornada?";
    botao2.style.display = "none";
    botao1.innerText = "Recomeçar";

    botao1.onclick = recarrega;
}

function descriptografarCaixa () {
    mensagem.textContent = "Você ficou horas descriptografando o mapa e descobriu que ele te leva a ovos de dinossauros escondidos no quintal. Você quer ir procurá-los?";
    botao1.style.display = "inline-block";
    botao1.innerText = "Óbvio!";
    botao2.innerText = "Não cara, prefiro colocar minhas séries em dia.";

    botao1.onclick = procurarOvos;
    botao2.onclick = colocarSeriesEmDia;
}
function jogaCaixa () {
    mensagem.textContent = "Você jogou a caixa fora e nunca descobriu o que tinha dentro. Sua vida foi triste e sem graça. Fim.";
    botao2.style.display = "none";
    botao1.innerText = "Me dá outra chance?";

    botao1.onclick = recarrega;
}

function procurarOvos () {
    mensagem.textContent = "Você iniciou sua busca e encontrou os ovos. Enquanto passava pelo choque de segurar ovos de dinossauros, seu chefe começou a te procurar loucamente porque estão precisando que você retorne ao seu planeta. Você está com dois destinos em suas mãos: retornar ao planeta ou convencer seu chefe de ficar mais um pouco e ir pesquisar o que seu avô queria fazer com os ovos. E aí?"
    botao1.style.display = "inline-block";
    botao2.style.display = "inline-block";
    botao1.innerText = "Volto ao Planeta mas levo os ovos e o grande livro do meu avô comigo";
    botao2.innerText = "Convenço meu chefe de ficar mais tempo na terra e vou estudar mais o livro.";

    botao1.onclick = voltarPlaneta1;
    botao2.onclick = ficarTerra;
}

function colocarSeriesEmDia () {
    mensagem.textContent = "Você ficou horas descriptografando um mapa de 1950 baseado em idiomas inventados para não seguir com o plano? Tá brincando, né?";
    botao2.style.display = "none";
    botao1.innerText = "Tô sim, haha";
    botao1.onclick = procurarOvos;
}

function voltarPlaneta1 () {
    mensagem.textContent = "Você voltou ao Cervejinha-2704 mas chegou em meio a um golpe e foi presa pela oposição do governo. Eles te tomaram os ovos e prenderam em uma cápsula e solicitaram que você descriptografem o livro para que saibam como criar os dinossauros. Eles são maus e vão usar isso contra o povo. O que você faz?"
    botao1.style.display = "inline-block";
    botao1.innerText = "Criptografo errado para prejudicar o golpe";
    botao2.innerText = "Criptografo corretamente";

    botao1.onclick = criptografoErrado;
    botao2.onclick = criptografoCerto;
}

function ficarTerra () {
    mensagem.textContent = "Você decidiu ficar na Terra, desenvolver os ovos seguindo os ensinamentos do seu avô e abriu um parque de Dinossauros. Parabéns, você venceu!"
    botao2.style.display = "none";
    botao1.innerText = "Jogar Novamente!"

    botao1.onclick = recarrega;
}

function criptografoErrado () {
    mensagem.textContent = "Você deu as informações erradas, a oposição criou dinossauros monstros em horas e eles comeram toda a tropa. No entanto, eles foram treinados para serem seus amigos e agora você tem um exército de dinossauros. Parabéns, você venceu!"
    botao2.style.display = "none";
    botao1.innerText = "Jogar Novamente!"

    botao1.onclick = recarrega;
}

function criptografoCerto () {
    mensagem.textContent = "Você deu as informações certas, a oposição te achou desleal e te matou!"
    botao2.style.display = "none";
    botao1.innerText = "Jogar Novamente!"

    botao1.onclick = recarrega;
}

iniciar();