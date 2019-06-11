import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

import logoImage from '../assets/images/qrcode.png';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    navigateToScannerScreen = () => {
        this.props.navigation.navigate('ScannerScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logoImage} source={logoImage} />
                <Text style={styles.welcomeTitle}>{'QR Code Scanner'}</Text>
                <Button
                    style={styles.button}
                    title='Scan QR'
                    accessibilityLabel='Get QR Code Scanner'
                    navigation={this.props.navigation}
                    onPress={() => this.navigateToScannerScreen()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        margin: 10,
    },
    welcomeTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    logoImage: {
        width: 250,
    },
});

export default HomeScreen;