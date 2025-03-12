import ExistingRequests from './components/ExistingRequests';
import Home from './components/Home';
import Login from './components/Login';
import MedicalHistory from './components/MedicalHistory';
import Register from './components/Register';
import RequestAmbulance from './components/RequestAmbulance';
import RequestBlood from './components/RequestBlood';
import Rewards from './components/Rewards';
import Welcome from './components/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{gestureEnabled: true}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />

          <Stack.Screen name="RequestBlood" component={RequestBlood} />
          <Stack.Screen name="RequestAmbulance" component={RequestAmbulance} />
          <Stack.Screen name="ExistingRequests" component={ExistingRequests} />
          <Stack.Screen name="Rewards" component={Rewards} />
          <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
