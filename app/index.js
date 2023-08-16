import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../components/loginPage/login";
// import Landing from "../components/landingPage/landing";
// import Form from "../components/formPage/form";
// import Calculator from "../components/calculatorPage/calculator";
import FirstPage from "../components/surveyPage/Question1Page/first";
import SecondPage from "../components/surveyPage/Question2Page/second";
import ThirdPage from "../components/surveyPage/Question3Page/third";
import FourthPage from "../components/surveyPage/Question4Page/fourth";
import FifthPage from "../components/surveyPage/Question5Page/fifth";
import SixthPage from "../components/surveyPage/Question6Page/sixth";
import SeventhPage from "../components/surveyPage/Question7Page/seventh";
import BodyIndex from "../components/resultPage/bodyIndex/bodyIndex";
import MineralPage from "../components/resultPage/mineralPage/mineralPage";
import VitaminPage from "../components/resultPage/vitaminPage/vitaminPage";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="BodyIndex" component={BodyIndex} />
    <Tab.Screen name="MineralPage" component={MineralPage} />
    <Tab.Screen name="VitaminPage" component={VitaminPage} />
  </Tab.Navigator>
);
const App = () => {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login", headerShown: false }}
      /> */}
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
      <Stack.Screen
        name="FifthPage"
        component={FifthPage}
        options={{ title: "FifthPage", headerShown: false }}
      />
      <Stack.Screen
        name="SixthPage"
        component={SixthPage}
        options={{ title: "SixthPage", headerShown: false }}
      />
      <Stack.Screen
        name="SeventhPage"
        component={SeventhPage}
        options={{ title: "SeventhPage", headerShown: false }}
      />
      <Stack.Screen
        name="BodyIndex"
        component={BodyIndex}
        options={{ title: "BodyIndex", headerShown: false }}
      />
      <Stack.Screen
        name="MineralPage"
        component={MineralPage}
        options={{ title: "MineralPage", headerShown: false }}
      />
      <Stack.Screen
        name="VitaminPage"
        component={VitaminPage}
        options={{ title: "VitaminPage", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default App;
