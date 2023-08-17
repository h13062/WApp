import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { getMineralSuggestion } from "./mineralSuggestion/mineralSuggestion";
import NavigationBar from "../../navigation/navigationBar";

const MineralPage = ({ route, navigation }) => {
  const mineralNames = [
    "Ca",
    "Cr",
    "Cu",
    "F",
    "Iodine",
    "Fe",
    "Mg",
    "Mn",
    "Mo",
    "P",
    "Se",
    "Zn",
    "K",
    "Na",
    "Cl",
  ];

  const getMineralUnit = (mineral) => {
    const unitMap = {
      Ca: "mg/d",
      Cr: "μg/d",
      Cu: "μg/d",
      F: "mg/d",
      Iodine: "μg/d",
      Fe: "mg/d",
      Mg: "mg/d",
      Mn: "mg/d",
      Mo: "μg/d",
      P: "mg/d",
      Se: "μg/d",
      Zn: "mg/d",
      K: "mg/d",
      Na: "mg/d",
      Cl: "g/d",
    };

    return unitMap[mineral] || "";
  };

  const { age, ageOption, gender, selectedOption } = route.params;
  const handleSubmit = () => {
    //console.log("Collected Information:", collectedInformation);
    navigation.navigate("VitaminPage", { ...route.params });
  };
  const renderItem = ({ item }) => {
    const suggestion = getMineralSuggestion(
      item,
      age,
      ageOption,
      gender,
      selectedOption
    );
    const unit = getMineralUnit(item);

    return (
      <View style={styles.item}>
        <Text style={styles.mineralName}>{item}:</Text>
        <View style={styles.suggestionContainer}>
          <Text style={styles.suggestion}>{suggestion}</Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.headerBackButton, { marginTop: 40 }]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={[styles.buttonText, { fontSize: 20 }]}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.titles}>Daily Minerals Suggestions</Text>
      <FlatList
        data={mineralNames}
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
    marginTop: 60,
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
  mineralText: {
    fontSize: 18,
    textAlign: "left",
  },
  mineralName: {
    fontSize: 27,
    color: "black",
    fontWeight: "bold",
  },
  suggestionContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  suggestionWrapper: {
    flexDirection: "row",
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
  headerBackButton: {
    position: "absolute",
    top: 15,
    left: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#007bff",
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 20,
  },
});

export default MineralPage;
