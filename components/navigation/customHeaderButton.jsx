import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/stack";

const CustomHeader = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.headerContainer}
      onPress={() => navigation.goBack()}
    >
      <HeaderBackButton tintColor="black" />
      <Text style={styles.headerTitle}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 12,
    fontWeight: "bold",
  },
});

export default CustomHeader;
