import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

import logo from '../../assets/images/logo-completa.png';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2D43A',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },

  logo: {
    height: 105,
    width: 192,
  },

  btnEntrar: {
    height: 40,
    width: '85%',
    backgroundColor: '#242424',
    borderRadius: 10,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },

  textEntrar: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  btnCadastrar: {
    height: 40,
    width: '85%',
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: '#242424',
    borderRadius: 10,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },

  textCadastrar: {
    textAlign: 'center',
    color: '#242424',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Image  
          style={styles.logo}
          source={logo}
        />
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'flex-star',
        width: '100%',
        alignItems: 'center',
      }}>
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.textEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCadastrar}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.textCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
