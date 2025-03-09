import * as React from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { IsAndroid } from "./tools/utils";
import StackContainer from './navigation/StackContainer';

export function App() {
  return (
    <KeyboardAvoidingView
      behavior={IsAndroid ? "height" : "padding"}
      style={{flex: 1}}
    >
      <NavigationContainer>
        <StatusBar hidden={false} barStyle={'dark-content'}  />
        <StackContainer />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
