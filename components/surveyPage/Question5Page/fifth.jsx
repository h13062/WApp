import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const FifthPage = ({ route, navigation }) => {
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [openConditions, setOpenConditions] = useState(false);
  const [otherCondition, setOtherCondition] = useState("");
  const [showOtherTextBox, setShowOtherTextBox] = useState(false);

  const conditionOptions = [
    "No precondition",
    "High blood pressure",
    "Cancer",
    "Heart Related Conditions",
    "Diabetes",
    "Back Pain",
    "Hair Loss",
    "Others",
  ];

  useEffect(() => {
    setSelectedConditions(
      selectedConditions.includes("No precondition") ? [] : selectedConditions
    );
    setShowOtherTextBox(selectedConditions.includes("Others"));
  }, [selectedConditions]);

  const handleSubmit = () => {
    navigation.navigate("SixthPage", {
      ...route.params,
      selectedConditions,
      otherCondition: showOtherTextBox ? otherCondition : undefined,
    });
  };

  const dropdownMarginBottom = openConditions ? 320 : 20;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Health Conditions</Text>
        <View style={{ zIndex: 999 }}>
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
            placeholder="No precondition"
            placeholderStyle={{ fontSize: 24 }}
            containerStyle={[
              styles.dropdownContainer,
              { marginBottom: dropdownMarginBottom },
            ]}
            showTickIcon={true}
            dropDownDirection="BOTTOM"
            multiple={true}
            mode="BADGE"
            textStyle={styles.menuTitle}
            labelStyle={{ fontSize: 24 }}
          />
          {showOtherTextBox && (
            <TextInput
              style={styles.otherTextBox}
              placeholder="Enter other condition..."
              value={otherCondition}
              onChangeText={setOtherCondition}
            />
          )}
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
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  dropdownContainer: {
    width: "100%",
    marginTop: 20,
  },
  otherTextBox: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
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

export default FifthPage;
