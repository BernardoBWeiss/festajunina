import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

export default function SobreFestaScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>Festa Junina</Text>

      <Text style={styles.subtitle}>O que é a Festa Junina?</Text>
      <Text style={styles.paragraph}>
        A Festa Junina é uma celebração tradicional brasileira realizada nos
        meses de junho, julho e, em algumas regiões, até agosto. Ela homenageia
        os santos católicos Santo Antônio, São João e São Pedro, com muita
        música, dança e comidas típicas.
      </Text>

      <Text style={styles.subtitle}>Dança e Música</Text>
      <Text style={styles.paragraph}>
        A quadrilha é a principal dança típica, uma coreografia alegre que
        representa um casamento caipira. Além dela, o forró, baião e outras
        músicas nordestinas animam as festas.
      </Text>

      <Text style={styles.subtitle}>Comidas Típicas</Text>
      <Text style={styles.paragraph}>
        Entre os pratos mais populares estão a canjica, pamonha, milho cozido,
        pé-de-moleque, quentão e a maçã do amor. São sabores que trazem a
        essência do interior do Brasil para as celebrações.
      </Text>

      <Text style={styles.subtitle}>Tradições e Brincadeiras</Text>
      <Text style={styles.paragraph}>
        As festas contam com brincadeiras como pescaria, corrida do saco, boca
        do palhaço, além das fogueiras e decoração com bandeirinhas coloridas.
      </Text>

      <Text style={styles.subtitle}>Importância Cultural</Text>
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
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F5D042",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#F5D042",
    marginBottom: 8,
    marginTop: 16,
  },
  paragraph: {
    fontSize: 18,
    color: "#FFF8DC",
    lineHeight: 28,
    marginBottom: 12,
  },
});
