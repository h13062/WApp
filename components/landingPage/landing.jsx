import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Landing = () => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/background.png')}
          style={styles.background}
        />
        <View style={[styles.background, styles.overlay]} />

        <View style={styles.logoContainer}>
          {/* Your logo image */}
          <Image
            source={require('../../assets/logo-resize.png')}
            style={styles.logo}
          />
          {/* Optional logo text */}
          {/* <Text style={styles.logoText}>Logo</Text> */}
        </View>

        <View style={styles.buttonContainer}>
          {showButtons && (
            <>
              {/* Button 1 */}
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.btn}
              >
                <View style={styles.btnSecondary}>
                  <MaterialCommunityIcons
                    color="#000"
                    name="email-fast-outline"
                    size={18}
                    style={{ marginRight: 12 }}
                  />
                  <Text style={styles.btnSecondaryText}>Email</Text>
                  <View style={{ width: 12 }} />
                </View>
              </TouchableOpacity>

              {/* Button 2 */}
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={[styles.btn, { marginTop: 0 }]}
              >
                <View style={styles.btnSecondary}>
                  <MaterialCommunityIcons
                    color="#000"
                    name="google"
                    size={18}
                    style={{ marginRight: 12 }}
                  />
                  <Text style={styles.btnSecondaryText}>Google</Text>
                  <View style={{ width: 12 }} />
                </View>
              </TouchableOpacity>

              {/* Button 3 */}
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={[styles.btn, { marginBottom: 0 }]}
              >
                <View style={styles.btnSecondary}>
                  <MaterialCommunityIcons
                    color="#000"
                    name="facebook"
                    size={18}
                    style={{ marginRight: 12 }}
                  />
                  <Text style={styles.btnSecondaryText}>Facebook</Text>
                  <View style={{ width: 12 }} />
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>

        <TouchableOpacity onPress={toggleButtons} style={styles.toggleBtn}>
          <Text style={styles.toggleBtnText}>
            {showButtons ? 'Hide Buttons' : 'Show Buttons'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    // backgroundColor: "rgba(0,0,0,0.2)",
  },
  logo: {
    paddingTop: 20,
    width: 360, // Adjust the width as needed
    height: 80, // Adjust the height as needed
    alignItems: 'center',
    marginBottom: 20, // Adjust the spacing as needed
    marginTop: 90, // Add marginTop to lower the logo
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0, // Adjust the spacing as needed
    width: '100%',
    alignItems: 'center',
    marginTop: -12,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#000',
    marginBottom: 12,
    width: '80%',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#000',
    marginRight: 12,
    textAlign: 'center',
  },
  toggleBtn: {
    marginTop: 20,
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    width: '80%', // Adjust the width as needed
  },
  toggleBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
});

export default Landing;
