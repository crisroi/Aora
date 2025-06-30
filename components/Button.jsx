import { TouchableOpacity, Text } from "react-native"
import COLORS from "../constants/Colors"



export default function Buts ({buttonName, textSize, buttonHeight, action})  {
    return (
        <TouchableOpacity style = {{height: buttonHeight, backgroundColor: COLORS.primary, borderRadius: 10, justifyContent: 'center'}} onPress={action} >
            <Text style = {{textAlign: 'center', color: COLORS.bg, fontFamily: 'PoppinsSemiBold', fontSize: textSize }}>{buttonName}</Text>
        </TouchableOpacity>
    )
}