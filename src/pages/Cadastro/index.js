import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';

import icon from '../../assets/images/icone.png';
import arrow from '../../assets/images/arrow.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  arrow: {
    width: 22,
    height: 22,
  },
  icon: {
    height: 40,
    width: 46,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
  },
  campoTexto:{
    height: 40,
    width: '85%',
    borderBottomWidth: 2,
    borderBottomColor: '#C8C8C8',
    color: "#C8C8C8", 
    marginBottom: 20,
  },
  btnProximo: {
    height: 40,
    width: '85%',
    backgroundColor: '#F2D43A',
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
  textProximo: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        justifyContent: 'star',
        width: '100%',
        alignItems: 'left',
      }}>
        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Image source={arrow}  style={styles.arrow}/>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
      }}>
        <Image  
          style={styles.icon}
          source={icon}
        />
        <Text style={styles.title}>Crie sua conta</Text>
      </View>
      <View style={{
        flex: 6,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
      }}>
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          value={"Nome"}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          value={"Data de nascimento"}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          value={"E-mail ou celular"}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          value={"Senha"}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          value={"Confirmar senha"}
        />
      </View>
      <View style={{
        flex: 2,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={styles.btnProximo}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={styles.textProximo}>Próximo</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

