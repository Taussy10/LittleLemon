import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen  name="WelcomeScreen" component={WelcomeScreen}
      options={{title:'Welcome'}}/>
      <Stack.Screen  name="SubscribeScreen" component={SubscribeScreen}
       options={{ headerStyle:{color:'green'}, title:'Subscribe'} }
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
