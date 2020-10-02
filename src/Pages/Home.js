import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Home = () => {
  return (
    <ScrollView>

        <View style={style.header}>
          <Text style={style.txtInicio}>Início</Text>

          <View style={style.headerIcon1}>
            <Icon name="arrow-up-bold-circle-outline" size={20} />
          </View>

          <View style={style.headerIcon2}>
            <Icon name="bell-outline" size={20} />
          </View>
        </View>

        <View style={style.bordinha}>
            
          <Text style={style.txtFaixas}>
            Faixas recentes das pessoas que você segue
          </Text>
          
          <View style={style.alinhaimg}>
            <View>
              <Image
                source={require('../Assets/Image/donL.jpg')}
                style={style.imgArtistas1}
              />
              <Text style={style.txtartista}>         Don L</Text>
            </View>

            <View>
              <Image
                source={require('../Assets/Image/EltonJohn.jpg')}
                style={style.imgArtistas}
              />
              <Text style={style.txtartista}>Elton John</Text>
            </View>

            <View>
              <Image
                source={require('../Assets/Image/FrankOcean.jpg')}
                style={style.imgArtistas}
              />
              <Text style={style.txtartista}>Frank Ocean</Text>
            </View>

            <View>
              <Image
                source={require('../Assets/Image/kanyeWest.jpg')}
                style={style.imgArtistas}
              />
              <Text style={style.txtartista}>Kanye West</Text>
            </View>

          </View>
          </View>

          <View style={style.bordinha}>
              <Text style={style.txtmaisq}>Mais do que você gosta</Text>
              <Text style={style.txtFaixas}>Sugestões com base no que você curtiu ou reproduziu</Text>

              <View style={style.alinhaimg}>
              <View>
                <Image
                  source={require('../Assets/Image/blond.jpg')}
                  style={style.imgAlbum}
                />
                <Text style={style.txtalbo}>           Blond</Text>
              </View>
  
              <View>
                <Image
                  source={require('../Assets/Image/songsInTheKeyOfLife.jpg')}
                  style={style.imgAlbum}
                />
                <Text style={style.txtartista}>Songs In The Key...</Text>
              </View>
  
              <View>
                <Image
                  source={require('../Assets/Image/swimming.jpg')}
                  style={style.imgAlbum}
                />
                <Text style={style.txtartista}>        Swimming</Text>
              </View>
  
    
          </View>
          </View>

      



    </ScrollView>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 23,
    borderBottomWidth: 0.5,
    padding: 15,
    marginBottom: 5,
  },

  headerIcon1: {
    flexDirection: 'row',
    marginLeft: 240,
    marginTop: 6,
  },

  headerIcon2: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 6,
  },

  txtInicio: {
    fontFamily: 'Work Sans Regular',
    fontSize: 23,
    color: 'grey',
  },

  txtFaixas: {
    marginTop: 10,
    marginLeft: 15,
    color: 'grey',
    fontSize: 15,
  },

  txtmaisq: {
    marginTop: 10,
    marginLeft: 15,
    color: 'black',
    fontSize: 25,
  },

  imgArtistas1: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 25,
    marginLeft: 20,
    marginTop: 5,
    alignItems: 'center',
    borderTopWidth: 0.5,
  },

  imgArtistas: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 25,
    marginTop: 5,
    alignItems: 'center',
    borderTopWidth: 0.5,
  },
  
  imgAlbum: {
    width: 80,
    height: 80,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    alignItems: 'center',
    borderTopWidth: 0.5,

  },

  alinhaimg: {
    flexDirection: 'row',
  },

  bordinha: {
      borderTopWidth: .5,
      borderTopColor: 'grey',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginBottom: 20,
      marginTop: 9,
  },

  txtartista: {
    marginBottom: 10,
  },
});

export default Home;
