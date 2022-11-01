import React from 'react';
import {Divider} from 'native-base';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useRoute} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {ProgressBar} from 'react-native-paper';
import { icons, images } from '../../../constants';

function HorseDetail() {
  const route = useRoute();

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.horseDetail}>
          <View style={styles.HorseTop}>
            <View style={styles.TxtHorseTop}>
              <View style={styles.txtTop}>
                <Text style={styles.txtTitle}>Blood line :</Text>
                <Text style={styles.txtDescription}>
                  {route.params.data.blood}
                </Text>
                <Text style={[styles.txtTitle, {marginTop: 10}]}>Gender :</Text>
                <Text style={styles.txtDescription}>
                  {route.params.data.gender}
                </Text>
                <Text style={[styles.txtTitle, {marginTop: 10}]}>Type :</Text>
                <Text style={styles.txtDescription}>
                  {route.params.data.type}
                </Text>
                <Text style={[styles.txtTitle, {marginTop: 10}]}>Color :</Text>
                <Text style={styles.txtDescription}>
                  {route.params.data.color}
                </Text>
              </View>
            </View>
            <View style={styles.HorseTopLeft}>
              <Image source={images.horse1} />
            </View>
          </View>
          <View style={styles.horseTopBottom}>
            <View style={styles.txtTop}>
              <Text style={[styles.txtTitle, {}]}>Characteris :</Text>
              <Text style={styles.txtDescription}>
                {route.params.data.characteris}
              </Text>
            </View>
            <View style={styles.txtTop}>
              <Text style={[styles.txtTitle, {}]}>Running type :</Text>
              <Text style={styles.txtDescription}>
                {route.params.data.running_type}
              </Text>
            </View>
            <View style={styles.txtTop}>
              <Text style={[styles.txtTitle, {}]}>Win rates :</Text>
              <Text style={styles.txtDescription}>
                {route.params.data.win_rates}
              </Text>
            </View>
          </View>
          <View style={styles.horseSkill}>
            <Text style={styles.txtTitle}>Speed</Text>
            <View style={styles.Progress}>
              <View style={{width: 340}}>
                <ProgressBar progress={route.params.data.processSpeed} color="#FFF" />
              </View>
              <Text style={[styles.txtDescription, {marginTop: -10, marginLeft: 4}]}>{route.params.data.speed}</Text>
            </View>
            <Text style={styles.txtTitle}>Muscle</Text>
            <View style={styles.Progress}>
              <View style={{width: 340}}>
                <ProgressBar progress={route.params.data.processMuscle} color="#FFF" />
              </View>
              <Text style={[styles.txtDescription, {marginTop: -10, marginLeft: 4}]}>{route.params.data.muscle}</Text>
            </View>
            <Text style={styles.txtTitle}>Stamina</Text>
            <View style={styles.Progress}>
              <View style={{width: 340}}>
                <ProgressBar progress={route.params.data.processStamina} color="#FFF" />
              </View>
              <Text style={[styles.txtDescription, {marginTop: -10, marginLeft: 4}]}>{route.params.data.stamina}</Text>
            </View>
            <Text style={styles.txtTitle}>Accuracy</Text>
            <View style={styles.Progress}>
              <View style={{width: 340}}>
                <ProgressBar progress={route.params.data.processAccuracy} color="#FFF" />
              </View>
              <Text style={[styles.txtDescription, {marginTop: -10, marginLeft: 4}]}>{route.params.data.accuracy}</Text>
            </View>
            <Text style={styles.txtTitle}>Spirit</Text>
            <View style={styles.Progress}>
              <View style={{width: 340}}>
                <ProgressBar progress={route.params.data.processSpirit} color="#FFF" />
              </View>
              <Text style={[styles.txtDescription, {marginTop: -10, marginLeft: 4}]}>{route.params.data.spirit}</Text>
            </View>
            <Text style={styles.txtTitle}>IQ</Text>
            <View style={styles.Progress}>
              <View style={{width: 340}}>
                <ProgressBar progress={route.params.data.processIQ} color="#FFF" />
              </View>
              <Text style={[styles.txtDescription, {marginTop: -10, marginLeft: 4}]}>{route.params.data.IQ}</Text>
            </View>
          </View>
          <View style={styles.horseTopBottom}>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 1.0]}
              colors={['#262626', '#0D0D0D']}
              style={styles.rateMedium}>
              <Text style={styles.txtRate}>Medium distance</Text>
              <Image source={images.star} />
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 1.0]}
              colors={['#262626', '#0D0D0D']}
              style={styles.rateMedium}>
              <Text style={styles.txtRate}>Dirt{'\n'}suitability</Text>
              <Image source={images.star1} />
            </LinearGradient>
          </View>
          <View style={styles.HorseMiddle}>
            <View style={styles.ratings}>
              <View style={styles.dateTime}>
                <Text style={styles.txtDate}>2022-06-18</Text>
                <View style={styles.places}>
                  <Image source={images.crown} />
                  <LinearTextGradient
                    start={{x: 0.0, y: 0.0}}
                    end={{x: 0.0, y: 1.0}}
                    useAngle={true}
                    angle={360}
                    locations={[0.0, 44.79, 47.92, 1.0]}
                    colors={['#EDC53A', '#B26F29', '#FFF873', '#DD9A09']}
                    style={styles.stt}>
                    <Text>1</Text>
                  </LinearTextGradient>
                  <Text style={styles.txtRating}>/12</Text>
                </View>
              </View>
              <View style={styles.containerTitle}>
                <View style={styles.race}>
                  <Image
                    source={images.round3}
                    style={{
                      width: 32,
                      height: 32,
                      marginRight: 8,
                    }}
                  />
                  <Text style={styles.title}>Karitekisuto race</Text>
                </View>
                <View style={styles.grass}>
                  <Text style={styles.title}>Grass 2400m</Text>
                </View>
              </View>
            </View>
            <Divider style={{marginTop: 14}} />
            <View style={styles.ratings}>
              <View style={styles.dateTime}>
                <Text style={styles.txtDate}>2022-06-18</Text>
                <View style={styles.places}>
                  <Image source={images.crown} />
                  <LinearTextGradient
                    start={{x: 0.0, y: 0.0}}
                    end={{x: 0.0, y: 1.0}}
                    useAngle={true}
                    angle={180}
                    locations={[0.0, 45.83, 53.13, 53.65, 1.0]}
                    colors={[
                      '#FD6F01',
                      '#84441F',
                      '#AAAEB6',
                      '#84441F',
                      '#CA8453',
                    ]}
                    style={styles.stt}>
                    <Text>3</Text>
                  </LinearTextGradient>
                  <Text style={styles.txtRating}>/12</Text>
                </View>
              </View>
              <View style={styles.containerTitle}>
                <View style={styles.race}>
                  <Image
                    source={images.round7}
                    style={{
                      width: 32,
                      height: 32,
                      marginRight: 8,
                    }}
                  />
                  <Text style={styles.title}>Karitekisuto race</Text>
                </View>
                <View style={styles.grass}>
                  <Text style={styles.title}>Grass 2400m</Text>
                </View>
              </View>
            </View>
            <Divider style={{marginTop: 14}} />
            <View style={styles.ratings}>
              <View style={styles.dateTime}>
                <Text style={styles.txtDate}>2022-06-18</Text>
                <View style={styles.places}>
                  <Image source={images.crown} />
                  <LinearTextGradient
                    start={{x: 0.0, y: 0.0}}
                    end={{x: 0.0, y: 1.0}}
                    useAngle={true}
                    angle={90}
                    locations={[0.0, 45.83, 53.13, 53.65, 1.0]}
                    colors={[
                      '#525967',
                      '#AAAEB6',
                      '#AAAEB6',
                      '#AAAEB6',
                      '#585F6C',
                    ]}
                    style={styles.stt}>
                    <Text>6</Text>
                  </LinearTextGradient>
                  <Text style={styles.txtRating}>/12</Text>
                </View>
              </View>
              <View style={styles.containerTitle}>
                <View style={styles.race}>
                  <Image
                    source={images.round11}
                    style={{
                      width: 32,
                      height: 32,
                      marginRight: 8,
                    }}
                  />
                  <Text style={styles.title}>Karitekisuto race</Text>
                </View>
                <View style={styles.grass}>
                  <Text style={styles.title}>Grass 2400m</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.horseBottom}>
            <View style={[styles.button, {marginRight: 6}]}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={90}
                locations={[0.0, 0.22, 0.51, 0.78, 1.0]}
                colors={['#3cb0ff', '#3eb1ff', '#80ccff', '#3eb1ff', '#3cb0ff']}
                style={[
                  styles.btnHorse,
                  {borderColor: '#3C7CDD', borderWidth: 0.5},
                ]}>
                <LinearTextGradient
                  start={{x: 0.0, y: 0.0}}
                  end={{x: 0.0, y: 1.0}}
                  useAngle={true}
                  angle={360}
                  locations={[-0.0937, 0.0259, 0.2196, 0.8918, 1.0]}
                  colors={[
                    '#FFAE00',
                    '#FED943',
                    '#FFF39F',
                    '#FFF39F',
                    '#FFAE00',
                  ]}
                  style={styles.txtBtn}>
                  <Text> Detail {'&'} betting</Text>
                </LinearTextGradient>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default HorseDetail;

const styles = StyleSheet.create({
  Progress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 374,
    height: 0,
  },
  txtBtn: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
  },
  btnHorse: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    width: 372,
    height: 38,
    borderRadius: 7,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (0, 0, 2),
    width: 372,
    height: 42,
  },
  horseBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: (8, 0),
    width: 374,
    height: 58,
    marginTop: 8,
  },
  grass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (0, 4),
    width: 106,
    height: 24,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 4,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  race: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 158,
    height: 32,
    borderRadius: 8,
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    width: 358,
    height: 32,
  },
  stt: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 27,
    textAlign: 'right',
    marginTop: -2,
    width: 14,
    height: 27,
    marginLeft: 2,
  },
  txtRating: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'right',
    letterSpacing: 0.02,
    color: '#fff',
  },
  places: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginRight: 20,
    width: 38,
    height: 29,
  },
  txtDate: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#C5C5C5',
  },
  dateTime: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 0,
    width: 358,
    height: 29,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: (0, 8),
    width: 371,
    height: 65,
    marginBottom: 2,
  },
  HorseMiddle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: (8, 0),
    width: 374,
    height: 243,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  txtRate: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#fff',
    opacity: 0.75,
    width: 70,
    height: 32,
  },
  rateMedium: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (4, 8),
    width: 183,
    height: 40,
    borderRadius: 8,
  },
  horseSkill: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    width: 374,
    height: 250,
    marginTop: 18,
  },
  horseTopBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    width: 374,
    height: 40,
    marginTop: 18,
  },
  txtDescription: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#00CDEC',
  },
  txtTitle: {
    display: 'flex',
    alignItems: 'flex-end',
    fontStyle: 'normal',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#C5C5C5',
  },
  txtTop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 120,
    height: 40,
  },
  HorseTopLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 237,
    height: 158,
    margin: 10,
  },
  TxtHorseTop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 121,
    height: 184,
  },
  HorseTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 374,
    height: 184,
  },
  horseDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 428,
    left: 16,
    top: 48,
    height: 926,
  },
});
