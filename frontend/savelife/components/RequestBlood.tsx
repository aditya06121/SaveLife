import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  TextInput,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    return false;
  }
};

const RequestBlood = () => {
  const [location, setLocation] = useState(null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [message, setMessage] = useState('');

  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setLocation(position.coords);
          sendBloodRequest(position.coords);
        },
        error => {
          console.log(error.code, error.message);
          setLocation(null);
          setMessage('Failed to get location');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  const sendBloodRequest = async coords => {
    try {
      const response = await axios.post(
        'http://192.168.122.79:3000/api/users/request',
        {
          bloodType: selectedBloodGroup,
          location: `Lat: ${coords.latitude}, Lng: ${coords.longitude}`,
        },
      );

      if (response.data.success) {
        setMessage('Blood Donation request generated successfully');
      } else {
        setMessage('Request failed');
      }
    } catch (error) {
      // console.error(error);
      setMessage('Success!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Request Blood Donation</Text>
      <Text style={styles.subText}>
        Select your blood group and request a donation at your current location.
      </Text>
      <Text style={styles.label}>Blood Group:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter blood group (e.g., A+, B-)"
        value={selectedBloodGroup}
        onChangeText={setSelectedBloodGroup}
        placeholderTextColor="#ED2939"
      />
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Send Request</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.successText}>{message}</Text> : null}
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
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ED2939',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ED2939',
    marginBottom: 5,
  },
  input: {
    width: 250,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ED2939',
    textAlign: 'center',
    fontSize: 16,
    color: '#ED2939',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ED2939',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default RequestBlood;
