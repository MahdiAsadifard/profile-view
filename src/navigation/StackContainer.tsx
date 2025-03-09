import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import  Profile  from "./screens/Profile";
import  FollowersList  from "./screens/FollowersList";
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
                },
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerTitleAlign: 'center',
                headerTintColor: Colors.white,
                headerStyle: {
                    backgroundColor: Colors.green2
                }
            }}
        >
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile}
                options={({ route })=>({
                    title: route.params?.user.name
                })}
            ></Stack.Screen>
            <Stack.Screen name="FollowersList" component={FollowersList}
                options={({ route })=>({
                    title: route.params?.parent
                })}
            ></Stack.Screen>
            <Stack.Screen name="NotFound" component={NotFound}
                options={{
                    headerTitle: 'Not Found'
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
};

export default StackContainer;