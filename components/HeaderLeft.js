import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { icons, images } from '../constants';

function HeaderLeft() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      useAngle={true}
      angle={180}
      locations={[0.0, 0.6279, 0.6868, 1.0]}
      angleCenter={{x: 0.5, y: 0.5}}
      colors={['#616B80', '#3A4459', '#2C3649', '#2B354A']}
      style={styles.frameLeft}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image source={icons.back} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default HeaderLeft;

const styles = StyleSheet.create({
  frameLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (6, 16, 6, 6),
    width: 55,
    height: 48,
    shadowColor: 'inset 0px 0px 2px rgba(0, 0, 0, 0.75)',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: '#6E6E6E',
    borderWidth: 0.5,
    marginTop: 14,
  },
});
