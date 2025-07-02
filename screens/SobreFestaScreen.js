import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

export default function SobreFestaScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>🎉 Festa Junina 🎉</Text>

      <Text style={styles.subtitle}>🌽 O que é a Festa Junina?</Text>
      <Text style={styles.paragraph}>
        A Festa Junina é uma celebração tradicional brasileira realizada nos
        meses de junho, julho e, em algumas regiões, até agosto. Ela homenageia
        os santos católicos Santo Antônio, São João e São Pedro, com muita
        música, dança e comidas típicas.
      </Text>

      <Text style={styles.subtitle}>💃 Dança e Música</Text>
      <Text style={styles.paragraph}>
        A quadrilha é a principal dança típica, uma coreografia alegre que
        representa um casamento caipira. Além dela, o forró, baião e outras
        músicas nordestinas animam as festas.
      </Text>

      <Text style={styles.subtitle}>🍽️ Comidas Típicas</Text>
      <Text style={styles.paragraph}>
        Entre os pratos mais populares estão a canjica, pamonha, milho cozido,
        pé-de-moleque, quentão e a maçã do amor. São sabores que trazem a
        essência do interior do Brasil para as celebrações.
      </Text>

      <Text style={styles.subtitle}>🎲 Tradições e Brincadeiras</Text>
      <Text style={styles.paragraph}>
        As festas contam com brincadeiras como pescaria, corrida do saco, boca
        do palhaço, além das fogueiras e decoração com bandeirinhas coloridas.
      </Text>

      <Text style={styles.subtitle}>❤️ Importância Cultural</Text>
      <Text style={styles.paragraph}>
        A Festa Junina valoriza as raízes rurais e a cultura popular brasileira,
        promovendo integração, alegria e a preservação das tradições que aquecem
        o coração do país.
      </Text>
    </ScrollView>
  );
}

const largura = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B2E05",
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#F5D042",
    textAlign: "center",
    marginBottom: 25,
    textShadowColor: "#3E2200",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "600",
    color: "#F5D042",
    marginBottom: 10,
    marginTop: 20,
    textShadowColor: "#3E2200",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
  },
  paragraph: {
    fontSize: 18,
    color: "#FFF8DC",
    lineHeight: 30,
    marginBottom: 16,
    textAlign: "justify",
  },
});
