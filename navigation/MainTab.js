import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './AppStack'; 
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';


const Tab = createBottomTabNavigator();
const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={AppStack} />
            <Tab.Screen name='Login' component={ LoginScreen} />
            <Tab.Screen name='Signup' component={ SignupScreen} />
            <Tab.Screen name='Settings' component={ SettingsScreen } />
        </Tab.Navigator>
    )
        
};

export default MainTab;
