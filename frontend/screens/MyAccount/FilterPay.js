import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Deposit', value: '1'},
  {label: 'Withdraw', value: '2'},
];

const dataState = [
  {label: 'Failure', value: '1'},
  {label: 'Success', value: '2'},
  {label: 'Pending', value: '3'},
  {label: 'All', value: '4'},
];

export default function FilterPay() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [valueStart, setValueStart] = useState(null);
  const [isFocusStart, setIsFocusStart] = useState(false);

  const [valueEnd, setValueEnd] = useState(null);
  const [isFocusEnd, setIsFocusEnd] = useState(false);

  const [valueState, setValueState] = useState(null);
  const [isFocusState, setIsFocusState] = useState(false);

  return (
    <>
      <View style={styles.formInput}>
        <Text style={styles.txtLabel}>Transaction type :</Text>
        <Dropdown
          style={[styles.dropdown, isFocus]}
          placeholderStyle={styles.txtInput}
          selectedTextStyle={styles.txtInput}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          activeColor="#04234B"
          itemTextStyle={[styles.txtInput, {color: '#FFFFFF'}]}
          itemContainerStyle={{
            borderBottomWidth: 1,
            borderColor: 'rgba(223, 230, 233, 0.25)',
          }}
          containerStyle={{
            borderRadius: 8,
            padding: 1,
            marginTop: 4,
            backgroundColor: '#04234B',
          }}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : 'Search ...'}
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          // renderRightIcon={() => (
          //   <FontAwesomeIcon icon={faCaretDown} color="#DCDCDC" size={22} />
          // )}
        />
      </View>
      <View style={styles.formInput}>
        <Text style={styles.txtLabel}>Start day :</Text>
        <Dropdown
          style={[styles.dropdown, isFocusStart]}
          placeholderStyle={styles.txtInput}
          selectedTextStyle={styles.txtInput}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          activeColor="#04234B"
          itemTextStyle={[styles.txtInput, {color: '#FFFFFF'}]}
          itemContainerStyle={{
            borderBottomWidth: 1,
            borderColor: 'rgba(223, 230, 233, 0.25)',
          }}
          containerStyle={{
            borderRadius: 8,
            padding: 1,
            marginTop: 4,
            backgroundColor: '#04234B',
          }}
          labelField="label"
          valueField="value"
          placeholder={!isFocusStart ? 'Select item' : 'Search ...'}
          value={valueStart}
          onChange={item => {
            setValueStart(item.value);
          }}
          // renderRightIcon={() => (
          //   <FontAwesomeIcon icon={faCaretDown} color="#DCDCDC" size={22} />
          // )}
        />
      </View>
      <View style={styles.formInput}>
        <Text style={styles.txtLabel}>End day :</Text>
        <Dropdown
          style={[styles.dropdown, isFocusEnd]}
          placeholderStyle={styles.txtInput}
          selectedTextStyle={styles.txtInput}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          activeColor="#04234B"
          itemTextStyle={[styles.txtInput, {color: '#FFFFFF'}]}
          itemContainerStyle={{
            borderBottomWidth: 1,
            borderColor: 'rgba(223, 230, 233, 0.25)',
          }}
          containerStyle={{
            borderRadius: 8,
            padding: 1,
            marginTop: 4,
            backgroundColor: '#04234B',
          }}
          labelField="label"
          valueField="value"
          placeholder={!isFocusEnd ? 'Select item' : 'Search ...'}
          value={valueEnd}
          onChange={item => {
            setValueEnd(item.value);
          }}
          // renderRightIcon={() => (
          //   <FontAwesomeIcon icon={faCaretDown} color="#DCDCDC" size={22} />
          // )}
        />
      </View>
      <View style={styles.formInput}>
        <Text style={styles.txtLabel}>State :</Text>
        <Dropdown
          style={[styles.dropdown, isFocusState]}
          placeholderStyle={styles.txtInput}
          selectedTextStyle={styles.txtInput}
          iconStyle={styles.iconStyle}
          data={dataState}
          maxHeight={300}
          activeColor="#04234B"
          itemTextStyle={[styles.txtInput, {color: '#FFFFFF'}]}
          itemContainerStyle={{
            borderBottomWidth: 1,
            borderColor: 'rgba(223, 230, 233, 0.25)',
          }}
          containerStyle={{
            borderRadius: 8,
            padding: 1,
            marginTop: 4,
            backgroundColor: '#04234B',
          }}
          labelField="label"
          valueField="value"
          placeholder={!isFocusState ? 'Select item' : 'Search ...'}
          value={valueState}
          onChange={item => {
            setValueState(item.value);
          }}
          // renderRightIcon={() => (
          //   <FontAwesomeIcon icon={faCaretDown} color="#DCDCDC" size={22} />
          // )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: '#00CDEC',
  },
  dropdown: {
    width: 382,
    height: 50,
    borderColor: '#A4A4A4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 9,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  txtLabel: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#C5C5C5',
  },
  formInput: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
    width: 396,
    height: 72,
    borderRadius: 10,
    marginBottom: 17,
  },
});
