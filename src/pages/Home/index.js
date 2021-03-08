import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2D43A',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
    },
});

export default function Home() {
    return (
        <View style={styles.container}>

        </View>
    );
}