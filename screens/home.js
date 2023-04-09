import { globalStyles } from "../styles/global";
import { Text } from "react-native";
import { View } from "react-native";

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen!</Text>
        </View>
    )
}