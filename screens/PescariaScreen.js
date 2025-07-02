import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = 70;
const TEMPO_PARA_CLICAR = 3000;
const MAX_VIDAS = 3;

export default function PescariaScreen() {
  const [pontuacao, setPontuacao] = useState(0);
  const [vidas, setVidas] = useState(MAX_VIDAS);
  const animacao = useRef(new Animated.ValueXY({ x: 100, y: 100 })).current;
  const timeoutRef = useRef(null);

  useEffect(() => {
    iniciarRodada();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function iniciarRodada() {
    moverItem();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      perderVida();
    }, TEMPO_PARA_CLICAR);
  }

  function moverItem() {
    const x = Math.random() * (width - ITEM_SIZE);
    const y = Math.random() * (height - 250);
    Animated.timing(animacao, {
      toValue: { x, y },
      duration: 600,
      useNativeDriver: true,
    }).start();
  }

  function pescar() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPontuacao((prev) => prev + 1);
    iniciarRodada();
  }

  function cliqueForaPeixe() {
    perderVida();
  }

  function perderVida() {
    setVidas((prev) => {
      if (prev <= 1) {
        resetarJogo();
        Alert.alert("Game Over", "Suas vidas acabaram! O jogo vai reiniciar.");
        return MAX_VIDAS;
      } else {
        return prev - 1;
      }
    });
  }

  function resetarJogo() {
    setPontuacao(0);
    setVidas(MAX_VIDAS);
    iniciarRodada();
  }

  function renderVidas() {
    let coracoes = [];
    for (let i = 1; i <= MAX_VIDAS; i++) {
      coracoes.push(
        <Text key={i} style={styles.coracao}>
          {i <= vidas ? "❤️" : "🖤"}
        </Text>
      );
    }
    return coracoes;
  }

  return (
    <TouchableWithoutFeedback onPress={cliqueForaPeixe}>
      <View style={styles.container}>
        <Text style={styles.title}>🎣 Jogo da Pescaria 🎯</Text>
        <Text style={styles.score}>Pontuação: {pontuacao}</Text>
        <View style={styles.vidasContainer}>{renderVidas()}</View>

        <Animated.View
          style={[styles.item, { transform: animacao.getTranslateTransform() }]}
        >
          <TouchableOpacity onPress={pescar} style={styles.pescavel}>
            <Text style={styles.emoji}>🐟</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B2E05",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: "#F5D042",
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    textAlign: "center",
    color: "#FFF8DC",
    fontSize: 20,
    marginBottom: 5,
  },
  vidasContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  coracao: {
    fontSize: 28,
    marginHorizontal: 5,
  },
  item: {
    position: "absolute",
    width: ITEM_SIZE,
    height: ITEM_SIZE,
  },
  pescavel: {
    backgroundColor: "#E07B39",
    borderRadius: 35,
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 32,
  },
});
