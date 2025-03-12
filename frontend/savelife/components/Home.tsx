import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

const Home = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: () => navigation.navigate('Welcome')},
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, User!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Image
            source={require('../assets/logout.png')} // Path to PNG image
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Description Section with Image */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.appName}>SaveLife+</Text>

          {/* Logo Image */}
          <Image
            source={require('../assets/logo.png')} // Path to your PNG image
            style={styles.image} // Style for the image
          />
          <Text style={styles.subtitle}>A LifeSaving App</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.mainContent}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('RequestBlood')}>
            <Text style={styles.cardText}>🩸 Request Blood</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('RequestAmbulance')}>
            <Text style={styles.cardText}>🚑 Request Ambulance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ExistingRequests')}>
            <Text style={styles.cardText}>📋 View Requests</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Rewards')}>
            <Text style={styles.cardText}>🎁 View Rewards</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('MedicalHistory')}>
            <Text style={styles.cardText}>📖 Medical History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: '#ED2939',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#8B1B1B',
    padding: 10,
    borderRadius: 15,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  descriptionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  mainContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#ED2939',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appName: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ED2939',
    textShadowColor: 'white',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ED2939',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  logoutIcon: {
    width: 24, // Adjust size as needed
    height: 24,
    tintColor: '#fff', // Optional: Apply a color tint
  },
});

export default Home;
