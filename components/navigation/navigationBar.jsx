import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const NavigationBar = ({ navigation, routeParams }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VitaminPage", { ...routeParams })}
      >
        <Ionicons name="md-nutrition" size={24} color="white" />
        <Text style={styles.buttonText}>Vitamin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MineralPage", { ...routeParams })}
      >
        <Ionicons name="md-bulb" size={24} color="white" />
        <Text style={styles.buttonText}>Mineral</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BodyIndex", { ...routeParams })}
      >
        <Ionicons name="md-person" size={24} color="white" />
        <Text style={styles.buttonText}>Body Index</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "b", // Set background color to white
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default NavigationBar;
