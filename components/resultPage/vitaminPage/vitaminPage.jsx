import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { getVitaminSuggestion } from "./vitaminSuggestion/vitaminSuggestion";
import NavigationBar from "../../navigationBar/navigationBar";
const VitaminPage = ({ route, navigation }) => {
  const vitaminNames = [
    "A",
    "C",
    "D",
    "E",
    "K",
    "B1",
    "B2",
    "B3",
    "B5",
    "B6",
    "B8",
    "B9",
    "B12",
    "Choline",
  ];

  const getVitaminUnit = (vitamin) => {
    const unitMap = {
      A: "μg/d",
      C: "mg/d",
      D: "μg/d",
      E: "mg/d",
      K: "μg/d",
      B1: "mg/d",
      B2: "mg/d",
      B3: "mg/d",
      B5: "mg/d",
      B6: "mg/d",
      B8: "μg/d",
      B9: "μg/d",
      B12: "μg/d",
      Choline: "mg/d",
    };

    return unitMap[vitamin] || "";
  };

  const { age, ageOption, gender, selectedOption } = route.params;

  const renderItem = ({ item }) => {
    const suggestion = getVitaminSuggestion(
      item,
      age,
      ageOption,
      gender,
      selectedOption
    );
    const unit = getVitaminUnit(item);

    return (
      <View style={styles.item}>
        <Text style={styles.vitaminName}>{item}:</Text>
        <View style={styles.suggestionContainer}>
          <Text style={styles.suggestion}>{suggestion}</Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titles}>Daily Vitamins Suggestions</Text>
      <FlatList
        data={vitaminNames}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.flatListContainer}
      />

      <NavigationBar navigation={navigation} routeParams={route.params} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titles: {
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 16,
    backgroundColor:
      "linear-gradient(0deg, rgba(0,32,76,1) 0%, rgba(163,224,247,1) 100%)",
  },
  flatListContainer: {
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 45,
    padding: 20,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  vitaminName: {
    fontSize: 27,
    color: "black",
    fontWeight: "bold",
  },
  suggestionContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  suggestion: {
    fontSize: 24,
    marginRight: 5, // Adjust this spacing as needed
    textAlign: "right",
  },
  unit: {
    fontSize: 24,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default VitaminPage;
