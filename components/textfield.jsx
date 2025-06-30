// import { useState } from "react"
import { TextInput } from "react-native";
import COLORS from "../constants/Colors";
import styles from "../app/styles";



const TextField = ({text, SetText, placeholder, type, focus, isFocus, blur, width}) => {
    return (
        <TextInput 
            style = {[styles.input, {borderWidth: isFocus? 1 : 0, borderColor: isFocus? COLORS.primary : "" , width: width}]}
            placeholder = {placeholder}
            placeholderTextColor={'white'}
            value = {text}
            onChangeText = {SetText}
            keyboardType = {type}
            cursorColor={COLORS.primary}
            onFocus={focus}
            onBlur={blur}
        />
    )
}

export default TextField;