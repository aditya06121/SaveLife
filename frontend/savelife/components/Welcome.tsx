import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

const Welcome = ({navigation}) => {
  const handleCall = () => {
    Linking.openURL('tel:6203614200');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Half with Blood Red Background */}
      <View style={styles.topHalf}>
        {/* App Name and Subtitle */}
        <Text style={styles.appName}>SaveLife+</Text>
        <Text style={styles.subtitle}>A LifeSaving App</Text>

        {/* Logo Image */}
        <Image
          source={require('../assets/logo.png')} // Path to your PNG image
          style={styles.image} // Style for the image
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Contact Us Text */}
        <Text style={styles.contactText}>📞 Contact Us for More Details:</Text>

        <View>
          <TouchableOpacity onPress={handleCall}>
            <Text style={styles.phoneNumber}>6203614200</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topHalf: {
    flex: 1,
    backgroundColor: '#ED2939', // Blood red background
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  image: {
    marginTop: 20,
    width: 130,
    height: 130,
    resizeMode: 'contain',
    borderRadius: 40,
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
  },
  registerButton: {
    width: '80%',
    backgroundColor: '#ED2939',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
    marginBottom: 10,
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#8B1B1B',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginTop: 15,
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ED2939',
  },
});

export default Welcome;
