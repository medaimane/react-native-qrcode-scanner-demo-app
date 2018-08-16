import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Linking, Text, View, Button} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

type Props = {};
export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {name : `Main`}
  }

  static navigationOptions = {
    title: 'QRC Scanner',
  };

  static defaultProps = {}

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
      return (
          <View style={styles.container}>
            <QRCodeScanner
              onRead = {this.onSuccess.bind(this)}
              topContent = {
                <Text style={styles.welcome}>
                  Scanne QR code ( for example <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> )
                </Text>
              }
              bottomContent = {
                <View>
                  <TouchableOpacity 
                    style={styles.buttonTouchable}
                    onPress={() => this.props.navigation.goBack()}
                  >
                    <Text style={styles.buttonText}>OK. Got it, Go back!</Text>
                  </TouchableOpacity>
                </View> 
              }
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
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 15,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 5,
  }
});
