import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  useEffect(() => {
    const fetchHealthConditions = async () => {
      try {
        const storedSelectedConditions = await AsyncStorage.getItem(
          "selectedConditions"
        );
        const storedOtherCondition = await AsyncStorage.getItem(
          "otherCondition"
        );

        if (storedSelectedConditions) {
          setSelectedConditions(JSON.parse(storedSelectedConditions));
        }
        if (storedOtherCondition) {
          setOtherCondition(storedOtherCondition);
        }
      } catch (error) {
        console.error("Error fetching health conditions:", error);
      }
    };

    fetchHealthConditions();
  }, []);

  const handleSubmit = async () => {
    // Store selectedConditions in AsyncStorage
    try {
      await AsyncStorage.setItem(
        "selectedConditions",
        JSON.stringify(selectedConditions)
      );
      console.log("Selected conditions saved successfully!");

      if (showOtherTextBox) {
        await AsyncStorage.setItem(
          "otherCondition",
          JSON.stringify(otherCondition)
        );
        console.log("Other condition saved successfully!");
      }
    } catch (error) {
      console.error("Error saving health conditions:", error);
    }

    navigation.navigate("SixthPage", {
      ...route.params,
      selectedConditions,
      otherCondition: showOtherTextBox ? otherCondition : undefined,
    });
  };

  const dropdownMarginBottom = openConditions ? 320 : 20;

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={() => setOpenConditions(false)}>
        <View style={styles.container}>
          <Text style={styles.title}>Health Conditions</Text>
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
