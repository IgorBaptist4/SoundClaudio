import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import Login from './Login.js';
import CreateAccount from './CreateAccount.js'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HaveAccount = ({navigation}) => {
  return (
    <>
    <ScrollView>
    <View style={style.container}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../Assets/Image/cosmo-pyke.jpg')}
        >

        <View style={style.logo}>
          <Image
            source={require('../Assets/Image/Soundclaudio.png')}
            style={{width: 130, height: 130}}
            resizeMode="contain"
          />
        </View>

        <View style={style.txtpfinal}>
          <Text style={style.txtcentro}>Encontre as músicas que você</Text>
          <Text style={style.txtcentro}>adora.</Text>
          <Text style={style.txtcentro}>Descubra novos artistas.</Text>
        </View>

        <View style={style.butaos}>
          <TouchableOpacity style={style.butao1} onPress={() => navigation.navigate('CreateAccount')} >
            <Text style={style.txtbutao1}>Criar uma conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.butao2} onPress={() => navigation.navigate('Login')}>
            <Text style={style.txtbutao2}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  txtpfinal: {
    position: 'relative',
    marginTop: 310,
  },

  txtcentro: {
    textAlign: 'center',
    fontSize: 23,
    color: '#FFF',
  },

  logo: {
    alignItems: 'center',
    marginTop: 15,
  },

  butaos: {
    position: 'relative',
    marginTop: 55,
  },

  butao1: {
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    margin: 13,
    backgroundColor: '#F50',
    padding: 12,
  },

  txtbutao1: {
    fontSize: 16,
    color: 'white',
  },

  butao2: {
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 30,
    backgroundColor: '#FFF',
    padding: 12,
  },

  txtbutao2: {
    fontSize: 16,
    color: '#575757',
  },
});
export default HaveAccount;
