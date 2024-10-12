import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      >
        <Text style={styles.btnText}>Go To Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Light grayish blue background
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333', // Darker gray for better contrast
  },
  btn: {
    backgroundColor: '#007BFF', // Bootstrap primary blue color
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 220,
    borderRadius: 30,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // For Android shadow
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600', // Slightly bolder for better readability
  },
});
