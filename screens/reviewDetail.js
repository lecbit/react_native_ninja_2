import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function ReviewDetails() {
    return (
        <View style={styles.container}>
            <Text>ReviewDetails Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
    }
});