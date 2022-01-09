import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SavedNewsComp from '../screen/component/savedNews';
import HomeScreen from '../screen/Home';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="SavedNews" component={SavedNewsComp} />
            </Tab.Navigator>
        
    );
}

export default BottomTabs