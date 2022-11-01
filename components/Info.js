import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { icons } from '../constants'

export default function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.uid}>
          <View style={{width: 34, height: 16}}>
            <Text style={styles.txtTitle}>UID :</Text>
          </View>
          <View style={{width: 76, height: 24, marginLeft: 8}}>
            <Text style={styles.txtDes}>betting001</Text>
          </View>
        </View>
        <View style={styles.credit}>
          <View style={{width: 110, height: 16}}>
            <Text style={styles.txtTitle}>Current credit :</Text>
          </View>
          <View
            style={{
              width: 90,
              height: 24,
              flexDirection: 'row',
            }}>
            <Image source={icons.coin} />
            <Text style={styles.txtDes}> 10,000.138</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  credit: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 0,
    width: 210,
    height: 24,
    marginRight: 20,
  },
  txtDes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: '#00CDEC',
  },
  txtTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#C5C5C5',
  },
  uid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 118,
    height: 24,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: (0, 16),
    width: 428,
    height: 24,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute',
    width: 428,
    height: 926,
    marginTop: 14,
  },
});
