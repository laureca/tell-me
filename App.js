import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://i.ibb.co/zsD9Zyw/logo-compelta.png'}}
      />
    </View>
  );
}

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
});
