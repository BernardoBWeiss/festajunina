import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎊 Festa Junina – IFC Videira 🎊</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SobreFesta")}
      >
        <Text style={styles.buttonText}>Sobre a Festa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cardápio")}
      >
        <Text style={styles.buttonText}>Ver Cardápio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttonText}>Quiz Junino</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B4226",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5D042",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#E07B39",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginVertical: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF8DC",
    fontSize: 20,
    fontWeight: "600",
  },
});
