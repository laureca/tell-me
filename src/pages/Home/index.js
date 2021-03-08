import React from 'react';
import {  Avatar, Button, Card, Title, StyleSheet, View, Image } from 'react-native';

import logo from '../../assets/images/completa-amarela.png'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
    },
    logo: {
        height: 40,
        width: 75,
    },
});

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
            }}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
            </View>
        </View>
    );
}