import React from 'react'
import { StyleSheet, Text, View, Button,TouchableOpacity,PermissionsAndroid,Platform,Alert } from 'react-native'


export async function request_READ_PHONE_STATE() {
 
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE ,
      {
        'title': 'ReactNativeCode wants to READ_PHONE_STATE',
        'message': 'ReactNativeCode App needs access to your personal data. '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
 
      Alert.alert("Permission Granted.");
    }
    else {
 
      Alert.alert("Permission Not Granted");
 
    }
  } catch (err) {
    console.warn(err)
  }
}
export default class CekImei extends React.Component {

  constructor () {
    super()
    this.state = {
      device_IMEI : '',
    }
  }
  async componentDidMount() {
 
    await request_READ_PHONE_STATE() ;
 
  }
  getDeviceIMEI = () => {
    const IMEI = require('react-native-imei')
    var IMEI_2 = IMEI.getImei().then(imeiList => {
      this.setState({ device_IMEI : imeiList });
      console.log(this.state.device_IMEI);
    });
    
      // _wsJsonConnectionHTTP("check_imei", "imei_no=192891028101829101", (d) => {
        //d.value
    // });
    
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center' , marginBottom: 20, fontSize: 20}}>{this.state.device_IMEI[0]} </Text>
        <Text style={{textAlign: 'center' , marginBottom: 20, fontSize: 20}}>{this.state.device_IMEI[1]} </Text>

<Button title="Click Here to Get Device IMEI Number" onPress={this.getDeviceIMEI}/>
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