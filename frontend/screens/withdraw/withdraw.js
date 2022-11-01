import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import { Info } from '../../../components'
import { dummyData, images } from '../../../constants'

export default function WidthDraw() {
  const [number, onChangeNumber] = useState('50');
  const [fee, onChangeFee] = useState('0');

  return (
    <ScrollView>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={180}
        locations={[0.0, 1.0]}
        colors={['#4F5562', '#1A1D24']}
        style={styles.container}>
        <Info/>
        <View style={styles.layout}>
          <View style={styles.containerWallet}>
            <Text style={styles.title}>Your wallet address :</Text>
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
              style={styles.border}>
              <View style={styles.zIndexBorder}>
                <View style={styles.wallet}>
                  <View style={styles.address}>
                    <Text style={styles.txtAddress}>
                      1QRK-36A9-4YQT-Q4JR-1QRK-36A9
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.amount}>
            <Text style={styles.title}>Amount :</Text>
            <TextInput
              style={[styles.txtAddress, styles.input]}
              onChangeText={(number) => onChangeNumber(number)}
              value={number}
              placeholder="Number amount"
              placeholderTextColor="#00CDEC"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.containerNumber}>
            <View style={styles.containerTop}>
              {dummyData.listAmount.map(item =>
                item.id == 5 ? null : item.id == 6 ? null : item.id ==
                  7 ? null : item.id == 8 ? null : (
                  <TouchableOpacity >
                    <View style={styles.number}>
                      <Text style={[styles.txtAddress, {color: '#FFFFFF'}]}>
                        {item.amount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ),
              )}
            </View>
            <Divider style={{height: 16}} />
            <View style={styles.containerTop}>
              {dummyData.listAmount.map(item =>
                item.id == 1 ? null : item.id == 2 ? null : item.id ==
                  3 ? null : item.id == 4 ? null : (
                  <TouchableOpacity>
                    <View style={styles.number}>
                      <Text style={[styles.txtAddress, {color: '#FFFFFF'}]}>
                        {item.amount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ),
              )}
            </View>
          </View>
          <View style={styles.amount}>
            <Text style={styles.title}>Fee :</Text>
            <TextInput
              style={[styles.txtAddress, styles.input]}
              onChangeText={onChangeFee}
              value={fee}
              placeholderTextColor="#00CDEC"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.textNoti}>
            <View style={styles.txtTop}>
              {/* <FontAwesomeIcon
                icon={faCircle}
                size={8}
                style={{marginTop: 10}}
                color="#E31100"
              /> */}
              <Text
                style={[
                  styles.txtAddress,
                  {color: '#E31100', height: 48, marginLeft: 4},
                ]}>
                After you click Submit, it will take some time for the system to
                process until it is authenticated.
              </Text>
            </View>
            <View style={styles.txtMid}>
              {/* <FontAwesomeIcon
                icon={faCircle}
                size={8}
                style={{marginTop: 10}}
                color="#E31100"
              /> */}
              <Text
                style={[
                  styles.txtAddress,
                  {color: '#E31100', height: 24, marginLeft: 4},
                ]}>
                The withdraw fee will be used as the transfer fee.
              </Text>
            </View>
            <View style={styles.txtBottom}>
              {/* <FontAwesomeIcon
                icon={faCircle}
                size={8}
                style={{marginTop: 10}}
                color="#E31100"
              /> */}
              <Text
                style={[
                  styles.txtAddress,
                  {color: '#E31100', height: 72, marginLeft: 4},
                ]}>
                The amount of SPC after withdrawing will be saved in Specter
                Chain wallet, please convert to Spectre network to check the
                balance.
              </Text>
            </View>
          </View>
          <Image
            source={images.submit}
            style={styles.button}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 382,
    height: 47,
    marginTop: 30,
  },
  txtBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 382,
    height: 72,
    marginTop: 4,
  },
  txtMid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 382,
    height: 24,
    marginTop: 4,
  },
  txtTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 382,
    height: 48,
  },
  textNoti: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 382,
    height: 160,
    marginTop: 20,
  },
  number: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: 85,
    height: 40,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 4,
    marginRight: 14,
  },
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 382,
    height: 40,
  },
  containerNumber: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 382,
    height: 96,
    marginTop: 20,
  },
  input: {
    width: '99%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(223, 230, 233, 0.25)',
  },
  amount: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 382,
    height: 56,
    marginTop: 14,
  },
  txtAddress: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: '#00CDEC',
    letterSpacing: 0.02,
  },
  address: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 368,
    height: 24,
  },
  wallet: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: 380,
    height: 45,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 9,
  },
  zIndexBorder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    height: 45,
    backgroundColor: 'rgb(85, 91, 97)',
    borderRadius: 9,
  },
  border: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 1,
    width: 382,
    height: 48,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#C5C5C5',
    marginBottom: 8,
  },
  containerWallet: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
    width: 382,
    height: 82,
    marginTop: 50,
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 0,
    width: 382,
    height: 544,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    width: 428,
    height: 821,
    overflow: 'scroll',
  },
});