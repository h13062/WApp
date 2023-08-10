import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BodyIndex = ({ route, navigation }) => {
  const { userInfo } = route.params;

  const handleSubmit = () => {
    console.log("Collected Information:", userInfo);
    // Perform any other actions you need here

    // Navigate to the next page if needed
    navigation.navigate("NinthPage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collected Information</Text>
      {/* Display collected information
      <Text style={styles.infoText}>Age: {userInfo.age}</Text>
      <Text style={styles.infoText}>Name: {userInfo.name}</Text>
      <Text style={styles.infoText}>Gender: {userInfo.gender}</Text>
      <Text style={styles.infoText}>Height: {userInfo.height}</Text>
      <Text style={styles.infoText}>Weight: {userInfo.weight}</Text>
      <Text style={styles.infoText}>Diet: {userInfo.diet}</Text>
      <Text style={styles.infoText}>
        Vitamin/Mineral Deficiencies:{" "}
        {userInfo.vitaminMineralDeficiencies.join(", ")}
      </Text> */}
      <Text style={styles.infoText}>
        Health Conditions: {userInfo.healthConditions.join(", ")}
      </Text>
      <Text style={styles.infoText}>
        Pregnancy/Lactating: {userInfo.pregnancyLactating}
      </Text>
      <Text style={styles.infoText}>Sleep Hours: {userInfo.sleepHours}</Text>
      <Text style={styles.infoText}>
        Exercise Factor: {userInfo.exerciseFactor}
      </Text>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor:
      "linear-gradient(0deg, rgba(0,32,76,1) 0%, rgba(163,224,247,1) 100%)",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 45,
    color: "#fff",
  },
  infoText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BodyIndex;
