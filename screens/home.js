import { globalStyles } from "../styles/global";
import { Text } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum1', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum2', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum3', key: '3' },
    ]);


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}