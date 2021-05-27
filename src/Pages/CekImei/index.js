import React from 'react'
import { StyleSheet, Text, View, Button,TouchableOpacity,PermissionsAndroid,Platform,Alert, TextInput } from 'react-native'
import { _wsJsonConnectionHTTP } from '../../fungsi/function';


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
      IMEI : '',
    }
  }
  async componentDidMount() {
 
    await request_READ_PHONE_STATE() ;
    const IMEI = require('react-native-imei')
    let imei="";
    var IMEI_2 = IMEI.getImei().then(imeiList => {
      this.setState({ device_IMEI : imeiList });
      imei=imeiList;
      this.state.setState({
        device_IMEI : '',
        IMEI : imei,
      });
      // console.log(this.state.device_IMEI);
    });
 
  }
  getDeviceIMEI = () => {
    _wsJsonConnectionHTTP("check_imei", "imei_no="+this.state.device_IMEI[0], (d) => {
     //  Alert.alert("info","status="+this.state.device_IMEI);
      Alert.alert(d.value);
   });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center' , marginBottom: 20, fontSize: 20}}>{this.state.device_IMEI[0]} </Text>
        <Text style={{textAlign: 'center' , marginBottom: 20, fontSize: 20}}>{this.state.device_IMEI[1]} </Text>
        <TextInput  value={this.state.IMEI}>{this.state.IMEI}</TextInput>
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