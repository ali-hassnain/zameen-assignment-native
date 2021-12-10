import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CardDetails from "./screens/CardDetails";
import ModalScreen from "./screens/Modal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CardDetails"
            component={CardDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    marginHorizontal: 20,
  },
  card: {
    backgroundColor: "#F0F0F2",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  cardDetails: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardDetailsTile: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6D91CB",
    textDecorationLine: "underline",
  },
});
