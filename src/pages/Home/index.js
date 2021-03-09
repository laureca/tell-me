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
            <ScrollView>
                <View>
                    <Card>
                        <Card.Title title="Card Title"/>
                        <Card.Content>
                            <Title>Card title</Title>
                            <Paragraph>Card content</Paragraph>
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