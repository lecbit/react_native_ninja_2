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
        <Stack.Navigator>
          {/* it automatically adds a navigation prop */}
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Reviews' component={ReviewDetails} />
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