import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Calculator = ({ route, navigation }) => {
  const { weight, height, age, sex, activityFactor, pregnancyStatus } =
    route.params;
  const [pregnantLactatingStatus, setPregnantLactatingStatus] = useState(
    "NotPregnantLactating"
  );

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  const calculateBMR = (weight, height, age, sex) => {
    let bmr = 0;
    if (age > 59) {
      if (sex === "male") {
        bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
      } else {
        bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      }
    } else {
      if (sex === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
    }
    return bmr.toFixed(2);
  };

  const calculateCalories = (bmr, activityFactor) => {
    return (bmr * activityFactor).toFixed(2);
  };

  const calculateVitaminARequirement = (age, sex, pregnancyStatus) => {
    const DRI_VITAMIN_A = {
      adults: {
        male: 900,
        female: 700,
      },
      adults19to30: {
        male: 900,
        female: 700,
      },
      infants: 500,
      children1to3: 300,
      pregnant: {
        female: 1300,
      },
      lactating: {
        female: 1300,
      },
    };

    let vitaminARequirement = 0;
    const driKey = getDRIKey(age, pregnancyStatus);
    const driValue = DRI_VITAMIN_A[driKey]
      ? DRI_VITAMIN_A[driKey][sex]
      : undefined;

    if (driValue) {
      vitaminARequirement = driValue;
    }

    return vitaminARequirement;
  };

  const getDRIKey = (age, pregnancyStatus) => {
    if (age >= 0 && age <= 6) {
      return "infants";
    } else if (age >= 7 && age <= 12) {
      return "children1to3";
    } else if (age >= 13 && age <= 18) {
      if (
        pregnancyStatus &&
        (pregnancyStatus.includes("Pregnant - 1st Trimester") ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (less than 20 weeks)"
          ) ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (more than 20 weeks)"
          ) ||
          pregnancyStatus.includes("Pregnant - 3rd Trimester"))
      ) {
        return "pregnant";
      } else {
        return "teens14to18";
      }
    } else if (age >= 19 && age <= 30) {
      if (
        pregnancyStatus &&
        (pregnancyStatus.includes("Pregnant - 1st Trimester") ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (less than 20 weeks)"
          ) ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (more than 20 weeks)"
          ) ||
          pregnancyStatus.includes("Pregnant - 3rd Trimester"))
      ) {
        return "pregnant";
      } else if (
        pregnancyStatus === "Lactating - 0-6 months" ||
        pregnancyStatus === "Lactating - over 7 months"
      ) {
        return "lactating";
      } else {
        return "adults19to30";
      }
    } else if (age >= 31 && age <= 50) {
      if (
        pregnancyStatus &&
        (pregnancyStatus.includes("Pregnant - 1st Trimester") ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (less than 20 weeks)"
          ) ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (more than 20 weeks)"
          ) ||
          pregnancyStatus.includes("Pregnant - 3rd Trimester") ||
          pregnancyStatus === "Lactating - 0-6 months" ||
          pregnancyStatus === "Lactating - over 7 months")
      ) {
        return "pregnant";
      } else {
        return "adults31to50";
      }
    } else if (age >= 51 && age <= 70) {
      if (
        pregnancyStatus &&
        (pregnancyStatus.includes("Pregnant - 1st Trimester") ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (less than 20 weeks)"
          ) ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (more than 20 weeks)"
          ) ||
          pregnancyStatus.includes("Pregnant - 3rd Trimester") ||
          pregnancyStatus === "Lactating - 0-6 months" ||
          pregnancyStatus === "Lactating - over 7 months")
      ) {
        return "pregnant";
      } else {
        return "adults51to70";
      }
    } else if (age > 70) {
      if (
        pregnancyStatus &&
        (pregnancyStatus.includes("Pregnant - 1st Trimester") ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (less than 20 weeks)"
          ) ||
          pregnancyStatus.includes(
            "Pregnant - 2nd Trimester (more than 20 weeks)"
          ) ||
          pregnancyStatus.includes("Pregnant - 3rd Trimester") ||
          pregnancyStatus === "Lactating - 0-6 months" ||
          pregnancyStatus === "Lactating - over 7 months")
      ) {
        return "pregnant";
      } else {
        return "adultsOver70";
      }
    }

    // Default to adults if age not in any specific range
    return "adults";
  };

  const bmi = calculateBMI();
  const bmr = calculateBMR(weight, height, age, sex);
  const requiredCalories = calculateCalories(bmr, activityFactor);
  const vitaminARequirement = calculateVitaminARequirement(
    age,
    sex,
    pregnancyStatus
  );

  const isBMIApplicable = age > 3 && pregnancyStatus !== "Pregnant";
  const bmiResultText = isBMIApplicable
    ? `BMI Result: ${bmi}`
    : "BMI does not apply.";

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>BMI Result:</Text>
      <Text style={styles.result}>{bmiResultText}</Text>
      {/* {age > 59 ? (
        <>
          <Text style={styles.label}>BMR Harris Result:</Text>
          <Text style={styles.result}>{bmr}</Text>
        </>
      ) : (
        <>
          <Text style={styles.label}>BMR Mifflin Result:</Text>
          <Text style={styles.result}>{bmr}</Text>
        </>
      )} */}
      <Text style={styles.label}>Required Calories:</Text>
      <Text style={styles.result}>{requiredCalories}</Text>
      <Text style={styles.label}>
        Vitamin A Requirement (Micrograms RAE2): {vitaminARequirement}
      </Text>
      <Button title="Back to Form" onPress={handleBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  result: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default Calculator;
