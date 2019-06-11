import React, {Component} from 'react';
import {StyleSheet, Linking, ScrollView} from 'react-native';
import {RNCamera} from 'react-native-camera';

class ScannerScreen extends Component {
    static navigationOptions = {
        title: 'QR Code Scanner',
    };

    openWebSiteURL = async url => {
        if (url) {
            return null;
        }

        const isUrlSupported = await Linking.canOpenURL(url);

        if (!isUrlSupported) {
            return null;
        }

        await Linking.openURL(url);
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.scrollView}>
                <RNCamera
                    type={RNCamera.Constants.Type.back}
                    style={styles.cameraContainer}
                    onBarCodeRead={e => this.openWebSiteURL(e.data)}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default ScannerScreen;