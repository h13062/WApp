import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const FifthPage = ({ route, navigation }) => {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [openConditions, setOpenConditions] = useState(false);

  const conditionOptions = [
    "High blood pressure",
    "Cancer",
    "Heart Related Conditions",
    "Diabetes",
    "Back Pain",
    "Hair Loss",
  ];

  const handleSubmit = () => {
    navigation.navigate("SixthPage", {
      ...route.params,
      selectedConditions,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Are these health conditions apply to you?
      </Text>
      <View>
        <DropDownPicker
          items={conditionOptions.map((condition) => ({
            label: condition,
            value: condition,
          }))}
          open={openConditions}
          setOpen={setOpenConditions}
          value={selectedConditions}
          setValue={setSelectedConditions}
          maxHeight={300}
          placeholder="Select Conditions..."
          containerStyle={styles.dropdownContainer}
          showTickIcon={true}
          dropDownDirection="BOTTOM"
          multiple={true}
          mode="BADGE"
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
    marginBottom: 45,
    color: "#fff",
    textAlign: "center",
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

export default FifthPage;