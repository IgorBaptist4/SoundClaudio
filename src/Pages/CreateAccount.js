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
  ScrollView
} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import {} from 'react-native-vector-icons/Ionicons'
import Home from './Home.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
Icon.loadFont();

const Login = ({navigation}) => {
  return (
    <ScrollView>
<View>
      <View>
        <Text style={style.header}>Entrar</Text>
      </View>

      <View style={style.divButaos}>
        <View style={style.butaogoogle}>
          <TouchableOpacity>
            <Text style={style.txt1}>
          
              <Image
                source={{
                  uri: 'https://img.icons8.com/color/48/000000/google-logo.png',
                }}
                style={{width: 14, height: 14}}
              />{'  '}
              Inscrever-me com Google
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={style.butaofb}>
            <Text style={style.txtwhite}><Icon name='facebook' size={16}/>{'  '}Inscrever-se com Facebook</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={style.butaoapple}>
          <Text style={style.txtwhite}><Icon name='apple' size={16}/>{'  '}Se inscrever com Apple</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={style.stlEmail}>
        <Text>Email</Text>
        <TextInput
          underlineColorAndroid={'#F50'}        />
        </View>
        
        <View style={style.stlSenha}>
        <Text>Senha (mín. 6 caracteres)</Text>
        <TextInput
          underlineColorAndroid={'#F50'}
        />
      </View>

      <View>
        <TouchableOpacity style={style.butaocontinuar} onPress={() => navigation.navigate('Home')}>
          <Text>Inscrever-se com o e-mail</Text>
        </TouchableOpacity>
      </View>

      <View>
            <Text style={style.txt}>
                Podemos usar o seu e-mail e os seus dispositivos para enviar atualizações e dicas 
                sobre produtos e serviços do SoundClaudio e para enviar notificações de atividades.
                 Você pode cancelar a sua subscrição gratuitamente nas suas configurações de notificação.
            </Text>
            <Text style={style.txt}>
                Podemos usar informações que você nos fornece para lhe mostrar anúncios dirigidos conforme
                descrito na nossa <Text style={{color: 'blue'}}>Política de Privacidade</Text>
            </Text>
        </View>
        </View>
    </ScrollView>
    
  );
};

const style = StyleSheet.create({



    divButaos: {
        backgroundColor: '#FFF',
        borderBottomWidth: 0.5,
        
    },
    
  txt1: {
    textAlign: 'center',
  },

  txt: {
    textAlign: 'center',
    marginTop: 12
  },

  imggoogle: {

  },

  imgfb:{
      width: 5,
      height: 5,
  },

  header: {
    textAlign: 'center',
    fontSize: 23,
    borderBottomWidth: 0.5,
    padding: 21,
    marginBottom: 5,
  },

  butaogoogle: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#575757',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop:15,
    margin: 5,
    backgroundColor: '#FFF',
    padding: 12,
  },

  butaofb: {
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    margin: 5,
    backgroundColor: '#4167b2',
    padding: 12,
  },

  txtwhite: {
    color: '#FFF',
    alignContent: 'center',
  },

  butaoapple: {
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    margin: 5,
    marginBottom:20,
    backgroundColor: '#333333',
    padding: 12,
  },

  stlSenha: {
      marginLeft: 25,
      marginRight: 25,
  },

  stlEmail: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
},

    butaocontinuar: {
        borderRadius: 5,
        borderWidth: 0.5,
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        margin: 5,
        backgroundColor: '#F50',
        padding: 12,

    },

    stlesqueceu: {
        color: '#4167b2',
        textAlign: 'center',
        marginTop: 5
    },

});

export default Login;
