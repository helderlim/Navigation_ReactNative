import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import hello from './pages/hello';
import home from  './pages/home';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*DEFINIDO AS PAGINAS QUE VAO CONTER NAVEGAÇÃO*/}
                <Stack.Screen name="Home" component={home} />
                <Stack.Screen name="Hello" component={hello} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}