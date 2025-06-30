import { View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles";
import COLORS from "../../constants/Colors";
import { useState } from "react";
import TextField from "../../components/textfield";
import Authstyles from "./styles";
import { Ionicons } from '@expo/vector-icons';
import Buts from "../../components/Button";
import { router } from "expo-router";


const Login = () => {
    // const [textUN, SetTextUN] = useState('');
    const [textE, SetTextE] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    return (
        <SafeAreaView style = {styles.container}>
            <Image resizeMode = 'center' style = {{width: 115, marginTop: 50, marginLeft: 11, marginBottom: -10, alignSelf: 'flex-start'}}
                source={require('../../assets/images/logo.png')}/>
            <Text style = {{color: COLORS.white, fontFamily: 'PoppinsSemiBold', fontSize: 22, paddingLeft: 15, paddingBottom: 20}} >Sign in</Text>
            <ScrollView>
                <View style = {{borderWidth: 0, marginTop: 0, marginHorizontal: 15, /*height: 500,*/ padding: 0}} >
                
                    <View>
                        <Text style = {{color: COLORS.text, fontFamily: 'PoppinsMedium', fontSize: 16, paddingLeft: 1, paddingBottom: 10}} >Email</Text>
                        <TextField text={textE} SetText={SetTextE} placeholder={"example@gmail.com"} type={"email-address"} focus={() => {setEmailFocus(true)}} isFocus={emailFocus} blur={() => {setEmailFocus(false)}} />
                    </View>
                    <View style = {{marginBottom: 25}} >
                        <Text style = {Authstyles.text } >Password</Text>
                        <TextInput style = {[styles.input, {borderWidth: passwordFocus ? 1 : 0, borderColor: COLORS.primary}]} secureTextEntry = {!showPassword} cursorColor={COLORS.primary} onFocus={() => {setPasswordFocus(true)}} onBlur={() => {setPasswordFocus(false)}} />
                    </View>
                    <View style = {{position: "absolute", right: 20, top: 170}} >
                        {
                            !showPassword ? 
                            (<Pressable onPress={ () => {setShowPassword(true); setPasswordFocus(true)}} >
                                <Ionicons name="eye-sharp" size={20} style = {{color: "#7B7B8B"}} />
                            </Pressable>) 
                            :
                            (<Pressable onPress={ () => {setShowPassword(false); setPasswordFocus(true)}} >
                                <Ionicons name="eye-off-sharp" size={20} style = {{color: "#7B7B8B"}} />
                            </Pressable>)
                        }
                    </View>
                    {/* <Text style = {{color: COLORS.text, fontFamily: 'PoppinsMedium', fontSize: 16, paddingLeft: 1, paddingBottom: 10}} >Username</Text>
                    <TextField text={textUN} SetText={SetTextUN} placeholder={"Your unique username"} />
                    <Text style = {Authstyles.text } >Email</Text>
                    <TextField text={textE} SetText={SetTextE} placeholder={"example@gmail.com"} /> */}
                
                    <Buts buttonName={'Log In'} buttonHeight={58} action={() => router.navigate('/home')} />
                </View>
                <TouchableOpacity onPress={() => router.navigate("/signup")} >
                    <Text style = {{textAlign: 'center', paddingTop: 20, fontFamily: 'PoppinsRegular', fontSize: 14 ,color: COLORS.text}} >Don't have an account? <Text style = {{color: COLORS.primary, fontFamily: "PoppinsSemiBold",}} >Signup</Text></Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Login;