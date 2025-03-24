import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Exercise() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Link key={3} href="exercises/exercise3">
        <View style={styles.card}>
          <Text style={styles.textHeader}>Exercises 3</Text>
          <Text style={styles.textDescription}>Sample Login screen</Text>
        </View>
      </Link>
      <Link key={4} href="exercises/exercise4">
        <View style={styles.card}>
          <Text style={styles.textHeader}>Exercises 4</Text>
          <Text style={styles.textDescription}>
            Stopwatch with two buttons: one for Start/Stop and one for Reset
          </Text>
        </View>
      </Link>
      <Link key={5} href="exercises/exercise5">
        <View style={styles.card}>
          <Text style={styles.textHeader}>Exercises 5</Text>
          <Text style={styles.textDescription}>
            Register screen, when the register button is clicked, it should
            redirect to the confirmation screen to display the detail and the image
          </Text>
        </View>
      </Link>
      <Link key={6} href="exercises/exercise6">
        <View style={styles.card}>
          <Text style={styles.textHeader}>Exercises 6</Text>
          <Text style={styles.textDescription}>
            Simple CRUD using useContext and useReducer
          </Text>
        </View>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    gap: 20
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // for Android shadow
    width: '95%',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textDescription: {
    fontSize: 14,
    color: '#555',
  },
});
