import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Form = () => {
  const [sex, setSex] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityFactor, setActivityFactor] = useState(1.2);
  const [isSmoker, setIsSmoker] = useState('No');
  // const [stepCount, setStepCount] = useState("");
  const [pregnancyStatus, setPregnancyStatus] = useState(
    'Not pregnant or lactating'
  );
  const pregnancyOptions = [
    'Not pregnant or lactating',
    'Pregnant - 1st Trimester',
    'Pregnant - 2nd Trimester (less than 20 weeks)',
    'Pregnant - 2nd Trimester (more than 20 weeks)',
    'Pregnant - 3rd Trimester',
    'Lactating - 0-6 months',
    'Lactating - over 7 months',
  ];
  const isPregnantOrLactatingAllowed = () => {
    // Check if user is allowed to select pregnant or lactating status
    return age >= 14 && sex === 'female';
  };

  const navigation = useNavigation();
  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted');
    console.log('isSmoker: ', isSmoker);
    const smokerValue = isSmoker === 'Yes' ? 0.1 : 0;
    console.log('Smoker value: ', smokerValue);
    console.log('itemValue: ', activityFactor);
    const ageValue = parseInt(age);
    console.log('Age value: ', ageValue);
    const heightValue = parseFloat(height);
    console.log('Height value: ', heightValue);
    const weightValue = parseFloat(weight);
    console.log('Weight value: ', weightValue);
    console.log('Sex value: ', sex);

    // console.log("Step Count per Day: ", stepCount);

    navigation.navigate('Calculator', {
      weight: weightValue,
      height: heightValue,
      age: ageValue,
      sex: sex,
      activityFactor: activityFactor,
      pregnancyStatus: pregnancyStatus,
      //stepCount: parseInt(stepCount),
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Sex</Text>
        <Picker
          selectedValue={sex}
          onValueChange={(itemValue) => setSex(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>

        <Text style={styles.label}>Age</Text>
        <TextInput
          placeholder="Enter age"
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          placeholder="Enter height"
          value={height}
          onChangeText={(text) => setHeight(text)}
          style={styles.input}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          placeholder="Enter weight"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          style={styles.input}
          keyboardType="numeric"
        />
        {isPregnantOrLactatingAllowed() && (
          <>
            <Text style={styles.label}>Pregnancy and Lactating Status</Text>
            <Picker
              selectedValue={pregnancyStatus}
              onValueChange={(itemValue) => setPregnancyStatus(itemValue)}
              style={styles.picker}
            >
              {pregnancyOptions.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))}
            </Picker>
          </>
        )}
        <Text style={styles.label}>Activity Factor</Text>
        <Picker
          selectedValue={activityFactor}
          onValueChange={(itemValue) => setActivityFactor(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Little/no exercise" value={1.2} />
          <Picker.Item label="Light exercise" value={1.375} />
          <Picker.Item label="Moderate exercise" value={1.55} />
          <Picker.Item label="Heavy exercise" value={1.725} />
        </Picker>

        <Text style={styles.label}>Are you a smoker?</Text>
        <Picker
          selectedValue={isSmoker}
          onValueChange={(itemValue) => setIsSmoker(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="No" value="No" />
          <Picker.Item label="Yes" value="Yes" />
        </Picker>

        <Button title="Submit" onPress={handleSubmit} style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 60,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  picker: {
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form;
