import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.nightcafe.studio/jobs/uAIoQzPeVt4oY4CJzHZE/uAIoQzPeVt4oY4CJzHZE--1--jynp0.jpg?tr=w-1600,c-at_max',
        }} // Placeholder image URL
        style={styles.profileImage}
      />
      <Text style={styles.name}>Batman</Text>
      <Text style={styles.bio}>SuperHero</Text>
      <Text style={styles.description}>DC Superhero batman</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Light background color
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Circular image
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black', // Blue border around the image
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Darker gray for the name
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    color: '#555', // Medium gray for the bio
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#777', // Lighter gray for the description
    textAlign: 'center', // Center the text
    marginHorizontal: 20, // Horizontal padding for better spacing
  },
});
