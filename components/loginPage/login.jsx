import { React, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./login.style";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = () => {
    //Alert.alert("Sign in button clicked");
    //navigation.navigate("Form");
    navigation.navigate("FirstPage");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      {/* <View style={styles.container}> #e8ecf4 */}
      {/* in case your code dont have container styling, 
      use the view above to uncomment the top view and
      comment this view tag
        |
        v*/}
      <View style={styles.container}>
        {/*use img instead of Image if using web*/}
        <Image
          source={{ uri: "https://withfra.me/android-chrome-512x512.png" }}
          style={styles.headerImg}
          alt="logo"
        />
        <Text style={styles.title}>Sign in to My App</Text>
        <Text style={styles.subtitle}>Get access to your portfolio</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.inputControl}
            value={form.email}
            placeholder="myemail@email.com"
            placeholderTextColor="#6b7280"
            onChangeText={(email) => setForm({ ...form, email })}
          />
        </View>

        {/*Password input */}
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.inputControl}
            value={form.password}
            placeholder="*********"
            placeholderTextColor="#6b7280"
            onChangeText={(password) => setForm({ ...form, password })}
          />
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity onPress={handleSignIn}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Sign in</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 12 }}
            onPress={() => {
              //handle OnPress
              Alert.alert("Sign up button click:");
            }}
          >
            <Text style={styles.formFooter}>
              Don't have an account?
              <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
