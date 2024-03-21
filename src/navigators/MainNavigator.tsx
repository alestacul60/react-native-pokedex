import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Detail } from '../screens/Detail';
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import type { MainStackParamsList } from "./types";

const Stack = createNativeStackNavigator<MainStackParamsList>();

export function MainNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name= 'Home' 
                          component={ Home } 
                          options={({ navigation }) => ({
                            headerLargeTitle: true,
                            headerRight: () => (
                                <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                                    <MaterialIcons name="search" color="black" size={32} />
                                </TouchableOpacity>
                            ),
                })}
            />
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name='Search'component={ Search } />
            </Stack.Group>
            <Stack.Screen name='Detail'component= {Detail } />
        </Stack.Navigator>
    )
}