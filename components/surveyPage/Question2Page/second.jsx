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

  const [isMetricMeasurement, setIsMetricMeasurement] = useState(true);

  // Measurement in Metric
  const [heightInMeters, setHeightInMeters] = useState(null);
  const [heightInCentimeters, setHeightInCentimeters] = useState(null);
  const [weightInKg, setWeightInKg] = useState(null);

  // Measurement in Imperial
  const [heightInFeet, setHeightInFeet] = useState(null);
  const [heightInInches, setHeightInInches] = useState(null);
  const [weightInLbs, setWeightInLbs] = useState(null);

  const [weightUnit, setWeightUnit] = useState("kg");

  // Output parameter to throw to other component
  const [outputHeight, setOutputHeight] = useState(0);
  const [outputWeight, setOutputWeight] = useState(0);

  const handleSubmit = () => {
    console.log("Submitted parameters:", {
      heightMeter: heightInMeters,
      heightCentimeter: heightInCentimeters,
      weight: weightInKg,
    });
    navigation.navigate("ThirdPage", {
      ...route.params,
      username,
      // measurementUnit,
      heightMeter: heightInMeters,
      heightCentimeter: heightInCentimeters,
      weight: weightInKg,
      // weightUnit,
    });
  };

  const convertHeightToImperial = () => {
    const totalInches = heightInMeters * 39.37 + heightInCentimeters / 2.54;
    console.log("convertHeightToImperial --> totalInches: ", totalInches);
    const feet = Math.floor(totalInches / 12);
    console.log("convertHeightToImperial --> feet: ", feet);
    const inches = Math.ceil(totalInches % 12);
    console.log("convertHeightToImperial --> inches: ", inches);
    setHeightInFeet(feet);
    setHeightInInches(inches);
  };

  const convertHeightToMetric = () => {
    const totalInches = parseInt(heightInFeet * 12) + parseInt(heightInInches);
    console.log("convertHeightToMetric --> totalInches: ", totalInches);
    const centimeters = parseInt(totalInches * 2.54).toFixed(2);
    console.log("convertHeightToMetric --> centimeters: ", centimeters);
    const meters = Math.floor(centimeters / 100);
    console.log("convertHeightToMetric --> meters: ", meters);
    const remainingCentimeters = Math.floor(centimeters % 100);
    console.log(
      "convertHeightToMetric --> remainingCentimeters: ",
      remainingCentimeters
    );
    setHeightInMeters(meters);
    setHeightInCentimeters(remainingCentimeters);
  };

  const convertWeightToKg = () => {
    if (weightInLbs) {
      const kilograms = weightInLbs * 0.45359237;
      setWeightInKg(kilograms.toFixed(2));
    } else {
      setWeightInKg(null);
    }
  };

  const convertWeightToLbs = () => {
    if (weightInKg) {
      const pounds = weightInKg / 0.45359237;
      setWeightInLbs(pounds.toFixed(2));
    } else {
      setWeightInLbs(null);
    }
  };

  const onMetricClick = () => {
    setIsMetricMeasurement(true);
    setWeightUnit("kg");
  };

  const onImperialClick = () => {
    setIsMetricMeasurement(false);
    setWeightUnit("lbs");
  };

  useEffect(() => {
    if (isMetricMeasurement) {
      convertHeightToImperial();
      convertWeightToLbs();
    } else {
      convertHeightToMetric();
      convertWeightToKg();
    }
  }, [
    heightInMeters,
    heightInCentimeters,
    heightInFeet,
    heightInInches,
    weightInKg,
    weightInLbs,
  ]);

  const isSubmitButtonDisable = () => {
    if (heightInMeters && heightInCentimeters && weightInKg) return false;

    return true;
  };

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
                        isMetricMeasurement && styles.radioButtonSelected,
                      ]}
                      onPress={() => setIsMetricMeasurement(true)}
                    >
                      <Text
                        style={[
                          styles.radioLabel,
                          isMetricMeasurement && styles.radioLabelSelected,
                        ]}
                        onPress={onMetricClick}
                      >
                        Metric
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.radioButton,
                        !isMetricMeasurement && styles.radioButtonSelected,
                      ]}
                      onPress={onImperialClick}
                    >
                      <Text
                        style={[
                          styles.radioLabel,
                          !isMetricMeasurement && styles.radioLabelSelected,
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
                    {isMetricMeasurement ? (
                      <>
                        <TextInput
                          placeholder="Meters"
                          value={
                            heightInMeters ? heightInMeters.toString() : ""
                          }
                          onChangeText={(text) => setHeightInMeters(text)}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>m</Text>
                        <TextInput
                          placeholder="Centimeters"
                          value={
                            heightInCentimeters
                              ? heightInCentimeters.toString()
                              : ""
                          }
                          onChangeText={(text) => setHeightInCentimeters(text)}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>cm</Text>
                      </>
                    ) : (
                      <>
                        <TextInput
                          placeholder="Feet"
                          value={heightInFeet ? heightInFeet.toString() : ""}
                          onChangeText={(text) => {
                            setHeightInFeet(text);
                          }}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>ft</Text>
                        <TextInput
                          placeholder="Inches"
                          value={
                            heightInInches ? heightInInches.toString() : ""
                          }
                          onChangeText={(text) => {
                            setHeightInInches(text);
                          }}
                          style={[styles.input, styles.smallInput]}
                          keyboardType="numeric"
                        />
                        <Text style={styles.unitText}>in</Text>
                      </>
                    )}
                  </View>
                </View>

                <View style={styles.questionContainer}>
                  <Text style={styles.label}>Weight</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder={isMetricMeasurement ? "kg" : "lbs"}
                      value={
                        isMetricMeasurement
                          ? weightInKg
                            ? weightInKg.toString()
                            : ""
                          : weightInLbs
                          ? weightInLbs.toString()
                          : ""
                      }
                      onChangeText={(text) => {
                        if (isMetricMeasurement) {
                          setWeightInKg(text);
                        } else {
                          setWeightInLbs(text);
                        }
                      }}
                      style={[styles.input, styles.smallInput]}
                      keyboardType="numeric"
                    />
                    <Text style={styles.unitText}>
                      {isMetricMeasurement ? "kg" : "lbs"}
                    </Text>
                  </View>
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
                    isSubmitButtonDisable() ? styles.disabledButton : null,
                  ]}
                  disabled={isSubmitButtonDisable()}
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
