import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import logo from '../../assets/images/completa-amarela.png'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9AF2F',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
    },
    logo: {
        height: 40,
        width: 75,
    },
    card: {
        maxWidth: '85%', 
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    tituloCard: {
        marginTop: 10,
    },
    imageCard: {
        width: '100%',
        maxHeight: 215,
        marginTop: 15,
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
            <ScrollView style={{
                flex: 5,
            }}>
                <View style={{alignItems: 'center'}}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Avatar.Image source={require('../../assets/images/postit.png')}/>
                            <Title style={styles.tituloCard}>Título da denuncia</Title>
                            <Paragraph>Breve descrição denuncia, breve descrição da denuncia, breve descrição da denuncia, breve descrição da denuncia..</Paragraph>
                            <Card.Cover source={require('../../assets/images/denuncia1.png')} style={styles.imageCard}/>
                        </Card.Content>
                        <Card.Actions>
                            <Button>Dislike</Button>
                            <Button>Compartilhar</Button>
                        </Card.Actions>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Avatar.Image source={require('../../assets/images/dgcabana.png')}/>
                            <Title style={styles.tituloCard}>Título da denuncia</Title>
                            <Paragraph>Breve descrição denuncia, breve descrição da denuncia, breve descrição da denuncia, breve descrição da denuncia..</Paragraph>
                            <Card.Cover source={require('../../assets/images/denuncia2.png')} style={styles.imageCard}/>
                        </Card.Content>
                        <Card.Actions>
                            <Button>Dislike</Button>
                            <Button>Compartilhar</Button>
                        </Card.Actions>
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}