import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'gray'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}>
                  <Text style={styles.headerTitle}>Profile</Text>
                </TouchableOpacity>
              ),
              headerTitle: 'Homescreen',
              headerStyle: {
                backgroundColor: 'orange',
              },
            })}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20, // Adjust font size as needed
    color: 'white', // Set text color
  },
});
