import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import splash from './src/pages/splash'
import home from './src/pages/home';
import sobre from './src/pages/sobre';
import menu from './src/pages/menu';
import registro from './src/pages/registro';
import login from './src/pages/login';
import territorio1 from './src/pages/territorio1';
import territorio2 from './src/pages/territorio2';
import territorio3 from './src/pages/territorio3';
import territorio4 from './src/pages/territorio4';
import territorio5 from './src/pages/territorio5';
import territorio6 from './src/pages/territorio6';


const Stack = createNativeStackNavigator ();
export default function app (){
return (
<NavigationContainer>
    <Stack.Navigator
   initialRouteName="splash"
    screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="splash" component = {splash}/>
        <Stack.Screen name="home" component = {home}/>
        <Stack.Screen name="sobre" component = {sobre}/>
        <Stack.Screen name="menu" component = {menu}/>
        <Stack.Screen name="registro" component = {registro}/>
        <Stack.Screen name="login" component = {login}/>
        <Stack.Screen name="territorio1" component = {territorio1}/>
        <Stack.Screen name="territorio2" component = {territorio2}/>
        <Stack.Screen name="territorio3" component = {territorio3}/>
        <Stack.Screen name="territorio4" component = {territorio4}/>
        <Stack.Screen name="territorio5" component = {territorio5}/>
        <Stack.Screen name="territorio6" component = {territorio6}/>


    </Stack.Navigator>
</NavigationContainer>
);

}