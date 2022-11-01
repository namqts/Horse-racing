import React, {useRef} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import { icons } from '../constants';

function HeaderRight() {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={180}
        locations={[0.0, 0.1615, 0.6426, 0.6927, 0.9615, 1.0]}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[
          '#F8F8F8',
          '#B5B4B4',
          '#F1F1F1',
          '#504F4F',
          '#A7A7A7',
          '#D0D0D0',
        ]}
        style={styles.frameRight}>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Image source={icons.menu} />
        </TouchableOpacity>
      </LinearGradient>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        height={610}
        customStyles={{
          container: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            backgroundColor: 'rgba(0, 20, 30, 0.95)',
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: '#BDBDBD',
            width: 134,
          },
        }}>
        <View style={styles.menu}>
          <View style={styles.containerIcon}>
            <TouchableOpacity
              onPress={() => [
                navigation.navigate('MyAccount'),
                refRBSheet.current.close(),
              ]}>
              <View style={styles.container}>
                <Image
                  source={icons.profile}
                  style={{width: 70, height: 85}}
                />
                <Text style={styles.text}>My account</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [
                navigation.navigate('News'),
                refRBSheet.current.close(),
              ]}>
              <View style={styles.container}>
                <Image
                  source={icons.notification}
                  style={{width: 70, height: 85}}
                />
                <Text style={styles.text}>News</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerIcon}>
            <View style={styles.container}>
              <Image
                source={icons.history}
                style={{width: 70, height: 85}}
              />
              <Text style={styles.text}>Bet history</Text>
            </View>
            <TouchableOpacity
              onPress={() => [
                navigation.navigate('WithDraw'),
                refRBSheet.current.close(),
              ]}>
              <View style={styles.container}>
                <Image
                  source={icons.wallet}
                  style={{width: 70, height: 85}}
                />
                <Text style={styles.text}>Withdraw</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerIcon}>
            <TouchableOpacity
              onPress={() => [
                navigation.navigate('RecentTransfer'),
                refRBSheet.current.close(),
              ]}>
              <View style={styles.container}>
                <Image
                  source={icons.setting}
                  style={{width: 70, height: 85}}
                />
                <Text style={styles.text}>System</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={icons.support}
                style={{width: 70, height: 85}}
              />
              <Text style={styles.text}>Support</Text>
            </View>
          </View>
        </View>
      </RBSheet>
    </>
  );
}

export default HeaderRight;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 150,
    height: 150,
  },
  containerIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 100,
    marginBottom: 30,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: (8, 0, 40),
    position: 'relative',
    width: 428,
    height: 450,
    marginTop: 40,
  },
  frameRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (6, 16, 6, 6),
    width: 74,
    height: 64,
    shadowColor: 'inset 0px 0px 2px rgba(0, 0, 0, 0.75)',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 10,
    marginTop: 12,
  },
});
