import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { measure, set } from "react-native-reanimated";
import { SafeAreaView } from "react-native";

const SecondPage = ({ route, navigation }) => {
  const { username } = route.params;

  const [measurementUnit, setMeasurementUnit] = useState("metric");
  const [heightMeter, setHeightMeter] = useState("");
  const [heightCentimeter, setHeightCentimeter] = useState("");
  const [heightFeet, setHeightFeet] = useState(0);
  const [heightInches, setHeightInches] = useState(0);
  const [weight, setWeight] = useState("");
  const [weightTest, setWeightTest] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");

  const [heightValid, setHeightValid] = useState(true);
  const [weightValid, setWeightValid] = useState(true);

  const handleSubmit = () => {
    if (heightValid && weightValid) {
      navigation.navigate("ThirdPage", {
        ...route.params,
        username,
        measurementUnit,
        heightMeter,
        heightCentimeter,
        heightFeet,
        heightInches,
        weight,
        weightUnit,
      });
    }
  };

  const convertToImperial = () => {
    if (heightCentimeter.length == 0 && heightMeter.length == 0) {
      return;
    }
    if (isNaN(heightCentimeter) && isNaN(heightMeter)) {
      return;
    }

    const totalInches =
      parseFloat(heightMeter) * 39.37 + parseFloat(heightCentimeter) / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.ceil(totalInches % 12);
    setHeightFeet(feet.toString());
    setHeightInches(inches.toString());
  };

  const convertToMetric = () => {
    if (heightFeet.length == 0 && heightInches.length == 0) {
      return;
    }
    if (isNaN(heightFeet) && isNaN(heightInches)) {
      return;
    }
    const totalInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
    const centimeters = (totalInches * 2.54).toFixed(2);

    const meters = Math.floor(centimeters / 100);
    const remainingCentimeters = Math.floor(centimeters % 100);

    setHeightMeter(meters.toString());
    setHeightCentimeter(remainingCentimeters.toString());
  };

  const convertToKg = (weight) => {
    if (weight.length == 0) {
      return;
    }
    if (isNaN(weight)) {
      return;
    }
    const kilograms = parseFloat(weight) * 0.45359237;
    // setWeight(kilograms.toFixed(2).toString());
    return kilograms.toFixed(2).toString();
  };

  const convertToLb = () => {
    if (weight.length == 0) {
      return;
    }
    if (isNaN(weight)) {
      return;
    }
    const pound = parseFloat(weight) / 0.45359237;
    setWeight(pound.toFixed(2).toString());
  };

  const onMetricClick = () => {
    setMeasurementUnit("metric");
    convertToMetric();
    if (weightUnit != "kg") {
      convertToKg();
    }
    setWeightUnit("kg");
  };

  const onImperialClick = () => {
    setMeasurementUnit("imperial");
    convertToImperial();
    if (weightUnit != "lbs") {
      convertToLb();
    }
    setWeightUnit("lbs");
  };

  useEffect(() => {
    convertToMetric();
  }, [heightFeet, heightInches]);

  // useEffect(() => {
  //   convertToImperial();
  // }, [measurementUnit, heightMeter, heightCentimeter]);

  useEffect(() => {
    const heightIsValid =
      (measurementUnit === "metric" &&
        heightMeter !== "" &&
        heightCentimeter !== "") ||
      (measurementUnit === "imperial" &&
        heightFeet !== "" &&
        heightInches !== "");
    const weightIsValid = weight !== "";

    setHeightValid(heightIsValid);
    setWeightValid(weightIsValid);
  }, [
    measurementUnit,
    heightMeter,
    heightCentimeter,
    heightFeet,
    heightInches,
    weight,
  ]);
  // console.log("height in meter value: ", heightMeter);
  // console.log("height in centimeter value: ", heightCentimeter);
  // console.log("height in feet value: ", heightFeet);
  // console.log("height in inches value: ", heightInches);
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <Text style={styles.title}>Hi {username}</Text>
              <Text style={styles.subtitle}>
                Can you tell us more about yourself?
              </Text>
              <View style={styles.whiteBox}>
                <View style={styles.questionContainer}>
                  <Text style={styles.label}>Measurement Unit</Text>
                  <View style={styles.radioContainer}>
                    <TouchableOpacity
                      style={[
                        styles.radioButton,
                        measurementUnit === "metric" &&
                          styles.radioButtonSelected,
                      ]}
                      onPress={() => setMeasurementUnit("metric")}
                    >
                      <Text
                        style={[
                          styles.radioLabel,
                          measurementUnit === "metric" &&
                            styles.radioLabelSelected,
                        ]}
                        onPress={onMetricClick}
                      >
                        Metric
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.radioButton,
                        measurementUnit === "imperial" &&
                          styles.radioButtonSelected,
                      ]}
                      onPress={onImperialClick}
                    >
                      <Text
                        style={[
                          styles.radioLabel,
                          measurementUnit === "imperial" &&
                            styles.radioLabelSelected,
                        ]}
                      >
                        Imperial
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.label}>Height</Text>
                  <View style={styles.inputContainer}>
                    {measurementUnit === "metric" ? (
                      <>
                        <TextInput
                          placeholder="Meters"
                          value={heightMeter}
                          onChangeText={(text) => setHeightMeter(text)}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>m</Text>
                        <TextInput
                          placeholder="Centimeters"
                          value={heightCentimeter}
                          onChangeText={(text) => setHeightCentimeter(text)}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>cm</Text>
                      </>
                    ) : (
                      <>
                        <TextInput
                          placeholder="Feet"
                          // value={heightFeet}
                          onChangeText={(text) => {
                            const totalInches = parseInt(text) * 12;
                            const centimeters = (totalInches * 2.54).toFixed(2);

                            setHeightCentimeter(centimeters);
                            // setHeightFeet(text)
                          }}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>ft</Text>
                        <TextInput
                          placeholder="Inches"
                          //value={heightInches}
                          onChangeText={(text) => {
                            const centimeters = (parseInt(text) * 2.54).toFixed(
                              2
                            );
                            setHeightInches(text);
                          }}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>in</Text>
                      </>
                    )}
                  </View>
                  {!heightValid && (
                    <Text style={styles.warningText}>
                      {measurementUnit === "metric"
                        ? "Please enter height in meters and cm."
                        : "Please enter height in feet and inches."}
                    </Text>
                  )}
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.label}>Weight</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder={measurementUnit === "metric" ? "kg" : "lbs"}
                      //value={weight}
                      onChangeText={(text) => {
                        setWeight(text);
                        if (measurementUnit !== "metric") {
                          setWeight(convertToKg(text));
                        }
                      }}
                      style={[styles.input, styles.smallInput]}
                      keyboardType="numeric"
                    />
                    <Text style={styles.unitText}>
                      {measurementUnit === "metric" ? "kg" : "lbs"}
                    </Text>
                  </View>
                  {!weightValid && (
                    <Text style={styles.warningText}>
                      Please enter weight in{" "}
                      {measurementUnit === "metric" ? "kg" : "lbs"}.
                    </Text>
                  )}
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={[styles.button, styles.buttonBoth]}
                >
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={[
                    styles.button,
                    styles.buttonBoth,
                    (!heightValid || !weightValid) && styles.disabledButton,
                  ]}
                  disabled={!heightValid || !weightValid}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  subtitle: {
    fontSize: 27,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  whiteBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 45,
    width: "100%",
    marginBottom: 30,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    fontSize: 24,
  },
  smallInput: {
    flex: 0.5,
  },
  unitText: {
    fontSize: 18,
    marginLeft: 5,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
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
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonBoth: {
    marginLeft: 10,
    marginRight: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  warningText: {
    color: "red",
    marginTop: 5,
    fontSize: 16,
  },
});

export default SecondPage;
