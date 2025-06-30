import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import styles from "../styles";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
    // const {movie} = useLocalSearchParams();
    return (
        <SafeAreaView style = {styles.container} >
            <Text style = {{color: 'white'}} >Details screen</Text>
        </SafeAreaView>
    )
}