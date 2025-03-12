import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MedicalHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, Rohit</Text>
      <Text style={styles.subHeading}>General Medical Records</Text>

      <View style={styles.recordContainer}>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Name:</Text> Rohit Sharma
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Phone Number:</Text> +91 9876543210
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Emergency Contact:</Text> +91 9123456789
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Height:</Text> 175 cm
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Weight:</Text> 70 kg
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Blood Type:</Text> O+
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Date of Birth:</Text> 12th May 1990
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Gender:</Text> Male
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Allergies:</Text> None
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Chronic Conditions:</Text> None
        </Text>
        <Text style={styles.recordText}>
          <Text style={styles.label}>Current Medications:</Text> None
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ED2939',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  recordContainer: {
    width: '90%',
    backgroundColor: '#F8D7DA',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  recordText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: '#ED2939',
  },
});

export default MedicalHistory;
