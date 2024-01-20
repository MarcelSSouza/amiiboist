import React from 'react';
import SearchBar from './Components/SearchBar';
import MainPage from './Components/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name="Home" component={MainPage}  />
      <Stack.Screen name="Search" component={SearchBar} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
