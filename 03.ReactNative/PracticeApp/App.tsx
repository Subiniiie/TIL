import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/RootNavigator';
import BottomTabsNavigator from './src/navigations/BottomTabNavigator';


function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}



export default App;

