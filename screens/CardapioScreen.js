import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const cardapio = [
  {
    id: "1",
    nome: "Pipoca",
    preco: 5,
    descricao: "Leve e crocante, ideal para beliscar",
    ingredientes: "Milho, óleo, sal",
    img: require("../assets/comidas/pipoca.png"),
  },
  {
    id: "2",
    nome: "Canjica",
    preco: 7,
    descricao: "Doce tradicional feito com milho branco",
    ingredientes: "Milho branco, leite, açúcar, canela",
    img: require("../assets/comidas/canjica.png"),
  },
  {
    id: "3",
    nome: "Maçã do Amor",
    preco: 4,
    descricao: "Maçã caramelizada com toque doce e ácido",
    ingredientes: "Maçã, açúcar, corante vermelho",
    img: require("../assets/comidas/maca.png"),
  },
  {
    id: "4",
    nome: "Pamonha",
    preco: 6,
    descricao: "Delícia de milho verde, cremosa e macia",
    ingredientes: "Milho verde, açúcar, leite",
    img: require("../assets/comidas/pamonha.png"),
  },
  {
    id: "5",
    nome: "Quentão",
    preco: 8,
    descricao: "Bebida quente sem álcool, ideal para a festa",
    ingredientes: "Gengibre, açúcar, cravo, canela, água",
    img: require("../assets/comidas/quentao.png"),
  },
  {
    id: "6",
    nome: "Pé-de-moleque",
    preco: 3,
    descricao: "Doce crocante feito com amendoim e rapadura",
    ingredientes: "Amendoim, rapadura",
    img: require("../assets/comidas/pedemoleque.png"),
  },
  {
    id: "7",
    nome: "Bolo de Milho",
    preco: 6,
    descricao: "Bolo macio e saboroso, clássico junino",
    ingredientes: "Milho, açúcar, farinha, ovos, leite",
    img: require("../assets/comidas/bolomilho.png"),
  },
  {
    id: "8",
    nome: "Arroz Doce",
    preco: 5,
    descricao: "Doce cremoso com canela para adoçar o dia",
    ingredientes: "Arroz, leite, açúcar, canela",
    img: require("../assets/comidas/arrozdoce.png"),
  },
  {
    id: "9",
    nome: "Milho Cozido",
    preco: 4,
    descricao: "Milho fresquinho, cozido na hora",
    ingredientes: "Milho verde, sal",
    img: require("../assets/comidas/milhocozido.png"),
  },
];

export default function CardapioScreen() {
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  function mostrarIngredientes(ingredientes) {
    Alert.alert("Ingredientes", ingredientes);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Cardápio Junino</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.img} style={styles.image} />
            <View style={styles.textContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.text}>
                  {item.nome} – R$ {item.preco}
                </Text>
                <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
                  <Text
                    style={[
                      styles.favorite,
                      favoritos.includes(item.id) && styles.favoritoAtivo,
                    ]}
                  >
                    {favoritos.includes(item.id) ? "★" : "☆"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>{item.descricao}</Text>
              <TouchableOpacity
                onPress={() => mostrarIngredientes(item.ingredientes)}
                style={styles.btnIngredientes}
              >
                <Text style={styles.btnText}>Ver ingredientes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B2E05",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#F5D042",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 25,
    backgroundColor: "#E07B39",
    padding: 15,
    borderRadius: 12,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#FFF8DC",
    fontWeight: "600",
  },
  favorite: {
    fontSize: 24,
    color: "#FFF8DC",
  },
  favoritoAtivo: {
    color: "#FFD700",
  },
  description: {
    fontSize: 14,
    color: "#FFF8DC",
    marginTop: 4,
  },
  btnIngredientes: {
    marginTop: 8,
    backgroundColor: "#F5D042",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  btnText: {
    color: "#4B2E05",
    fontWeight: "bold",
  },
});
