import { globalStyles } from "../styles/global";
import { Text } from "react-native";
import { View } from "react-native";
import { Button } from "react-native";

export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ReviewDetails Screen!</Text>
            <Button title="Go to Review details" onPress={pressHandler} />
        </View>
    )
}