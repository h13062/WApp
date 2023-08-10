import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SixthPage = ({ route, navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [openConditions, setOpenConditions] = useState(false);
  const options = [
    "No Pregnant or Laciating",
    "Pregnant - 1st Trimester",
    "Pregnant - 2nd Trimester",
    "Pregnant - 3rd Trimester",
    "Lactating - 0-6 months",
    "Lactating - over 7 months",
  ];

  const handleSubmit = () => {
    // Perform any necessary actions before navigating
    navigation.navigate("SeventhPage", { ...route.params, selectedOption });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregnancy and Lactating</Text>
      <View>
        <DropDownPicker
          items={options.map((option) => ({ label: option, value: option }))}
          open={openConditions}
          setOpen={setOpenConditions}
          value={selectedOption}
          setValue={setSelectedOption}
          maxHeight={300}
          placeholder="Select an option ..."
          containerStyle={styles.dropdownContainer}
          showTickIcon={true}
          dropDownDirection="BOTTOM"
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
  dropdownContainer: {
    width: "100%",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 250,
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

export default SixthPage;
