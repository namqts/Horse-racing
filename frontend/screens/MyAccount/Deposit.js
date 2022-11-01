import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { icons } from '../../../constants';

const horseList = [
  {
    id: 1,
    time: '2020-05-03 08:14:01',
    SPC: '536',
    background: 'rgba(0, 20, 30, 0.75)',
    state: 'Pending',
    detail: [{address: '3315816b-3d-b5a0a057-e7'}],
  },
  {
    id: 2,
    time: '2020-05-05 10:21:13',
    SPC: '185',
    background: 'rgba(0, 20, 30, 0.75)',
    state: 'Success',
    detail: [{address: '6985816b-3d-b5a0a057-r5'}],
  },
  {
    id: 3,
    time: '2020-05-05 10:21:13',
    SPC: '185',
    background: 'rgba(0, 20, 30, 0.75)',
    state: 'Success',
    detail: [{address: '5482816b-3d-b5a0a057-c9'}],
  },
];

function RaceCard() {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenId = isOpen => {
    setIsOpen(isOpen);
  };

  return (
    <View style={styles.tableTansho}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={360}
        locations={[0.0, 0.4479, 0.4792, 1.0]}
        colors={['#F5DE55', '#EAC23B', '#FFF873', '#DD9A09']}
        style={[
          styles.ContainerTable,
          isOpen ? {height: 209} : {height: 169},
        ]}>
        <View style={styles.header1}>
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
            <View style={styles.no}>
              <Text style={styles.txtTable}>Time</Text>
            </View>
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
            <View style={styles.name}>
              <Text style={styles.txtTable}>SPC</Text>
            </View>
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
            <View style={styles.career}>
              <Text style={styles.txtTable}>State</Text>
            </View>
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
            <View style={styles.act}>
              <Text style={styles.txtTable}>Code</Text>
            </View>
          </LinearGradient>
        </View>

        <View>
          {horseList.map(item => (
            <>
              <View style={styles.rowList}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 7,
                    width: 172,
                    height: 40,
                    marginLeft: 1,
                    backgroundColor: item.background,
                    borderColor: '#A4A4A4',
                    borderWidth: 0.5,
                  }}>
                  <Text style={styles.txt}>{item.time}</Text>
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
                  <Text style={styles.txt}>{item.SPC}</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 7,
                    width: 80,
                    height: 40,
                    backgroundColor: item.background,
                    borderColor: '#A4A4A4',
                    borderWidth: 0.5,
                  }}>
                  <Text style={styles.txt}>{item.state}</Text>
                </View>
                <TouchableOpacity onPress={() => setIsOpenId(item.id)}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 7,
                      width: 53,
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
                ? item.detail.map(e => (
                    <View style={styles.depositDetail}>
                      <Text style={styles.txtAddress}>{e.address}</Text>
                      <Image source={icons.copy} style={{ marginRight: 8 }}/>
                    </View>
                  ))
                : null}
            </>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

export default RaceCard;

const styles = StyleSheet.create({
  txtAddress: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#00CDEC',
  },
  depositDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
    width: 376,
    height: 40,
    marginLeft: 2,
    backgroundColor: '#000000',
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
    fontSize: 12,
    lineHeight: 18,
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
    marginLeft: 1,
    width: 378,
    height: 40,
    backgroundColor: 'rgb(85, 91, 97)',
  },
  act: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 51,
    height: 45,
    justifyContent: 'center',
    borderTopRightRadius: 7,
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
  },
  borderAct: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 55,
    height: 48,
    borderTopRightRadius: 7,
  },
  numb: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 114,
    height: 39,
    justifyContent: 'flex-start',
    paddingLeft: 8,
    borderBottomRightRadius: 7,
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
  },
  borderNumb: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 117,
    height: 40,
    borderBottomRightRadius: 7,
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
    width: 80,
    height: 45,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
  },
  borderCareer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 80,
    height: 48,
    backgroundColor: '#000',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 69,
    height: 45,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
  },
  borderName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 70,
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
    width: 173,
    height: 48,
    borderTopLeftRadius: 7,
  },
  no: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (12, 8),
    width: 172,
    height: 48,
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
    borderTopLeftRadius: 7,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  borderTotal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 271.5,
    height: 40,
    borderBottomLeftRadius: 7,
  },
  Total: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (12, 8),
    width: 271,
    height: 39,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
  },
  header1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 1,
    width: 380,
    height: 48,
  },
  ContainerTable: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 380,
    // height: 169,
    borderRadius: 6,
  },
  tableTansho: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 396,
    height: 254,
  },
});
