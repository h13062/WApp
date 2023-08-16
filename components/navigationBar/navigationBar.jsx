import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const NavigationBar = ({ navigation, routeParams }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VitaminPage", { ...routeParams })}
      >
        <Text style={styles.buttonText}>Vitamin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MineralPage", { ...routeParams })}
      >
        <Text style={styles.buttonText}>Mineral</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BodyIndex", { ...routeParams })}
      >
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
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NavigationBar;
