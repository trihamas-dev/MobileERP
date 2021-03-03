import React from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import imgSplash from '../../../PrototypeERP/ss2.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Dashboard');
    }, 2000);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={imgSplash} style={{flex: 1}} />
      {/* <Text>ERP</Text> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
