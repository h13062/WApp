import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import DropDownPicker from "react-native-dropdown-picker";

const SixthPage = ({ route, navigation }) => {
  const [selectedOption, setSelectedOption] = useState(
    "No Pregnant or Lactating"
  );
  const [openConditions, setOpenConditions] = useState(false);
  const options = [
    "No Pregnant or Lactating",
    "Pregnant - 1st Trimester",
    "Pregnant - 2nd Trimester",
    "Pregnant - 3rd Trimester",
    "Lactating - 0-6 months",
    "Lactating - over 7 months",
  ];

  const gender = route.params.gender;

  useEffect(() => {
    const fetchSelectedOption = async () => {
      try {
        const storedSelectedOption = await AsyncStorage.getItem(
          "selectedOption"
        );
        if (storedSelectedOption) {
          setSelectedOption(storedSelectedOption);
        }
      } catch (error) {
        console.error("Error fetching selected option:", error);
      }
    };

    fetchSelectedOption();
  }, []);

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("selectedOption", selectedOption);
      console.log("Selected option saved successfully!");
    } catch (error) {
      console.error("Error saving selected option:", error);
    }

    navigation.navigate("SeventhPage", { ...route.params, selectedOption });
  };

  const isDisabled = gender === "male";

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Pregnancy and Lactating</Text>
        <View style={{ zIndex: 999 }}>
          <DropDownPicker
            items={options.map((option) => ({ label: option, value: option }))}
            open={openConditions}
            setOpen={setOpenConditions}
            value={selectedOption}
            setValue={setSelectedOption}
            maxHeight={300}
            placeholder="Please select Pregnant or Lactating status "
            placeholderStyle={{ fontSize: 24 }}
            containerStyle={styles.dropdownContainer}
            showTickIcon={true}
            dropDownDirection="BOTTOM"
            textStyle={styles.menuTitle}
            labelStyle={{ fontSize: 24 }}
            disabled={isDisabled}
          />
          {isDisabled && (
            <Text style={styles.warningText}>
              This option is only applicable to female users. Please press Next
              to continue.
            </Text>
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
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  dropdownContainer: {
    width: "100%",
    marginTop: 20,
  },
  buttonContainer: {
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
  warningText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});

export default SixthPage;
