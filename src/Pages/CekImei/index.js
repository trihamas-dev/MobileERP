import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, PermissionsAndroid, Platform, Alert, TextInput } from 'react-native'
import { _wsJsonConnectionHTTP } from '../../fungsi/function';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export async function request_READ_PHONE_STATE() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      {
        'title': 'ReactNativeCode wants to READ_PHONE_STATE',
        'message': 'ReactNativeCode App needs access to your personal data. '
      }
    )

    if (granted == PermissionsAndroid.RESULTS.GRANTED) return true;
    else {
      Alert.alert("Permission Not Granted");
      return false;
    }
    /*
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
 
      Alert.alert("Permission Granted.");
    }
    else {
 
      Alert.alert("Permission Not Granted");
 
    }
    */
  } catch (err) {
    console.warn(err)
    return false;
  }
}
export default class CekImei extends React.Component {

  constructor() {
    super()
    this.state = {
      device_IMEI: '',
      IMEI: '',
      status: 'Checking IMEI...'
    }
  }

  async componentDidMount() {
    if (await request_READ_PHONE_STATE() == false) return;

    const IMEI = require('react-native-imei')
    let imei = "";

    var IMEI_2 = IMEI.getImei().then(imeiList => {
      this.setState({
        device_IMEI: imeiList,
        IMEI: imeiList.toString()
      });

      this.getDeviceIMEI();
    });

  }

  getDeviceIMEI = () => {
    _wsJsonConnectionHTTP("check_imei", "imei_no=" + this.state.IMEI, (d) => {
      if (d.value > 0) this.props.navigation.navigate('LoanCalculator'); else this.setState({ status: 'IMEI tidak terdaftar, hubungi admin...' });
    });
  }

  render() {
    return (

      <View style={styles.container}>
        <TextInput>{this.state.IMEI}</TextInput>
        <Text>{this.state.status}</Text>
        {/* <Button title="Click Here to Get Device IMEI Number" onPress={() => this.getDeviceIMEI()} /> */}
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})