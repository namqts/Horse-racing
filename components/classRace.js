import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import { icons, images } from "../constants"

export default function ClassRace() {
  return (
    <View style={styles.raceClass}>
      <View style={styles.classIcon}>
        <Image source={require('../assets/images/class-Race/class1.png')} />
        <View style={styles.horse}>
          <Text
            style={[
              styles.text,
              {fontSize: 14, fontWeight: '700', marginRight: 2, color: '#FFFFFF'},
            ]}>
            12/12
          </Text>
          <Image source={require('../assets/images/horse.png')} />
        </View>
      </View>
      <View style={styles.classTitle}>
        <Text
          style={[
            styles.text,
            {fontSize: 12, fontWeight: '700', lineHeight: 18},
          ]}>
          Race type:{' '}
          <Text
            style={{
              color: '#FFFFFF',
            }}>
            Dirt
          </Text>
        </Text>
        <Text
          style={[
            styles.text,
            {fontSize: 12, fontWeight: '700', lineHeight: 18},
          ]}>
          Entry fee: <Text style={{color: '#00CDEC'}}>Free</Text>
        </Text>
        <View style={styles.prize}>
          <Text
            style={[
              styles.text,
              {fontSize: 12, fontWeight: '700', lineHeight: 18},
            ]}>
            Prize: {' '}
            <Text
              style={{
                color: '#FF9900',
                fontSize: 14,
                lineHeight: 24,
              }}>
              3.6
            </Text>
          </Text>
          <Image source={icons.coin} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#C5C5C5',
  },
  prize: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 81,
    height: 24,
  },
  classTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 92,
    height: 60,
    marginLeft: 14,
    padding: 4,
  },
  horse: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 24,
  },
  classIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 80,
    height: 60,
    padding: 8,
  },
  raceClass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 200,
    height: 64,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 4,
    padding: (4, 8, 0),
  },
});
