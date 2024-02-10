const perguntasMocambiquee = [
  {
    pergunta: "Qual é a capital de Moçambique?",
    respostas: [
      "Maputo",
      "Beira",
      "Nampula"
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano Moçambique obteve a independência de Portugal",
    respostas: [
      "1975",
      "1980",
      "1990"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a língua oficial de Moçambique?",
    respostas: [
      "Inglês",
      "Português",
      "Francês"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal religião em Moçambique?",
    respostas: [
      "Cristianismo",
      "Islamismo",
      "Hinduismo"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o herói nacional de Moçambique, conhecido como 'O Grande Unificador'?",
    respostas: [
      "Samora Machel",
      "Nelson Mandela",
      "Robert Mugabe"
    ],
    correta: 0
  },
  {
    pergunta: "Moçambique possui acesso a qual oceano?",
    respostas: [
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Pacífico"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o prato típico mais popular em Moçambique?",
    respostas: [
      "Feijoada",
      "Bacalhao",
      "Matapa"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o Festival Internacional de Cultura de Moçambique?",
    respostas: [
      "Competição desportiva",
      "Evento musical",
      "Celebration anual da cultura"
    ],
    correta: 2
  },
  {
    pergunta: "Quantas províncias Moçambique possui?",
    respostas: [
      "7",
      "10",
      "15"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a moeda oficial de Moçambique?",
    respostas: [
      "Rand",
      "Metical",
      "Dollar"
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}