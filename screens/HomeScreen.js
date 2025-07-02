import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉🎊 Festa Junina – IFC Videira 🎊🎉</Text>

      <ScrollView contentContainerStyle={styles.buttonsContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SobreFesta")}
        >
          <Text style={styles.buttonText}>📖 Sobre a Festa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cardápio")}
        >
          <Text style={styles.buttonText}>🍽️ Ver Cardápio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.buttonText}>❓ Quiz Junino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pescaria")}
        >
          <Text style={styles.buttonText}>🎣 Pescaria Junina</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CorreioElegante")}
        >
          <Text style={styles.buttonText}>💌 Correio Elegante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Rota")}
        >
          <Text style={styles.buttonText}>🗺️ Rota até a Festa</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B4226",
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#F5D042",
    marginBottom: 30,
    textAlign: "center",
    textShadowColor: "#3E2200",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  buttonsContainer: {
    alignItems: "center",
    paddingBottom: 30,
    gap: 15,
  },
  button: {
    backgroundColor: "#E07B39",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginVertical: 8,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: "#FFF8DC",
    fontSize: 22,
    fontWeight: "700",
  },
});
