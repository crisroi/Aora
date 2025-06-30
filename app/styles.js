import { StyleSheet } from "react-native";
import COLORS from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.bg,
        flex: 1,
        // padding: 10
    },
    input: {
        height: 58,
        fontFamily: 'PoppinsSemiBold',
        fontSize: 16, 
        color: 'white',
        backgroundColor: COLORS.input,
        paddingLeft: 10,
        borderRadius: 10,
    }
})

export default styles;