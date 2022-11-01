import {useRoute} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function BettingNew() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.notiCard}>
        <View style={styles.containerTxt}>
          <Text style={styles.title}>{route.params.data.title}</Text>
          <View style={styles.bottom}>
            <Text style={styles.time}>Admin</Text>
            <Text style={styles.time}>2020-02-29</Text>
          </View>
        </View>
      </View>
      <View
        style={{width: '100%', height: 1, backgroundColor: 'rgb(85, 91, 97)'}}
      />
      <View style={styles.body}>
        <View style={styles.containerBody}>
          <Text style={styles.TxtBody}>
            このゲームは実際の暗号資産をBETすることで資産 を増やすことが可能です {'\n\n'}
            ただしBET予想が外れた 場合はあなたの資産がなくなる可能性があります。{'\n\n'}
            過度なBETは控えて、BET金額や頻度を調整しつつ
            ゲームをお楽しみください。
          </Text>
        </View>
      </View>
      <View
        style={{width: '100%', height: 1, backgroundColor: 'rgb(85, 91, 97)'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TxtBody: {
    fontFamily: 'Kalam',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 29,
    color: '#FFFFFF',
  },
  containerBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: (0, 32),
    width: 417,
    height: 232,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 417,
    height: 296,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 349,
    height: 24,
  },
  time: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#00CDEC',
  },
  containerTxt: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 32,
    paddingRight: 32,
    width: 428,
    height: 72,
  },
  notiCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: (12, 0, 0),
    width: 428,
    height: 96,
    backgroundColor: '#041E3F',
    marginTop: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 428,
    height: 600,
    marginTop: 19,
    backgroundColor: '#041E3F',
  },
});
