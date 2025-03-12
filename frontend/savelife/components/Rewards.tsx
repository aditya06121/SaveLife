import React from 'react';
import {StyleSheet, View, Text, Linking, TouchableOpacity} from 'react-native';

const Rewards = () => {
  const handleCall = () => {
    Linking.openURL('tel:6203614200');
  };

  return (
    <View style={styles.container}>
      {/* Upper Half - Rewards Section */}
      <View style={styles.rewardsSection}>
        <Text style={styles.heading}>Rewards</Text>
        <Text style={styles.points}>100 Points</Text>
        <Text style={styles.subText}>
          You earn a reward on our app every time you donate blood.
        </Text>
      </View>

      {/* Lower Half - Insurance Policy Section */}
      <View style={styles.insuranceSection}>
        <Text style={styles.subHeading}>Recommended Insurance Policy</Text>
        <Text style={styles.insuranceText}>
          Get the best insurance coverage for blood donors. for more details
          contact:
        </Text>
        <View>
          <TouchableOpacity onPress={handleCall}>
            <Text style={styles.phoneNumber}> 📞 6203614200</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rewardsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8D7DA',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ED2939',
    marginBottom: 10,
    textAlign: 'center',
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  insuranceSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ED2939',
    marginBottom: 10,
    textAlign: 'center',
  },
  insuranceText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  callButton: {
    backgroundColor: '#ED2939',
    padding: 12,
    borderRadius: 10,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ED2939',
  },
});

export default Rewards;
