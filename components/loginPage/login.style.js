import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 1,
    flex: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "black",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.1,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  btn: {
    backgroundColor: "#075eec",
    borderColor: "075eec",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
export default styles;
