import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import NavigationBar from '../../actualComponents/navigationBar';
import { getVitaminSuggestion } from '../vitaminPage/vitaminSuggestion/vitaminSuggestion';
import { getMineralSuggestion } from '../mineralPage/mineralSuggestion/mineralSuggestion';
import { useNavigation } from '@react-navigation/native';
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

  const pregnancyGroups = [
    'Pregnant - 1st Trimester',
    'Pregnant - 2nd Trimester',
    'Pregnant - 3rd Trimester',
  ];

  const lactationGroups = [
    'Lactating - 0-6 months',
    'Lactating - over 7 months',
  ];
  const getWaterIntakeSuggestion = (age, ageOption, gender, selectedOption) => {
    console.log('age:', age);
    console.log('ageOption:', ageOption);
    console.log('gender:', gender);
    console.log('selectedOption:', selectedOption);
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
      pregnancy: {
        '14–18 y': { female: 3.0 },
        '19–30 y': { female: 3.0 },
        '31–50 y': { female: 3.0 },
      },
      lactation: {
        '14–18 y': { female: 3.8 },
        '19–30 y': { female: 3.8 },
        '31–50 y': { female: 3.8 },
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

    const recommendationGroup = pregnancyGroups.includes(selectedOption)
      ? 'pregnancy'
      : lactationGroups.includes(selectedOption)
      ? 'lactation'
      : ageOption;

    const recommendation =
      waterRecommendations[recommendationGroup][selectedAgeRange]?.[
        gender.toLowerCase()
      ];

    return recommendation ? recommendation.toFixed(1) : 'N/A';
  };

  const calculateBMI = (weight, heightMeter, heightCentimeter) => {
    if (selectedOption.includes('Pregnant')) {
      return 'BMI does not apply during Pregnancy';
    } else if (ageOption === 'months' || (ageOption === 'years' && age < 3)) {
      return 'BMI does not apply for childrens less than 3 years old';
    } else {
      const combinedHeight = (heightMeter + heightCentimeter) / 100;

      const bmi = weight / (combinedHeight * combinedHeight);
      return bmi.toFixed(2);
    }
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
    console.log('Height feet: ', heightFeet);
    console.log('Height inches: ', heightInches);

    return bmr.toFixed(2);
  };

  const calculateCalories = (bmr, activityFactor) => {
    return (bmr * activityFactor).toFixed(2);
  };

  const bmr = calculateBMR(weight, heightMeter, heightCentimeter, age, gender);
  const calories = calculateCalories(bmr, exerciseFactor);
  const bmi = calculateBMI(weight, heightMeter, heightCentimeter);
  const water = getWaterIntakeSuggestion(
    age,
    ageOption,
    gender,
    selectedOption
  );
  const vitaminNames = [
    'A',
    'C',
    'D',
    'E',
    'K',
    'B1',
    'B2',
    'B3',
    'B6',
    'B9',
    'B12',
    'Pantothenic Acid',
    'Biotin',
    'Choline',
  ];
  const vitaminASuggestion = getVitaminSuggestion(
    'A', // Specify "A" for Vitamin A
    age,
    ageOption,
    gender,
    selectedOption
  );

  const vitaminCSuggestion = getVitaminSuggestion(
    'C', // Specify "C" for Vitamin C
    age,
    ageOption,
    gender,
    selectedOption
  );
  const calciumSuggestion = getMineralSuggestion(
    'Ca', // Specify "Ca" for Calcium
    age,
    ageOption,
    gender,
    selectedOption
  );
  console.log(age);
  const handleSubmit = () => {
    console.log('Collected Information:', collectedInformation);
    // Perform any other actions you need here

    // Navigate to the next page if needed
    // navigation.navigate("NinthPage");
  };

  const tempNav = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Collected Information</Text>
        <View style={styles.whiteBox}>
          <Text style={styles.infoText}>BMI: {bmi}</Text>
          <Text style={styles.infoText}>Calories: {calories}</Text>
          <Text style={styles.infoText}>
            Calories to lose weight: {(parseFloat(calories) - 500).toFixed(2)}
          </Text>
          <Text style={styles.infoText}>
            Calories to gain weight: {(parseFloat(calories) + 500).toFixed(2)}
          </Text>
          {age && ageOption && (
            <Text style={styles.infoText}>
              Recommended Daily Water Intake: {water} L
            </Text>
          )}
          <Text style={styles.infoText}>
            Vitamin A Suggestion: {vitaminASuggestion} μg/d
          </Text>
          <Text style={styles.infoText}>
            Vitamin C Suggestion: {vitaminCSuggestion} mg/d
          </Text>
          <Text style={styles.infoText}>
            Calcium Suggestion Suggestion: {calciumSuggestion} mg/d
          </Text>
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

          {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              tempNav.navigate('VitaminPage');
            }}
          >
            <Text style={styles.buttonText}>Vitamin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              tempNav.navigate('MineralPage');
            }}
          >
            <Text style={styles.buttonText}>Mineral</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationBar style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure the SafeAreaView takes up the entire screen
    backgroundColor: '#fff', // Set your desired background color
  },
  container: {
    flex: 9,
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
    flex: 1,
    backgroundColor: '#007bff',
    borderRadius: 36,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default BodyIndex;
