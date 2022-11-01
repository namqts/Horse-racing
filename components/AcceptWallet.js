import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../constants';

export default function AcceptWallet() {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      useAngle={true}
      angle={180}
      locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
      colors={[
        '#FCFCFC',
        '#D0D0D0',
        '#F8F8F8',
        '#A4A4A4',
        '#5F5F5F',
        '#B3B3B3',
      ]}
      style={styles.container}>
      <View style={styles.borderWallet}>
        <View style={styles.containerWallet}>
          <View style={styles.wallet}>
            <Image source={images.icon_meta} />
            <Text style={styles.txtMeta}>Metamask</Text>
            <Image source={images.accept} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  txtMeta: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: 0.02,
    color: '#00CDEC',
    marginLeft: 8,
    width: 250
  },
  wallet: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 366,
    height: 28,
  },
  borderWallet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: 378,
    height: 46,
    borderRadius: 9,
    backgroundColor: 'rgb(85, 91, 97)',
  },
  containerWallet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: 378,
    height: 46,
    borderRadius: 9,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 1,
    width: 380,
    height: 48,
    borderRadius: 10,
    marginTop: 9,
  },
});
