import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

import logo from './images/logo-completa.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D43A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 110,
    width: 210,
  },

  btnEntrar: {
    height: 40,
    width: 330,
    backgroundColor: '#242424',
    borderRadius: 10,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    margin: '32px 0',
  },
  
  btnCadastrar: {
    height: 40,
    width: 330,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: '#242424',
    borderRadius: 10,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image  
        style={styles.logo}
        source={logo}
      />
      <TouchableOpacity
        style={styles.btnEntrar}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={{textAlign: 'center'}}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnCadastrar}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={{textAlign: 'center'}}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
