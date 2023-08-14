import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const FourthPage = ({ route, navigation }) => {
  const [selectedVitamins, setSelectedVitamins] = useState([]);
  const [selectedMinerals, setSelectedMinerals] = useState([]);
  const [openVitamins, setOpenVitamins] = useState(false); // State for vitamins dropdown
  const [openMinerals, setOpenMinerals] = useState(false); // State for minerals dropdown

  const vitaminOptions = [
    { label: 'No Vitamin Deficiencies', value: 'No Vitamin Deficiencies' },
    { label: 'Vitamin A', value: 'Vitamin A' },
    { label: 'Vitamin C', value: 'Vitamin C' },
    { label: 'Vitamin D', value: 'Vitamin D' },
    { label: 'Vitamin E', value: 'Vitamin E' },
    { label: 'Vitamin K', value: 'Vitamin K' },
    { label: 'Thiamin', value: 'Thiamin' },
    { label: 'Riboflavin', value: 'Riboflavin' },
    { label: 'Niacin', value: 'Niacin' },
    { label: 'Vitamin B6', value: 'Vitamin B6' },
    { label: 'Folate', value: 'Folate' },
    { label: 'Vitamin B12', value: 'Vitamin B12' },
    { label: 'Pantothenic Acid', value: 'Pantothenic Acid' },
    { label: 'Biotin', value: 'Biotin' },
    { label: 'Choline', value: 'Choline' },
  ];
  //   console.log("Selected Vitamins:", selectedVitamins);
  //   console.log("Selected Minerals:", selectedMinerals);
  const mineralOptions = [
    { label: 'No Mineral Deficiencies', value: 'No Minerals Deficiencies' },
    { label: 'Calcium', value: 'Calcium' },
    { label: 'Chromium', value: 'Chromium' },
    { label: 'Copper', value: 'Copper' },
    { label: 'Fluoride', value: 'Fluoride' },
    { label: 'Iodine', value: 'Iodine' },
    { label: 'Iron', value: 'Iron' },
    { label: 'Magnesium', value: 'Magnesium' },
    { label: 'Manganese', value: 'Manganese' },
    { label: 'Molybdenum', value: 'Molybdenum' },
    { label: 'Phosphorus', value: 'Phosphorus' },
    { label: 'Selenium', value: 'Selenium' },
    { label: 'Zinc', value: 'Zinc' },
    { label: 'Potassium', value: 'Potassium' },
    { label: 'Sodium', value: 'Sodium' },
    { label: 'Chloride', value: 'Chloride' },
  ];

  useEffect(() => {
    // console.log(selectedVitamins);
    setSelectedVitamins(
      selectedVitamins.includes('No Vitamin Deficiencies')
        ? []
        : selectedVitamins
    );
  }, [selectedVitamins]);

  useEffect(() => {
    // console.log(selectedMinerals);
    setSelectedMinerals(
      selectedMinerals.includes('No Minerals Deficiencies')
        ? []
        : selectedMinerals
    );
  }, [selectedMinerals]);

  const handleSubmit = () => {
    // Perform any necessary actions before navigating
    navigation.navigate('FifthPage', {
      ...route.params,
      selectedVitamins,
      selectedMinerals,
    });
  };

  const mineralsDropdownMarginTop = 10;
  const [mineralsDropdownZIndex, setMineralsDropdownIndex] = useState(0);
  const [vitaminDropdownZIndex, setVitaminDropdownIndex] = useState(0);

  useEffect(() => {
    if (openVitamins) {
      setOpenMinerals(false);
      setVitaminDropdownIndex(999);
    } else setVitaminDropdownIndex(0);
  }, [openVitamins]);

  useEffect(() => {
    if (openMinerals) {
      setOpenVitamins(false);
      setMineralsDropdownIndex(999);
    } else setMineralsDropdownIndex(0);
  }, [openMinerals]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Vitamin and Minerals Deficiencies</Text>
        <View style={{ zIndex: vitaminDropdownZIndex }}>
          <Text style={styles.subtitle}>Vitamins</Text>
          <DropDownPicker
            items={vitaminOptions}
            open={openVitamins} // Set open state for vitamins dropdown
            setOpen={setOpenVitamins}
            value={selectedVitamins}
            setValue={setSelectedVitamins}
            maxHeight={150}
            placeholder="No Vitamin Deficiencies"
            placeholderStyle={{ fontSize: 24 }}
            containerStyle={styles.dropdownContainer}
            showTickIcon={true}
            dropDownDirection="BOTTOM"
            multiple={true}
            mode="BADGE"
            textStyle={styles.menuTitle}
            labelStyle={{ fontSize: 24 }}
          />
        </View>

        <View
          style={{
            marginTop: mineralsDropdownMarginTop,
            zIndex: mineralsDropdownZIndex,
          }}
        >
          <Text style={styles.subtitle}>Minerals</Text>
          <DropDownPicker
            items={mineralOptions}
            open={openMinerals} // Set open state for minerals dropdown
            setOpen={setOpenMinerals}
            value={selectedMinerals}
            setValue={setSelectedMinerals}
            maxHeight={150}
            placeholder="No Minerals Deficiencies"
            placeholderStyle={{ fontSize: 24 }}
            containerStyle={[styles.dropdownContainer]}
            showTickIcon={true}
            dropDownDirection="BOTTOM"
            multiple={true}
            mode="BADGE"
            textStyle={styles.menuTitle}
            labelStyle={{ fontSize: 24 }}
          />
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
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: '#fff',
    textAlign: 'left',
  },
  dropdownContainer: {
    width: '100%',
    marginTop: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  activeButton: {
    backgroundColor: '#007bff',
    marginLeft: 20,
  },
  menuTitle: {
    fontSize: 20,
  },
});

export default FourthPage;
