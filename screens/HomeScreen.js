import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉🎊 Festa Junina – IFC Videira 🎊🎉</Text>

      <ScrollView contentContainerStyle={styles.buttonsContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.button, styles.btn1]}
          onPress={() => navigation.navigate("SobreFesta")}
        >
          <Text style={styles.buttonText}>📖 Sobre a Festa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btn2]}
          onPress={() => navigation.navigate("Cardápio")}
        >
          <Text style={styles.buttonText}>🍽️ Ver Cardápio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btn3]}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.buttonText}>❓ Quiz Junino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btn4]}
          onPress={() => navigation.navigate("Pescaria")}
        >
          <Text style={styles.buttonText}>🎣 Pescaria Junina</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btn5]}
          onPress={() => navigation.navigate("CorreioElegante")}
        >
          <Text style={styles.buttonText}>💌 Correio Elegante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btn6]}
          onPress={() => navigation.navigate("Rota")}
        >
          <Text style={styles.buttonText}>🗺️ Rota até a Festa</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.author}>Bernardo Barcaro Weiss e Lucas Trindade – 3° Info B</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B2E05",
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F5D042",
    textAlign: "center",
    marginBottom: 30,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  buttonsContainer: {
    alignItems: "center",
    paddingBottom: 30,
  },
  button: {
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
  btn1: { backgroundColor: "#E07B39" },
  btn2: { backgroundColor: "#D94F30" },
  btn3: { backgroundColor: "#F29E61" },
  btn4: { backgroundColor: "#FF9E3D" },
  btn5: { backgroundColor: "#F25C54" },
  btn6: { backgroundColor: "#E85D75" },
  buttonText: {
    color: "#FFF8DC",
    fontSize: 20,
    fontWeight: "700",
  },
  divider: {
    marginTop: 35,
    borderBottomColor: "#F5D042",
    borderBottomWidth: 2,
    width: "80%",
    alignSelf: "center",
  },
  author: {
    marginTop: 15,
    color: "#F5D042",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
