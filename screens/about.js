import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>About Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
    }
});