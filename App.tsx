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
          options={{title:'Clock'}}/>
        <Tab.Screen name="EMOMTab" 
          component={EMOMTab}
          options={{title:'EMOM'}}/>
        <Tab.Screen name="TimerTab" 
          component={TimerTab} 
          options={{title:'Timer'}}/>
        <Tab.Screen name="Tabata"
          component={TabataTab} 
          options={{title:'Tabata'}} />
        <Tab.Screen 
          name="SummaryTab" 
          component={Summary} 
          options={{title:'Summary'}}/>
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
