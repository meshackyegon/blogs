import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PersonalJounalsScreen from '../screens/PersonalJournalsScreen';
import PublicJounalsScreen from '../screens/PublicJournalsScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name='PersonalJounal' component={ PersonalJounalsScreen }/>
        <Stack.Screen name="Home" component={ HomeScreen} />
        <Stack.Screen name="Profile" component={ ProfileScreen } />
        <Stack.Screen name='PublicJounal' component={ PublicJounalsScreen }/>
        
    </Stack.Navigator>
    );
};

export default AppStack;
