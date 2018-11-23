import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Linking, Text, View, Button} from 'react-native';

import { RNCamera } from 'react-native-camera';
// import QRCodeScanner from 'react-native-qrcode-scanner';

type Props = {};
export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {name : `Main`}
  }

  static navigationOptions = {
    title: 'QR Code Scanner',
  };

  static defaultProps = {}

  // callback : Open URL / Get error.
  // onSuccess(e) {
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => console.error('An error occured', err));
  // }
  
  // render() {
  //     return (
  //         <View style={styles.container}>
  //           {/* Use QRCodeScanner Package */}
  //           <QRCodeScanner
  //             onRead = {this.onSuccess.bind(this)}
  //             topContent = {
  //               <Text style={styles.welcome}>
  //                 Scanne QR code ( for example <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> )
  //               </Text>
  //             }
  //             bottomContent = {
  //               <TouchableOpacity 
  //                 style={styles.buttonTouchable}
  //                 onPress={() => this.props.navigation.goBack()}>
  //                 <Text style={styles.buttonText}>OK. Got it, Go back!</Text>
  //               </TouchableOpacity>
  //             }
  //           />
  //         </View>
  //     );
  // }

  openWebsite = (website) => {
    console.log('opening website' + website);
    Linking.canOpenURL(website).then(supported => {
        if (supported) {
            Linking.openURL(website);
        } else {
            console.log("Don't know how to open URI: " + website);
        }
    });
  }

  render() {
      return (
          <RNCamera
              type={RNCamera.Constants.Type.back}
              style={styles.container}
              onBarCodeRead={e => this.openWebsite(e.data)}
          />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // margin: 10,
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
