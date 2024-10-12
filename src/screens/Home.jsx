import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Welcome to the Home Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Light blue background
    padding: 20, // Add padding to the container
  },
  title: {
    fontSize: 36, // Larger font size for the main text
    fontWeight: 'bold', // Bold text for emphasis
    color: '#00796b', // Dark teal color for the title
    marginBottom: 10, // Space below the title
  },
  subtitle: {
    fontSize: 18, // Smaller font size for the subtitle
    color: '#004d40', // Darker teal color for the subtitle
    textAlign: 'center', // Center align subtitle text
  },
});
