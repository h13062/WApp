import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const ThirdPage = ({ route, navigation }) => {
  const [dietPreferences, setDietPreferences] = useState([]);
  const [noSpecificReferenceSelected, setNoSpecificReferenceSelected] =
    useState(false);

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

  const handleSubmit = () => {
    navigation.navigate("FourthPage", {
      ...route.params,
      dietPreferences,
    });
  };

  console.log("Selected Options:", dietPreferences);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Are you following any diet?</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              dietPreferences.includes(option.value) && styles.selectedOption,
              noSpecificReferenceSelected &&
                option.value !== "noSpecificReference" &&
                styles.disabledOption,
            ]}
            onPress={() => handleOptionSelect(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                dietPreferences.includes(option.value) &&
                  styles.selectedOptionText,
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
          <TouchableOpacity
            style={[
              styles.button,
              (!dietPreferences.length ||
                (noSpecificReferenceSelected &&
                  dietPreferences[0] !== "noSpecificReference")) &&
                styles.disabledButton,
            ]}
            onPress={handleSubmit}
            disabled={
              !dietPreferences.length ||
              (noSpecificReferenceSelected &&
                dietPreferences[0] !== "noSpecificReference")
            }
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 24, // Change the option text size here
    marginBottom: 20,
  },
  selectedOption: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  selectedOptionText: {
    color: "white", // Change the text color of selected options
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
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  nextButton: {
    marginLeft: 20,
  },
});

export default ThirdPage;
