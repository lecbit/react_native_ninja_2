import { globalStyles } from "../styles/global";
import { Text } from "react-native";
import { View } from "react-native";
import { Button } from "react-native";

export default function Home({ navigation }) {

    

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen!</Text>
            <Button title="Go to Review details" onPress={() => navigation.navigate('Reviews')} />
        </View>
    )
}