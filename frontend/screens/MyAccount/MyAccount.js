import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { AcceptWallet, Info } from '../../../components';
import Deposit from './Deposit';
import RBSheet from 'react-native-raw-bottom-sheet';
import { images, windowHeight, windowWidth } from '../../../constants'
import FilterRace from '../../../components/FilterRace';

const listTab = [
  {
    status: 'Deposit',
    color: '#2c7dc3',
  },
  {
    status: 'Withdraw',
    color: '#2c7dc3',
  },
];

const data = [
  {
    id: 1,
  },
];

export default function MyAccount(props) {
  const [status, setStatus] = useState('Deposit');
  const [datalist, setDatalist] = useState(data);

  const refRBSheet = useRef();

  const setStatusFilter = status => {
    if (status !== 'Deposit') {
      setDatalist(data);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

  const renderItem = ({item, index}) => {
    return <Deposit />
  };

  return (
    <View style={styles.container}>
      <Info />

      <View style={{marginBottom: 45}} />
      <ScrollView>
        <View style={styles.containerScroll}>
          <View style={styles.nickName}>
            <Text style={styles.label}>Nickname :</Text>
            <AcceptWallet/>
          </View>
          <View style={styles.nickName}>
            <Text style={styles.label}>Your wallet address :</Text>
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
              style={styles.containerAddress}>
              <View style={styles.borderWallet}>
                <View style={styles.containerWallet}>
                  <View style={styles.wallet}>
                    <Text style={styles.txt}>
                      1QRK-36A9-4YQT-Q4JR-1QRK-36A9
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.containerPayment}>
            <View style={styles.containerTable}>
              <View style={styles.labelFilter}>
                <Text style={styles.label}>Payment history :</Text>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                  <Image source={images.filterPay} />
                </TouchableOpacity>
              </View>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={360}
                locations={[0.0, 0.4479, 0.4792, 1.0]}
                colors={['#F5DE55', '#EAC23B', '#FFF873', '#DD9A09']}
                style={styles.tabs}>
                <LinearGradient
                  start={{x: 0.0, y: 0.0}}
                  end={{x: 0.0, y: 1.0}}
                  useAngle={true}
                  angle={90}
                  locations={[0.0, 0.22, 0.51, 0.78, 1.0]}
                  colors={[
                    '#245494',
                    '#2c7dc3',
                    '#10b3e8',
                    '#2c7dc3',
                    '#245494',
                  ]}
                  style={styles.border}>
                  <View style={styles.content}>
                    {listTab.map(e => (
                      <TouchableOpacity
                        style={[
                          styles.deposit,
                          status === e.status &&
                            styles.withdraw && {backgroundColor: e.color},
                        ]}
                        onPress={() => setStatusFilter(e.status)}>
                        <Text style={styles.TxtTitle}>{e.status}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </LinearGradient>
              </LinearGradient>
              <FlatList
                data={datalist}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
                style={{marginTop: -10}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
            backgroundColor: 'rgba(0, 20, 31, 0.98)',
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: 'rgba(223, 230, 233, 0.25)',
            width: 134,
          },
        }}>
        <FilterRace/>
        <View style={styles.menu}>
          <View style={styles.layout}>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Image
                source={images.btnAccept}
                style={{
                  width: windowWidth - 18,
                  height: windowHeight - 640,
                  marginLeft: -(windowWidth - 407),
                  marginTop: windowHeight - 663,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 396,
    height: 336,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: (0, 16),
    width: 428,
    height: 415,
    marginTop: 53
  },
  withdraw: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: (4, 21),
    width: 124,
    height: 32,
    borderRadius: 4,
    marginTop: -8,
    marginRight: 2,
    marginLeft: 2,
  },
  TxtTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 0.02,
    color: '#fff',
  },
  deposit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: (4, 21),
    backgroundColor: 'rgba(223, 230, 233, 0.25)',
    width: 182,
    height: 32,
    borderRadius: 4,
    marginTop: -8,
    marginLeft: 4,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    width: 376,
    height: 58,
    overflow: 'scroll',
    backgroundColor: '#04234B',
    borderRadius: 6,
  },
  border: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    width: 378,
    height: 62,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#585F6C',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 380,
    height: 64,
    borderRadius: 8,
  },
  labelFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    width: 380,
    height: 40,
  },
  containerTable: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 400,
    height: 491,
  },
  containerPayment: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
    width: 381,
    height: 539,
  },
  txt: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: 0.02,
    color: '#00CDEC',
    width: 342,
  },
  wallet: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 366,
    height: 28,
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
  containerAddress: {
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
  label: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#C5C5C5',
  },
  nickName: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
    width: 380,
    height: 72,
    borderRadius: 10,
    marginTop: 15,
  },
  containerScroll: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 428,
    height: 821,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    width: 428,
    height: 821,
  },
});
