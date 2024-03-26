import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Buscador } from '../screens/Buscador';
import { Inicio } from '../screens/Inicio';
import { Detalle } from '../screens/Detalle';
import type { MainStackParamsList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<MainStackParamsList>();

export default function Navegador() {
    
    return (

<Stack.Navigator>
            <Stack.Screen name= 'Inicio' 
                          component={ Inicio } 
                          options={({ navigation }) => ({
                            headerLargeTitle: true,
                            headerRight: () => (
                                <TouchableOpacity onPress={()=> navigation.navigate('Buscador')}>
                                    <MaterialIcons name="search" color="black" size={32} />
                                </TouchableOpacity>
                            ),
                })}
            />
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name='Buscador'component={ Buscador } />
            </Stack.Group>
            <Stack.Screen 
                name='Detalle'
                component= { Detalle }
                options={{
                    headerTitle: '',
                    headerTransparent: true,
                    headerTintColor: 'white',

                }}

            />
        </Stack.Navigator>
            
  );
}
