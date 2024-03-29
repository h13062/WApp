import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SeventhPage = ({ route, navigation }) => {
  const [sleepHours, setSleepHours] = useState("");
  const [exerciseFactor, setExerciseFactor] = useState(1.2); // Default value
  const [openConditions, setOpenConditions] = useState(false);
  const exerciseOptions = [
    { label: "0 - 1 hour hours/week", value: 1.2 },
    { label: "2 - 3 hours hours/week", value: 1.375 },
    { label: "3 - 5 hours hours/week", value: 1.55 },
    { label: "More than 5 hours/week", value: 1.725 },
  ];

  useEffect(() => {
    const fetchUserInputs = async () => {
      try {
        const storedSleepHours = await AsyncStorage.getItem("sleepHours");
        const storedExerciseFactor = await AsyncStorage.getItem(
          "exerciseFactor"
        );

        if (storedSleepHours) {
          setSleepHours(storedSleepHours);
        }

        if (storedExerciseFactor) {
          setExerciseFactor(parseFloat(storedExerciseFactor));
        }
      } catch (error) {
        console.error("Error fetching user inputs:", error);
      }
    };

    fetchUserInputs();
  }, []);

  const handleSubmit = async () => {
    try {
      // Save user inputs to AsyncStorage
      await AsyncStorage.setItem("sleepHours", sleepHours);
      await AsyncStorage.setItem("exerciseFactor", exerciseFactor.toString());

      console.log("sleep hours and exerciseFactor saved successfully!");
    } catch (error) {
      console.error("Error saving user inputs:", error);
    }

    navigation.navigate("BodyIndex", {
      ...route.params,
      sleepHours,
      exerciseFactor,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Daily Activity</Text>
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
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:
      "linear-gradient(0deg, rgba(0,32,76,1) 0%, rgba(163,224,247,1) 100%)",
  },
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
    marginBottom: 40,
  },
  inputField: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 24, // Increase font size
  },
  dropdownContainer: {
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 120,
    marginBottom: 20,
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
    fontSize: 20,
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
