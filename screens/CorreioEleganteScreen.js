import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CorreioEleganteScreen() {
    const [mensagem, setMensagem] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [mensagensRecebidas, setMensagensRecebidas] = useState([]);

    useEffect(() => {
        carregarMensagens();
    }, []);

    async function carregarMensagens() {
        try {
            const json = await AsyncStorage.getItem("@mensagens");
            if (json !== null) {
                setMensagensRecebidas(JSON.parse(json));
            }
        } catch (error) {
            console.log("Erro ao carregar mensagens:", error);
        }
    }

    async function salvarMensagens(novasMensagens) {
        try {
            await AsyncStorage.setItem("@mensagens", JSON.stringify(novasMensagens));
        } catch (error) {
            console.log("Erro ao salvar mensagens:", error);
        }
    }

    function enviarMensagem() {
        if (mensagem.trim() === "" || destinatario.trim() === "") {
            Alert.alert("Erro", "Por favor, preencha mensagem e destinatário.");
            return;
        }

        const novaMensagem = {
            id: Date.now().toString(),
            destinatario: destinatario.trim(),
            texto: mensagem.trim(),
            timestamp: new Date().toLocaleString(),
        };

        const novasMensagens = [novaMensagem, ...mensagensRecebidas];
        setMensagensRecebidas(novasMensagens);
        salvarMensagens(novasMensagens);
        setMensagem("");
        setDestinatario("");
        Alert.alert("Sucesso", "Mensagem enviada!");
    }

    function renderItem({ item }) {
        return (
            <View style={styles.mensagemContainer}>
                <Text style={styles.destinatario}>Para: {item.destinatario}</Text>
                <Text style={styles.textoMensagem}>{item.texto}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.titulo}>💌 Correio Elegante</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do destinatário"
                value={destinatario}
                onChangeText={setDestinatario}
                maxLength={30}
            />

            <TextInput
                style={[styles.input, styles.inputMensagem]}
                placeholder="Escreva sua mensagem secreta ✨🎉"
                value={mensagem}
                onChangeText={setMensagem}
                multiline
                maxLength={250}
            />

            <TouchableOpacity style={styles.botaoEnviar} onPress={enviarMensagem}>
                <Text style={styles.textoBotao}>Enviar 💌</Text>
            </TouchableOpacity>

            <Text style={styles.subtitulo}>Mensagens Recebidas:</Text>

            {mensagensRecebidas.length === 0 ? (
                <Text style={styles.semMensagens}>Nenhuma mensagem recebida ainda.</Text>
            ) : (
                <FlatList
                    data={mensagensRecebidas}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 40 }}
                />
            )}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4B2E05",
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#F5D042",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#E07B39",
        color: "#FFF8DC",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    inputMensagem: {
        height: 100,
        textAlignVertical: "top",
    },
    botaoEnviar: {
        backgroundColor: "#F5D042",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 25,
    },
    textoBotao: {
        color: "#4B2E05",
        fontWeight: "bold",
        fontSize: 18,
    },
    subtitulo: {
        fontSize: 22,
        fontWeight: "600",
        color: "#F5D042",
        marginBottom: 12,
    },
    semMensagens: {
        color: "#FFF8DC",
        fontStyle: "italic",
        textAlign: "center",
    },
    mensagemContainer: {
        backgroundColor: "#E07B39",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
    },
    destinatario: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFF8DC",
        marginBottom: 6,
    },
    textoMensagem: {
        fontSize: 16,
        color: "#FFF8DC",
        marginBottom: 6,
    },
    timestamp: {
        fontSize: 12,
        color: "#F5D042",
        textAlign: "right",
    },
});
