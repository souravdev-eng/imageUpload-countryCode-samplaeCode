import React, { useState } from 'react';
import { View, Text, StyleSheet, PixelRatio, TextInput } from 'react-native';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
// import { CountryCode, Country } from './src/types';

export default function PhoneNumber() {
  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 20,
          fontWeight: 'bold',
          color: 'rgba(0,0,256,0.6)',
        }}>
        Country Code picker
      </Text>
      <View style={styles.container}>
        <CountryPicker
          onSelect={(res) => setCountryCode(res.cca2)}
          countryCode={countryCode}
          withFilter
          withCallingCode={true}
          withCallingCodeButton
          withFlagButton={false}
        />

        <TextInput
          placeholder='Your number'
          style={{ marginLeft: 10 }}
          keyboardType='number-pad'
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderWidth: 0.5,
    width: '80%',
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,256,0.1)',
  },
});
