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

const SecondPage = ({ route, navigation }) => {
  const { username } = route.params;

  const [measurementUnit, setMeasurementUnit] = useState("metric");
  const [heightMeter, setHeightMeter] = useState("");
  const [heightCentimeter, setHeightCentimeter] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
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
    if (measurementUnit === "imperial") {
      const totalInches =
        parseFloat(heightFeet) * 39.37 + parseFloat(heightInches) / 2.54;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.ceil(totalInches % 12);
      setHeightFeet(feet.toString());
      setHeightInches(inches.toString());
    }
  };
  const convertToMetric = () => {
    if (measurementUnit === "imperial") {
      const totalInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
      const centimeters = (totalInches * 2.54).toFixed(2);

      const meters = Math.floor(centimeters / 100);
      const remainingCentimeters = (centimeters % 100).toFixed(2);

      setHeightMeter(meters.toString());
      setHeightCentimeter(remainingCentimeters.toString());
    }
  };

  useEffect(() => {
    convertToImperial();
  }, [measurementUnit, heightMeter, heightCentimeter]);

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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
                    measurementUnit === "metric" && styles.radioButtonSelected,
                  ]}
                  onPress={() => setMeasurementUnit("metric")}
                >
                  <Text
                    style={[
                      styles.radioLabel,
                      measurementUnit === "metric" && styles.radioLabelSelected,
                    ]}
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
                  onPress={() => setMeasurementUnit("imperial")}
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
                      value={heightFeet}
                      onChangeText={(text) => setHeightFeet(text)}
                      style={[styles.input, styles.smallInput]}
                      keyboardType="numeric"
                    />
                    <Text style={styles.unitText}>ft</Text>
                    <TextInput
                      placeholder="Inches"
                      value={heightInches}
                      onChangeText={(text) => setHeightInches(text)}
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
                  value={weight}
                  onChangeText={(text) => setWeight(text)}
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
                !heightValid || (!weightValid && styles.disabledButton),
              ]}
              disabled={!heightValid || !weightValid}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    fontSize: 20,
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
    fontSize: 16,
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
