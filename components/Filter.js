import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import { dummyData} from "../constants"

export default function Filter() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [valueType, setValueType] = useState(null);
  const [isFocusType, setIsFocusType] = useState(false);

  return (
    <>
      <View style={styles.formInput}>
        <Text style={styles.txtLabel}>Class :</Text>
        <Dropdown
          style={[styles.dropdown, isFocus]}
          placeholderStyle={styles.txtInput}
          selectedTextStyle={styles.txtInput}
          iconStyle={styles.iconStyle}
          data={dummyData.dataClass}
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
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            // <FontAwesomeIcon icon={faCaretDown} color="#DCDCDC" size={22} />
            <Text>aaa</Text>
          )}
        />
      </View>
      <View style={styles.formInput}>
        <Text style={styles.txtLabel}>Field type :</Text>
        <Dropdown
          style={[styles.dropdown, isFocusType]}
          placeholderStyle={styles.txtInput}
          selectedTextStyle={styles.txtInput}
          iconStyle={styles.iconStyle}
          data={dummyData.dataType}
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
          placeholder={!isFocusType ? 'Select item' : 'Search ...'}
          value={valueType}
          onFocus={() => setIsFocusType(true)}
          onBlur={() => setIsFocusType(false)}
          onChange={item => {
            setValueType(item.value);
            setIsFocusType(false);
          }}
          renderRightIcon={() => (
            // <FontAwesomeIcon icon={faCaretDown} color="#DCDCDC" size={22} />
            <Text>aaa</Text>
          )}
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
