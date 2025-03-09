import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import  Profile  from "./screens/Profile";
import { NotFound } from "./screens/NotFound";

import { Colors } from "../tools/styles";

const Stack = createStackNavigator();

const StackContainer = () => {
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions= {{
                cardStyle: {
                    backgroundColor: Colors.white
                }
            }}
        >
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile} ></Stack.Screen>
            <Stack.Screen name="NotFound" component={NotFound}
                options={{
                    headerTitle: 'User Not Found'
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
};

export default StackContainer;