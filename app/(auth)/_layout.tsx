import { Stack } from "expo-router";


const AuthScreen = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="signup" />
            <Stack.Screen name="login" />
        </Stack>
    )
}

export default AuthScreen;