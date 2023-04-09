import { globalStyles } from "../styles/global";
import { Text } from "react-native";
import { View } from "react-native";

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen!</Text>
        </View>
    )
}