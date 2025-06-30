import {View , Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import COLORS from '../constants/Colors';
import { useRouter } from 'expo-router';

import Buts from '../components/Button';


export default function Page() { 
  const router = useRouter();
    return (
      <SafeAreaView style = {styles.container}>
        <Image resizeMode = 'center' style = {{width: 115, alignSelf: 'center'}}
        source={require('../assets/images/logo.png')}/>
        <View style = {{backgroundColor: COLORS.primary,  justifyContent: 'center'}}>

        <Image source={require('../assets/images/img.png')} 
        style = {{alignSelf: 'center', height: 320, width: 400, /*marginVertical: 25*/}} />
        </View>

        <Text style = {{color: 'white', fontSize: 30, textAlign: 'center', fontFamily: 'PoppinsSemiBold', paddingTop: 10}}>
        Discover Endless Possibilities with <Text style = {{color: COLORS.primary, fontSize: 30, fontFamily: 'PoppinsSemiBold'}}>Aora</Text>
        </Text>

        <Text style = {{color: COLORS.text, fontSize: 14, fontFamily: 'PoppinsRegular', textAlign: 'center', paddingHorizontal: 11}}>
        Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
        </Text>
        
        {/* <TouchableOpacity 
        style = {{marginTop: 30, backgroundColor: COLORS.primary, height: 58, borderRadius: 10, justifyContent: 'center', marginHorizontal: 10}}
        onPress={() => router.push('./(auth)/signup')}
        >
        <Text style = {{textAlign: 'center', color: COLORS.bg, fontFamily: 'PoppinsSemiBold', fontSize: 16}}>Continue</Text>
        </TouchableOpacity> */}

        <View style = {{marginTop: 30, paddingHorizontal: 10}}>
          <Buts buttonName = {'Continue'} buttonHeight = {58} textSize = {16} action={() => router.navigate('/signup')} />
        </View>        

      </SafeAreaView>
    );
  }