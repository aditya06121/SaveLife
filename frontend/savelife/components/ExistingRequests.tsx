import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const existingRequests = [
  {id: '1', bloodType: 'A+', location: '40.7128° N, 74.0060° W'},
];

const ExistingRequests = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Existing Blood Donation Requests</Text>
      <FlatList
        data={existingRequests}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.requestCard}>
            <Text style={styles.requestText}>
              <Text style={styles.label}>Blood Type:</Text> {item.bloodType}
            </Text>
            <Text style={styles.requestText}>
              <Text style={styles.label}>Location:</Text> {item.location}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ED2939',
    marginBottom: 20,
    textAlign: 'center',
  },
  requestCard: {
    width: '90%',
    backgroundColor: '#F8D7DA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  requestText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: '#ED2939',
  },
});

export default ExistingRequests;
