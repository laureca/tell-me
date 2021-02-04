import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';


export default function Cadastro() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnProximo}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={styles.textProximo}>Próximo</Text>
      </TouchableOpacity>
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