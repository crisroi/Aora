import { Image, View, Text, TextInput, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import Styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import TextField from '../../components/textfield';
import COLORS from '../../constants/Colors';
import styles from '../styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { router } from "expo-router";

export default function HomeScreen() {

  const [topMoviesData, setTopMoviesData] = useState([])

  // console.log('My movie data', topMoviesData[1]);

  const getMovieData = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://imdb236.p.rapidapi.com/api/imdb/top-box-office',
        headers: {
          'x-rapidapi-key': 'a4cadcf5ddmsh3260a6522f81121p1a27d6jsnc6ab3a00f448',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      // console.log("response from api", response.data);
      setTopMoviesData(response.data);
      // const data = await axios.get("https://imdb236.p.rapidapi.com/api/imdb/top-box-office", {
      //   headers: {
      //     'x-rapidapi-key': 'a4cadcf5ddmsh3260a6522f81121p1a27d6jsnc6ab3a00f448',
      //     'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      //   }
      // })
      // console.log(data)
    } 
    catch (error) {
      console.log(error)
    }
  }

  useEffect(
    () => {
      getMovieData()
    }, []
  )

  const [query, setQuery] = useState('');
  console.log(query)

  return (
    <SafeAreaView style = {Styles.container} >
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignContent: 'center',}} >

        <View>
          <Text style = {{fontFamily: 'PoppinsRegular', color: 'white'}} >Welcome Back</Text>
          <Text style = {{fontFamily: 'PoppinsSemiBold', color: 'white', fontSize: 24}} >Cris Roi</Text>
        </View>

        <Image source={require ('../../assets/images/logo2.png')} resizeMode='contain' style = {{height: 34, width: 30}} />
      </View>

      <View style = {{flexDirection: "row", alignItems: "center", backgroundColor: COLORS.input, borderRadius: 8, paddingRight: 10, marginTop: 15}} >
        <TextInput style = {[styles.input ,{width: "90%", fontFamily: "PoppinsRegular"}]} placeholder='Search for a video topic' placeholderTextColor={COLORS.text} 
        onChangeText={(text) => setQuery(text) }/>
        <AntDesign name = "search1" size = {22} color = "white" />
      </View>

      <View style = {{marginTop: 18, marginBottom: 5}} >
        <Text style = {{fontFamily: "PoppinsSemiBold", fontSize: 20, color: COLORS.text}} >Trending Videos</Text>
      </View>

      {/* {
        topMoviesData.length < 1 ? 
      
        <ActivityIndicator color={COLORS.primary} size={'large'} /> : */}

    
        <FlatList 
          data={topMoviesData.filter(
            movie => {
             return movie.originalTitle.includes(query)
            }
          )}
          renderItem={(movie) => {
            return (
              <TouchableOpacity onPress={() => router.navigate('/details')} style = {{borderStyle: 'solid', borderWidth: 5, borderBlockColor: COLORS.primary, marginBottom: 10, paddingHorizontal: 20,}} >
                <Image source={{uri: movie?.item?.primaryImage}} resizeMode='contain' style = {{width: '100%', height: 400}} />
                <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5}} >
                  <Text style = {{color: 'white', fontFamily: 'PoppinsBold', fontSize: 22}} >{movie?.item?.originalTitle}</Text>
                  <Text style = {{color: COLORS.primary, fontFamily: "PoppinsSemiBold"}} >{movie.item.averageRating}</Text>
                </View>
                <Text style = {{color: COLORS.text, textAlign: 'justify', fontFamily: 'PoppinsSemiBold', marginBottom: 15}} >{movie?.item?.description}</Text>
              </TouchableOpacity>
            )
          }}
          nestedScrollEnabled = {true}
          ListEmptyComponent={() => {return (<View>
            <ActivityIndicator color={COLORS.primary} size={'large'} />
          </View>)}}
        />
      {/* }  */}
      

    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
