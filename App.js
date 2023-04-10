import { useState } from "react";
import * as Font from 'expo-font';
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const Stack = createStackNavigator();

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'green',
              height: 60,
            },
            headerTintColor: 'red',
          }}
        >
          <Stack.Screen name='Home' component={Home} options={{
            title: 'GameZone',
            // headerStyle: {
            //   backgroundColor: "#eee"
            // }
          }} />
          <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{
            title: 'Review Details',
            // headerStyle: {
            //   backgroundColor: "#eee"
            // }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}