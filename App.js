import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SobreFestaScreen from "./screens/SobreFestaScreen";
import CardapioScreen from "./screens/CardapioScreen";
import QuizJunino from "./screens/QuizJunino";
import PescariaScreen from "./screens/PescariaScreen";
import RotaFestaScreen from "./screens/RotaFestaScreen";
import CorreioEleganteScreen from "./screens/CorreioEleganteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#6B4226" },
          headerTintColor: "#F5D042",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SobreFesta"
          component={SobreFestaScreen}
          options={{ title: "Sobre a Festa" }}
        />
        <Stack.Screen name="Cardápio" component={CardapioScreen} />
        <Stack.Screen
          name="Quiz"
          component={QuizJunino}
          options={{ title: "Quiz Junino" }}
        />
        <Stack.Screen
          name="Pescaria"
          component={PescariaScreen}
          options={{ title: "Pescaria Junina" }}
        />
        <Stack.Screen
          name="Rota"
          component={RotaFestaScreen}
          options={{ title: "Rota até a Festa" }}
        />
        <Stack.Screen
          name="CorreioElegante"
          component={CorreioEleganteScreen}
          options={{ title: "Correio Elegante" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
