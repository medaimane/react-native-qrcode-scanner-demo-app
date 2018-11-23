import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

type Props = {};
export default class Home extends Component<Props> {  
    constructor(props) {
        super(props);
        this.state = {name : `Home`}
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
        <View style={styles.container}>
            <Image
                style={{width: 250}}
                source={require('../../../reactnativeqrcodeapp/src/assets/images/logo.png')}
            />        
            <Text style={styles.welcome}>QR Code Scanner</Text>
            <Image
                style={styles.qrImage}
                source={require('../../../reactnativeqrcodeapp/src/assets/images/qrcode.png')}
            />
            <Text style={styles.description}></Text>
            <Button
                onPress={() => {
                    this.props.navigation.navigate('Main');
                }}
                navigation={this.props.navigation}
                title="scan QR"
                style={styles.button}
                accessibilityLabel="Get scanne QR Code"
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  qrImage: {
    width: 150, 
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  }
});