import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const perguntas = [
  {
    id: 1,
    pergunta: "Qual é a principal dança típica das festas juninas? 🎶",
    opcoes: ["Samba", "Quadrilha", "Forró", "Frevo"],
    respostaCorreta: "Quadrilha",
  },
  {
    id: 2,
    pergunta: "Qual é o principal ingrediente do quentão? 🍹",
    opcoes: ["Milho", "Gengibre", "Cachaça", "Canela"],
    respostaCorreta: "Gengibre",
  },
  {
    id: 3,
    pergunta: "Qual fruta é usada para fazer a maçã do amor? 🍎",
    opcoes: ["Maçã", "Pera", "Abacaxi", "Morango"],
    respostaCorreta: "Maçã",
  },
  {
    id: 4,
    pergunta: "Qual o nome da bebida quente típica da festa junina? 🔥",
    opcoes: ["Café", "Chocolate quente", "Chá", "Quentão"],
    respostaCorreta: "Quentão",
  },
  {
    id: 5,
    pergunta: "Qual dessas comidas NÃO é típica de festa junina? 🍕",
    opcoes: ["Pipoca", "Pizza", "Pamonha", "Canjica"],
    respostaCorreta: "Pizza",
  },
  {
    id: 6,
    pergunta: "Em que mês geralmente ocorre a festa junina? 📅",
    opcoes: ["Junho", "Dezembro", "Março", "Outubro"],
    respostaCorreta: "Junho",
  },
  {
    id: 7,
    pergunta: "Qual é a brincadeira tradicional de acertar alvos? 🎯",
    opcoes: ["Argola", "Bingo", "Tiro ao Alvo", "Pescaria"],
    respostaCorreta: "Tiro ao Alvo",
  },
];

export default function QuizJunino() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);

  function finalizarQuiz(pontuacaoFinal) {
    let mensagem = `Você acertou ${pontuacaoFinal} de ${perguntas.length} perguntas! 🎉\n\n`;
    if (pontuacaoFinal === perguntas.length) {
      mensagem += "Parabéns, você é um expert em festa junina! 🌽🔥";
    } else if (pontuacaoFinal >= perguntas.length / 2) {
      mensagem += "Muito bom! Você conhece bastante sobre a festa junina! 🎊";
    } else {
      mensagem += "Continue aprendendo, a festa junina é muito divertida! 🍬";
    }

    Alert.alert("Fim do Quiz!", mensagem, [
      {
        text: "Jogar novamente 🔄",
        onPress: () => {
          setPerguntaAtual(0);
          setPontuacao(0);
        },
      },
      { text: "Fechar", style: "cancel" },
    ]);
  }

  function responder(opcao) {
    const correta = perguntas[perguntaAtual].respostaCorreta;
    let novaPontuacao = pontuacao;
    if (opcao === correta) {
      novaPontuacao++;
    }

    if (perguntaAtual + 1 < perguntas.length) {
      setPontuacao(novaPontuacao);
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      finalizarQuiz(novaPontuacao);
    }
  }

  const pergunta = perguntas[perguntaAtual];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📝 Quiz Junino</Text>
      <Text style={styles.pergunta}>{pergunta.pergunta}</Text>
      {pergunta.opcoes.map((opcao, index) => {
        const letra = String.fromCharCode(65 + index); // A, B, C, D...
        return (
          <TouchableOpacity
            key={opcao}
            style={styles.botaoOpcao}
            onPress={() => responder(opcao)}
          >
            <Text style={styles.textoOpcao}>{letra}) {opcao}</Text>
          </TouchableOpacity>
        );
      })}
      <Text style={styles.rodape}>
        Pergunta {perguntaAtual + 1} / {perguntas.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B2E05",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F5D042",
    textAlign: "center",
    marginBottom: 30,
    textShadowColor: "#3E2200",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  pergunta: {
    fontSize: 22,
    color: "#FFF8DC",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  botaoOpcao: {
    backgroundColor: "#E07B39",
    padding: 15,
    borderRadius: 14,
    marginVertical: 8,
    shadowColor: "#3E2200",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  textoOpcao: {
    color: "#FFF8DC",
    fontSize: 18,
    textAlign: "center",
  },
  rodape: {
    marginTop: 30,
    color: "#F5D042",
    textAlign: "center",
    fontSize: 16,
  },
});
