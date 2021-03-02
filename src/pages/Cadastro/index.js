import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';


export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
      }}>
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          autoCompleteType={'name'}
          value={null}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          autoCompleteType={'email'}
          value={null}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          autoCompleteType={'tel'}
          value={null}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          autoCompleteType={'password'}
          value={null}
        />
        <TextInput
          style={styles.campoTexto}
          onChangeText={text => onChangeText(text)}
          autoCompleteType={'password'}
          value={null}
        />
      </View>
      <View style={{
        flex: 1,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  campoTexto:{
    height: 40,
    width: '85%',
    borderBottomWidth: 2,
    borderBottomColor: '#F2D43A', 
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