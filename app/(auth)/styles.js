import { StyleSheet } from "react-native";
import COLORS from '../../constants/Colors';

const Authstyles = StyleSheet.create({
    text: {
        color: COLORS.text, 
        fontFamily: 'PoppinsMedium', 
        fontSize: 16, 
        paddingLeft: 1, 
        paddingBottom: 10,
        paddingTop: 20
    }
})

export default Authstyles;