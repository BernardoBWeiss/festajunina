import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function RotaFestaScreen() {
    const [localizacao, setLocalizacao] = useState(null);
    const [carregando, setCarregando] = useState(true);

    const coordenadasFesta = {
        latitude: -27.026853723559167,
        longitude: -51.14520763820747,
    };

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permissão negada", "Permita o acesso à localização para visualizar o mapa.");
                setCarregando(false);
                return;
            }

            const local = await Location.getCurrentPositionAsync({});
            setLocalizacao(local.coords);
            setCarregando(false);
        })();
    }, []);

    if (carregando) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#F5D042" />
                <Text style={styles.loadingText}>Carregando mapa...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📍 Minha Rota até a Festa</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: coordenadasFesta.latitude,
                    longitude: coordenadasFesta.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                showsUserLocation={true}
            >
                <Marker
                    coordinate={coordenadasFesta}
                    title="Festa Junina - IFC Videira"
                    description="Aqui acontece a festa!"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4B2E05",
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        color: "#F5D042",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },
    map: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "#4B2E05",
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        color: "#FFF8DC",
        marginTop: 10,
        fontSize: 16,
    },
});
