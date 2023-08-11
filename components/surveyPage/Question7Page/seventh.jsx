import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SeventhPage = ({ route, navigation }) => {
  const [sleepHours, setSleepHours] = useState("");
  const [exerciseFactor, setExerciseFactor] = useState(null);
  const [openConditions, setOpenConditions] = useState(false);
  const exerciseOptions = [
    { label: "Little/no exercise", value: 1.2 },
    { label: "Light exercise", value: 1.375 },
    { label: "Moderate exercise", value: 1.55 },
    { label: "Heavy exercise", value: 1.725 },
  ];

  const handleSubmit = () => {
    // Perform any necessary actions before navigating
    navigation.navigate("BodyIndex", {
      ...route.params,
      sleepHours,
      exerciseFactor,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep and Exercise</Text>
      <View style={styles.whiteBox}>
        <TextInput
          style={styles.inputField}
          placeholder="Sleep hours/day"
          keyboardType="numeric"
          value={sleepHours}
          onChangeText={setSleepHours}
        />
        <DropDownPicker
          items={exerciseOptions}
          open={openConditions}
          setOpen={setOpenConditions}
          value={exerciseFactor}
          maxHeight={300}
          setValue={setExerciseFactor}
          placeholder="Exercise Factor"
          containerStyle={styles.dropdownContainer}
          textStyle={styles.menuTitle}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.activeButton]}
          onPress={handleSubmit}
          //disabled={!sleepHours || !exerciseFactor}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: "center",
    marginBottom: 45,
    color: "#fff",
  },
  whiteBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 40, // Increase the marginBottom to make the white box longer
  },
  inputField: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 120,
    marginBottom: 20, // Adjust the marginBottom to align with other pages
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeButton: {
    backgroundColor: "#007bff",
    marginLeft: 20,
  },
  menuTitle: {
    fontSize: 20,
  },
});

export default SeventhPage;
