import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <View>
          <Text>VITA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View>
          <Text>MINE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          navigation.navigate('BodyIndex');
        }}
      >
        <View>
          <Text>INFO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View>
          <Text>NONE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View>
          <Text>BACK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  navItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default NavigationBar;
