import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import logo from '../../assets/images/completa-amarela.png'
import home from '../../assets/images/menu-home.png'
import search from '../../assets/images/menu-search.png'
import report from '../../assets/images/menu-report.png'
import notifications from '../../assets/images/menu-notifications.png'
import profile from '../../assets/images/menu-profile.png'

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
    },
    header:{
        justifyContent: 'center',
        width: '100%',
        height: windowHeight*0.12,
        alignItems: 'center',
        positon: 'fixed',
    },
    logo: {
        height: 40,
        width: 75,
        margin: 20,
    },
    card: {
        maxWidth: '85%', 
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 5,
    },
    avatarCard: {
    },
    tituloCard: {
        marginTop: 10,
    },
    imageCard: {
        width: '100%',
        height: 215,
        marginTop: 15,
        resizeMode: 'cover',
    },
    footer: {
        height: windowHeight*0.10,
        alignItems: 'center',
        positon: 'fixed',
        flexDirection: 'row',
    },
    imageFooter: {
        width: 25,
        height: 25,
        margin: 22.5,
    },
});

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
            </View>
            <ScrollView style={{height: windowHeight*0.78}}>
                <View style={{alignItems: 'center'}}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <Avatar.Image source={require('../../assets/images/postit.png')} style={styles.avatarCard}/>
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
                            <Avatar.Image source={require('../../assets/images/dgcabana.png')} style={styles.avatarCard}/>
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
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                    <Image source={home} style={styles.imageFooter}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                    <Image source={search} style={styles.imageFooter}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                    <Image source={report} style={styles.imageFooter}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                    <Image source={notifications} style={styles.imageFooter}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
                    <Image source={profile} style={styles.imageFooter}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}