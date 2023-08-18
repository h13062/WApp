import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";

const ThirdPage = ({ route, navigation }) => {
  const [dietPreferences, setDietPreferences] = useState([]);
  const [noSpecificReferenceSelected, setNoSpecificReferenceSelected] =
    useState(false);
  const [showDietAlert, setShowDietAlert] = useState(false);

  const options = [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Vegan", value: "vegan" },
    { label: "Dairy Free", value: "dairyFree" },
    { label: "I have no specific reference", value: "noSpecificReference" },
  ];

  const handleOptionSelect = (optionValue) => {
    if (optionValue === "noSpecificReference") {
      setNoSpecificReferenceSelected(!noSpecificReferenceSelected);
      if (noSpecificReferenceSelected) {
        setDietPreferences([]);
      } else {
        setDietPreferences([optionValue]);
      }
    } else {
      if (noSpecificReferenceSelected) {
        setNoSpecificReferenceSelected(false);
        setDietPreferences([optionValue]);
      } else {
        if (dietPreferences.includes(optionValue)) {
          setDietPreferences(
            dietPreferences.filter((value) => value !== optionValue)
          );
        } else {
          setDietPreferences([...dietPreferences, optionValue]);
        }
      }
    }
  };

  const isChecked = (optionValue) => {
    return dietPreferences.includes(optionValue);
  };

  useEffect(() => {
    const fetchDietPreferences = async () => {
      try {
        const storedDietPreferences = await AsyncStorage.getItem(
          "dietPreferences"
        );
        if (storedDietPreferences) {
          setDietPreferences(JSON.parse(storedDietPreferences));
        }
      } catch (error) {
        console.error("Error fetching diet preferences:", error);
      }
    };

    fetchDietPreferences();
  }, []);

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem(
        "dietPreferences",
        JSON.stringify(dietPreferences)
      );
      console.log("Diet preferences saved successfully!");
    } catch (error) {
      console.error("Error saving diet preferences:", error);
    }

    if (!dietPreferences.length) {
      setShowDietAlert(true);
      return;
    }

    navigation.navigate("FourthPage", {
      ...route.params,
      dietPreferences,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Are you following any diet?</Text>
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.option,
                isChecked(option.value) && styles.selectedOption,
                noSpecificReferenceSelected &&
                  option.value !== "noSpecificReference" &&
                  styles.disabledOption,
              ]}
              onPress={() => handleOptionSelect(option.value)}
            >
              {isChecked(option.value) ? (
                <FontAwesome name="check-square-o" size={24} color="#007bff" />
              ) : (
                <FontAwesome name="square-o" size={24} color="#007bff" />
              )}
              <Text
                style={[
                  styles.optionText,
                  isChecked(option.value) && styles.selectedOptionText,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.nextButton}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {showDietAlert && (
        <View style={styles.alertBackdrop}>
          <Text style={styles.alertText}>Please select a diet preference.</Text>
          <TouchableOpacity
            style={styles.alertButton}
            onPress={() => setShowDietAlert(false)}
          >
            <Text style={styles.alertButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      )}
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
    marginBottom: 45,
    color: "#fff",
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: "white", // Add white background color here
    padding: 10,
    borderRadius: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    width: "100%",
  },
  optionText: {
    fontSize: 24,
    marginBottom: 20,
  },
  selectedOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    width: "100%",
  },
  selectedOptionText: {
    color: "#007bff",
    fontSize: 24,
    marginLeft: 10,
  },
  disabledOption: {
    opacity: 0.5,
  },
  buttonContainer: {
    flexDirection: "row", // Align buttons in the same row
    justifyContent: "space-between", // Distribute space between buttons
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  backButton: {
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
  disabledButton: {
    backgroundColor: "#ccc",
  },
  nextButton: {
    marginLeft: 20,
  },
  alertBackdrop: {
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
  alertText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  alertButton: {
    backgroundColor: "#007bff",
    borderRadius: 27,
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  alertButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ThirdPage;
