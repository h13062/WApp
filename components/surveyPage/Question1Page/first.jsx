import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";

const FirstPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [ageOption, setAgeOption] = useState("years");
  const [showAgeAlert, setShowAgeAlert] = useState(false);

  const handleSubmit = async () => {
    if (ageOption === "years" && (age === "" || parseInt(age) <= 0)) {
      setShowAgeAlert(true);
      return;
    }

    try {
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({
          username: name,
          gender: gender,
          age: age,
          ageOption: ageOption,
        })
      );
      console.log("User data saved successfully!");
    } catch (error) {
      console.error("Error saving user data:", error);
    }

    navigation.navigate("SecondPage", {
      username: name,
      gender: gender,
      age: age,
      ageOption: ageOption,
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setName(parsedUserData.username);
          setGender(parsedUserData.gender);
          setAge(parsedUserData.age);
          setAgeOption(parsedUserData.ageOption);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <Text style={styles.title}>Let us know about each other</Text>
          <View style={styles.whiteBox}>
            {/* Name */}
            <View style={styles.questionContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
              />
            </View>

            {/* Gender */}
            <View style={styles.questionContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.radioContainer}>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    gender === "male" && styles.radioButtonSelected,
                  ]}
                  onPress={() => setGender("male")}
                >
                  <Text
                    style={[
                      styles.radioLabel,
                      gender === "male" && styles.radioLabelSelected,
                    ]}
                  >
                    Male
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    gender === "female" && styles.radioButtonSelected,
                  ]}
                  onPress={() => setGender("female")}
                >
                  <Text
                    style={[
                      styles.radioLabel,
                      gender === "female" && styles.radioLabelSelected,
                    ]}
                  >
                    Female
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Age */}
            <View style={styles.questionContainer}>
              <Text style={styles.label}>Age (in years)</Text>
              <View style={styles.radioContainer}>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    ageOption === "years" && styles.radioButtonSelected,
                  ]}
                  onPress={() => setAgeOption("years")}
                >
                  <Text
                    style={[
                      styles.radioLabel,
                      ageOption === "years" && styles.radioLabelSelected,
                    ]}
                  >
                    Years
                  </Text>
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder={`Enter your age in ${ageOption}`}
                value={age}
                onChangeText={(text) => {
                  if (ageOption === "months") {
                    const value = parseInt(text);
                    if (!isNaN(value) && value <= 12) {
                      setAge(text);
                    } else {
                      setAge(text);
                    }
                  } else {
                    setAge(text);
                  }
                }}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Next Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[
                styles.button,
                ageOption === "months" &&
                  (parseInt(age) > 12 || parseInt(age) <= 0) &&
                  styles.disabledButton,
                ageOption === "months" &&
                  parseInt(age) > 12 &&
                  styles.errorButton,
              ]}
              disabled={
                ageOption === "months" &&
                (parseInt(age) > 12 || parseInt(age) <= 0)
              }
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>

          {/* Age Alert */}
          {showAgeAlert && (
            <View style={styles.ageAlert}>
              <Text style={styles.ageAlertText}>
                Please enter your age before proceeding.
              </Text>
              <TouchableOpacity
                style={styles.ageAlertButton}
                onPress={() => setShowAgeAlert(false)}
              >
                <Text style={styles.ageAlertButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure the SafeAreaView takes up the entire screen
    backgroundColor:
      "linear-gradient(0deg, rgba(0,32,76,1) 0%, rgba(163,224,247,1) 100%)", // Set your desired background color
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
    textAlign: "center",
    marginBottom: 45,
    color: "#fff", // Add this line to set the text color to white
  },
  whiteBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 45,
    width: "100%",
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 15,
    alignItems: "flex-start",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    width: "100%",
    fontSize: 24,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  radioButtonSelected: {
    backgroundColor: "#007bff",
  },
  radioLabel: {
    fontSize: 24,
    marginLeft: 8,
    marginRight: 8,
    color: "#007bff",
  },
  radioLabelSelected: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 12,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  errorButton: {
    backgroundColor: "#ccc",
  },
  previousButton: {
    backgroundColor: "#007bff",
    marginLeft: 12,
    marginRight: 16,
  },

  ageAlert: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  ageAlertText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  ageAlertButton: {
    backgroundColor: "#007bff",
    borderRadius: 27,
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  ageAlertButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default FirstPage;
