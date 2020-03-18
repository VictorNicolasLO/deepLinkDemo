import React from 'react';
import Menu from './views/menu';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName="menu">
      <>
        <Stack.Screen name="menu" component={Menu} />
      </>
    </Stack.Navigator>
  );
}

export default MainNavigator;
