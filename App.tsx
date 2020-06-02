import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ClockTab } from "./components/ClockTab";
import { EMOMTab } from "./components/EmomTab";
import { TimerTab } from "./components/TimerTab";
import { TabataTab } from "./components/TabataTab";
import { Summary } from "./components/Summary";

import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  console.ignoredYellowBox = ['Failed prop type: Invalid props.style'];
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="ClockTab"
      tabBarPosition="bottom"
      tabBarOptions={{
        labelStyle:{fontSize:10,fontWeight:"bold"},
        style: { backgroundColor: 'powderblue' },
      }}
      >
        <Tab.Screen name="ClockTab" 
          component={ClockTab} 
          options={{tabBarLabel:'Clock'}}/>
        <Tab.Screen name="EMOMTab" 
          component={EMOMTab}
          options={{tabBarLabel:'EMOM'}}/>
        <Tab.Screen name="TimerTab" 
          component={TimerTab} 
          options={{tabBarLabel:'Timer'}}/>
        <Tab.Screen name="Tabata"
          component={TabataTab} 
          options={{tabBarLabel:'Tabata'}} />
        <Tab.Screen 
          name="SummaryTab" 
          component={Summary} 
          options={{tabBarLabel:'Summary'}}
          initialParams={{roundTimeMap:{}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
