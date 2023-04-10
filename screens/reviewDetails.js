import { globalStyles } from "../styles/global";
import { Text } from "react-native";
import { View } from "react-native";
import { Button } from "react-native";

export default function ReviewDetails({ route, navigation }) {
    const { title } = route.params;
    const { body } = route.params;
    const { rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{title}</Text>
            <Text style={globalStyles.titleText}>{body}</Text>
            <Text style={globalStyles.titleText}>{rating}</Text>
        </View>
    )
}