import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Divider,
  NativeBaseProvider,
} from 'native-base';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useNavigation} from '@react-navigation/native';
import { dummyData, images } from '../../../constants'

function RaceCard() {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenId = isOpen => {
    setIsOpen(isOpen);
  };

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View
        style={[
          styles.ContainerTable,
          isOpen ? {height: 1149} : {height: 534},
        ]}>
        <View style={styles.Placeholder}>
          <View style={styles.header}>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderNo}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.no}>
                <Text style={styles.txtTable}>No.</Text>
              </LinearGradient>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderName}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.name}>
                <Text style={styles.txtTable}>Horse name</Text>
              </LinearGradient>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderCareer}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.career}>
                <Text style={styles.txtTable}>Career</Text>
              </LinearGradient>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderOwner}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.owner}>
                <Text style={styles.txtTable}>Owner</Text>
              </LinearGradient>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderAct}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.act}>
                <Text style={styles.txtTable}>Act</Text>
              </LinearGradient>
            </LinearGradient>
          </View>

          <View>
            {dummyData.horseList.map((item, i) => (
              <View>
                <View style={styles.rowList} key={i}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 7,
                      width: 44,
                      height: 40,
                      backgroundColor: item.background,
                      borderColor: '#A4A4A4',
                      borderWidth: 0.5,
                    }}>
                    <Image source={item.image} />
                    <Text style={styles.txtNumber}>{item.id}</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 7,
                      width: 116,
                      height: 40,
                      backgroundColor: item.background,
                      borderColor: '#A4A4A4',
                      borderWidth: 0.5,
                    }}>
                    <Text style={styles.txt}>{item.name}</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 7,
                      width: 70,
                      height: 40,
                      backgroundColor: item.background,
                      borderColor: '#A4A4A4',
                      borderWidth: 0.5,
                    }}>
                    <Text style={styles.txt}>
                      <Text style={{color: '#FFCB12'}}>{item.careerFirst}</Text>
                    </Text>
                    <Text style={styles.txtSort}>{item.careerLast}</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 7,
                      width: 115,
                      height: 40,
                      backgroundColor: item.background,
                      borderColor: '#A4A4A4',
                      borderWidth: 0.5,
                    }}>
                    <Text style={styles.txt}>{item.owner}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setIsOpenId(item.id)}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 7,
                        width: 42,
                        height: 40,
                        backgroundColor: item.background,
                        borderColor: '#A4A4A4',
                        borderWidth: 0.5,
                      }}>
                      {isOpen === item.id ? (
                        // <FontAwesomeIcon
                        //   icon={faCaretUp}
                        //   color="#DCDCDC"
                        //   size={22}
                        // />
                        <Text>Up</Text>
                      ) : (
                        // <FontAwesomeIcon
                        //   icon={faCaretDown}
                        //   color="#DCDCDC"
                        //   size={22}
                        // />
                        <Text>Down</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
                {isOpen == item.id
                  ? item.detail.map((e, i) => (
                      <LinearGradient
                        key={i}
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 0.0, y: 1.0}}
                        useAngle={true}
                        angle={180}
                        locations={[0.0, 0.5078, 1.0]}
                        colors={['#4F5562', '#3B4353', '#1A1D24']}
                        style={styles.horseDetail}>
                        <View style={styles.HorseTop}>
                          <View style={styles.TxtHorseTop}>
                            <View style={styles.txtTop}>
                              <Text style={styles.txtTitle}>Blood line :</Text>
                              <Text style={styles.txtDescription}>
                                {e.blood}
                              </Text>
                              <Text style={[styles.txtTitle, {marginTop: 10}]}>
                                Gender :
                              </Text>
                              <Text style={styles.txtDescription}>
                                {e.gender}
                              </Text>
                              <Text style={[styles.txtTitle, {marginTop: 10}]}>
                                Type :
                              </Text>
                              <Text style={styles.txtDescription}>
                                {e.type}
                              </Text>
                              <Text style={[styles.txtTitle, {marginTop: 10}]}>
                                Color :
                              </Text>
                              <Text style={styles.txtDescription}>
                                {e.color}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.HorseTopLeft}>
                            <Image
                              source={images.horse1}
                            />
                          </View>
                        </View>
                        <View style={styles.horseTopBottom}>
                          <View style={styles.txtTop}>
                            <Text style={[styles.txtTitle, {}]}>
                              Characteris :
                            </Text>
                            <Text style={styles.txtDescription}>
                              {e.characteris}
                            </Text>
                          </View>
                          <View style={styles.txtTop}>
                            <Text style={[styles.txtTitle, {}]}>
                              Running type :
                            </Text>
                            <Text style={styles.txtDescription}>
                              {e.running_type}
                            </Text>
                          </View>
                          <View style={styles.txtTop}>
                            <Text style={[styles.txtTitle, {}]}>
                              Win rates :
                            </Text>
                            <Text style={styles.txtDescription}>
                              {e.win_rates}
                            </Text>
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
                            <Text style={styles.txtRate}>
                              Dirt{'\n'}suitability
                            </Text>
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
                                  colors={[
                                    '#EDC53A',
                                    '#B26F29',
                                    '#FFF873',
                                    '#DD9A09',
                                  ]}
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
                                <Text style={styles.title}>
                                  Karitekisuto race
                                </Text>
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
                                <Text style={styles.title}>
                                  Karitekisuto race
                                </Text>
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
                                <Text style={styles.title}>
                                  Karitekisuto race
                                </Text>
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
                              colors={[
                                '#3cb0ff',
                                '#3eb1ff',
                                '#80ccff',
                                '#3eb1ff',
                                '#3cb0ff',
                              ]}
                              style={[
                                styles.btnHorse,
                                {borderColor: '#3C7CDD', borderWidth: 0.5},
                              ]}>
                              <LinearTextGradient
                                start={{x: 0.0, y: 0.0}}
                                end={{x: 0.0, y: 1.0}}
                                useAngle={true}
                                angle={360}
                                locations={[
                                  -0.0937,
                                  0.0259,
                                  0.2196,
                                  0.8918,
                                  1.0,
                                ]}
                                colors={[
                                  '#FFAE00',
                                  '#FED943',
                                  '#FFF39F',
                                  '#FFF39F',
                                  '#FFAE00',
                                ]}
                                style={styles.txtBtn}>
                                <Text> Know your horse</Text>
                              </LinearTextGradient>
                            </LinearGradient>
                          </View>
                          <TouchableOpacity
                            onPress={() => navigation.navigate('HorseDetail', {data: e})}>
                            <View style={styles.button}>
                              <LinearGradient
                                start={{x: 0.0, y: 0.0}}
                                end={{x: 0.0, y: 1.0}}
                                useAngle={true}
                                angle={90}
                                locations={[0.0, 0.35, 0.5, 0.65, 1.0]}
                                colors={[
                                  '#189803',
                                  '#33c81c',
                                  '#4ee835',
                                  '#33c81c',
                                  '#189803',
                                ]}
                                style={[
                                  styles.btnHorse,
                                  {borderColor: '#0F6301', borderWidth: 0.5},
                                ]}>
                                <LinearTextGradient
                                  start={{x: 0.0, y: 0.0}}
                                  end={{x: 0.0, y: 1.0}}
                                  useAngle={true}
                                  angle={360}
                                  locations={[
                                    -0.0937,
                                    0.0259,
                                    0.2196,
                                    0.8918,
                                    1.0,
                                  ]}
                                  colors={[
                                    '#FFAE00',
                                    '#FED943',
                                    '#FFF39F',
                                    '#FFF39F',
                                    '#FFAE00',
                                  ]}
                                  style={styles.txtBtn}>
                                  <Text> Detail horse</Text>
                                </LinearTextGradient>
                              </LinearGradient>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </LinearGradient>
                    ))
                  : null}
              </View>
            ))}
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

export default RaceCard;

const styles = StyleSheet.create({
  txtBtn: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
  },
  btnHorse: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    width: 181,
    height: 38,
    borderRadius: 7,
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: (0, 0, 2),
    width: 183,
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
    padding: 8,
    width: 386,
    height: 616,
  },
  txtSort: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: '#fff',
    marginTop: 1,
  },
  txt: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#fff',
  },
  txtNumber: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'right',
    color: '#fff',
    marginTop: -12,
    marginLeft: -20,
  },
  rowList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    marginLeft: -1,
    width: 386,
    height: 40,
  },
  act: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 41,
    height: 45,
    justifyContent: 'center',
    borderTopRightRadius: 7,
  },
  borderAct: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 44,
    height: 48,
    borderTopRightRadius: 7,
  },
  owner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 113,
    height: 45,
    justifyContent: 'center',
  },
  borderOwner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 114,
    height: 48,
  },
  career: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
    height: 45,
    justifyContent: 'center',
  },
  borderCareer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 71,
    height: 48,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 115,
    height: 45,
    justifyContent: 'center',
  },
  borderName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 116,
    height: 48,
  },
  txtTable: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#fff',
  },
  borderNo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 44,
    height: 48,
    borderTopLeftRadius: 7,
  },
  no: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (12, 8),
    width: 43,
    height: 45,
    borderTopLeftRadius: 8,
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 386,
    height: 48,
    marginTop: -3,
  },
  Placeholder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 1.5,
    width: 390,
    height: 1146,
    borderColor: '#383838',
    borderWidth: 1,
    borderRadius: 9,
  },
  ContainerTable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 1,
    width: 392,
    // height: 1134,
    borderColor: '#FFAE00',
    borderWidth: 1,
    borderRadius: 10,
  },
});
