import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/LoginPage/login";
// import Landing from "../components/landingPage/landing";
// import Form from "../components/formPage/form";
// import Calculator from "../components/calculatorPage/calculator";
import FirstPage from "../components/surveyPage/Question1Page/first";
import SecondPage from "../components/surveyPage/Question2Page/second";
import ThirdPage from "../components/surveyPage/Question3Page/third";
import FourthPage from "../components/surveyPage/Question4Page/fourth";
const Stack = createStackNavigator();
const App = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     padding: 0,
    //     margin: 0,
    //   }}
    // >
    //   {/* <Login /> */}
    //   {/* <Landing /> */}
    //   <Form />
    // </View>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ title: "FirstPage", headerShown: false }}
      />
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ title: "SecondPage", headerShown: false }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ title: "ThirdPage", headerShown: false }}
      />
      <Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{ title: "FourthPage", headerShown: false }}
      />

      {/* <Stack.Screen name="Form" component={Form} options={{ title: "Form" }} /> */}
      {/* <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{ title: "Calculator" }}
      /> */}
    </Stack.Navigator>
  );
};
export default App;
