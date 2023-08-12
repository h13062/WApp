import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const BodyIndex = ({ route, navigation }) => {
  const {
    age,
    ageOption,
    dietPreferences,
    exerciseFactor,
    gender,
    heightCentimeter,
    heightFeet,
    heightInches,
    heightMeter,
    measurementUnit,
    selectedConditions,
    selectedMinerals,
    selectedOption,
    selectedVitamins,
    sleepHours,
    username,
    weight,
    weightUnit,
  } = route.params;

  const collectedInformation = {
    age,
    ageOption,
    dietPreferences,
    exerciseFactor,
    gender,
    heightCentimeter,
    heightFeet,
    heightInches,
    heightMeter,
    measurementUnit,
    selectedConditions,
    selectedMinerals,
    selectedOption,
    selectedVitamins,
    sleepHours,
    username,
    weight,
    weightUnit,
  };
  const getWaterIntakeSuggestion = (age, ageOption, gender) => {
    const waterRecommendations = {
      years: {
        '1–3 y': { male: 1.3, female: 1.3 },
        '4–8 y': { male: 1.7, female: 1.7 },
        '9–13 y': { male: 2.4, female: 2.1 },
        '14–18 y': { male: 3.3, female: 2.3 },
        '19–30 y': { male: 3.7, female: 2.7 },
        '31–50 y': { male: 3.7, female: 2.7 },
        '51–70 y': { male: 3.7, female: 2.7 },
        '> 70 y': { male: 3.7, female: 2.7 },
      },
      months: {
        '0–6 mo': { male: 0.7, female: 0.7 },
        '6–12 mo': { male: 0.8, female: 0.8 },
      },
    };

    let selectedAgeRange = '';
    if (ageOption === 'years') {
      if (age >= 1 && age <= 3) {
        selectedAgeRange = '1–3 y';
      } else if (age >= 4 && age <= 8) {
        selectedAgeRange = '4–8 y';
      } else if (age >= 9 && age <= 13) {
        selectedAgeRange = '9–13 y';
      } else if (age >= 14 && age <= 18) {
        selectedAgeRange = '14–18 y';
      } else if (age >= 19 && age <= 30) {
        selectedAgeRange = '19–30 y';
      } else if (age >= 31 && age <= 50) {
        selectedAgeRange = '31–50 y';
      } else if (age >= 51 && age <= 70) {
        selectedAgeRange = '51–70 y';
      } else if (age >= 71) {
        selectedAgeRange = '> 70 y';
      }
    } else {
      if (age >= 0 && age < 6) {
        selectedAgeRange = '0–6 mo';
      } else {
        selectedAgeRange = '6–12 mo';
      }
    }

    const recommendation =
      waterRecommendations[ageOption][selectedAgeRange]?.[gender.toLowerCase()];

    return recommendation ? recommendation.toFixed(1) : 'N/A';
  };

  const calculateBMI = (weight, heightMeter, heightCentimeter) => {
    const combinedHeight = (heightMeter + heightCentimeter) / 100;

    const bmi = weight / (combinedHeight * combinedHeight);
    return bmi.toFixed(2);
  };

  const calculateBMR = (weight, heightMeter, heightCentimeter, age, gender) => {
    const combinedHeight = parseInt(
      heightMeter /**100 as normal logic but javascript mess up so dont as me why */ +
        heightCentimeter
    );
    let bmr = 0;

    if (gender === 'male') {
      bmr = 66.5 + 13.75 * weight + 5.003 * combinedHeight - 6.775 * age;
    } else if (gender === 'female') {
      bmr = 655.1 + 9.563 * weight + 1.85 * combinedHeight - 4.676 * age;
    }
    console.log('combinedHeight --->', combinedHeight);
    console.log('Age: ', age);
    console.log('BMR: ', bmr);
    console.log('Height Meter: ', heightMeter);
    return bmr.toFixed(2);
  };

  const calculateCalories = (bmr, activityFactor) => {
    return (bmr * activityFactor).toFixed(2);
  };

  const bmr = calculateBMR(weight, heightMeter, heightCentimeter, age, gender);
  const calories = calculateCalories(bmr, exerciseFactor);
  const bmi = calculateBMI(weight, heightMeter, heightCentimeter);
  console.log(exerciseFactor);
  const handleSubmit = () => {
    console.log('Collected Information:', collectedInformation);
    // Perform any other actions you need here

    // Navigate to the next page if needed
    // navigation.navigate("NinthPage");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Collected Information</Text>
        <View style={styles.whiteBox}>
          <Text style={styles.infoText}>BMI: {bmi}</Text>
          <Text style={styles.infoText}>Calories: {calories}</Text>
          <Text style={styles.infoText}>
            Calories to lose weight: {calories - 500}
          </Text>
          <Text style={styles.infoText}>
            Calories to gain weight: {calories + 500}
          </Text>
          {age && ageOption && (
            <Text style={styles.infoText}>
              Recommended Daily Water Intake:{' '}
              {getWaterIntakeSuggestion(age, ageOption, gender)} L
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure the SafeAreaView takes up the entire screen
    backgroundColor: '#fff', // Set your desired background color
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:
      'linear-gradient(0deg, rgba(0,32,76,1) 0%, rgba(163,224,247,1) 100%)',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 45,
    color: '#fff',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 24,
    // color: '#fff',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#007bff',
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  whiteBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 40, // Increase the marginBottom to make the white box longer
  },
});

export default BodyIndex;
