import { View, Text } from "react-native";
import Login from "../components/loginPage/login";
import Landing from "../components/landingPage/landing";
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 0,
        margin: 0,
      }}
    >
      {/* <Login /> */}
      <Landing />
    </View>
  );
};
export default App;
