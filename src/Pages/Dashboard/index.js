import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from 'react-native-reanimated';
import imgHeader from '../../Assets/Img/header.png';
import icUser from '../../Assets/Icon/ic_user.png';
import Icon from '../../Assets/Icon';
const IMEI = require('react-native-imei');
const Dashboard = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}> */}
      <ImageBackground source={imgHeader} style={styles.imgBg}>
        <View style={styles.headerNav}>
          <TouchableOpacity
            style={styles.navBox}
            onPress={() => alert('Coming Soon !')}>
            <Image source={Icon.icUser} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerCaption}>
          <Text style={styles.txtHeader}>Dashboard</Text>
          <Text style={styles.txtSubHeader}>Welcome ....</Text>
          <Text style={styles.txtSubHeader}>My IMEI Number</Text>
          <Text style={styles.txtSubHeader}></Text>
        </View>
      </ImageBackground>
      {/* </View> */}
      <View style={styles.content}>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('LoanCalculator')}
            underlayColor="blue">
            <Image source={Icon.icLoanCal} style={styles.imgIcon} />
            <Text style={styles.BoxText}>Loan Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => alert('Coming Soon !')}>
            <Image source={Icon.icLoan} style={styles.imgIcon} />
            <Text style={styles.BoxText}>Personal Loan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => alert('Coming Soon !')}>
            <Image source={Icon.icAbout} style={styles.imgIcon} />
            <Text style={styles.BoxText}>About ERP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => alert('Coming Soon !')}>
            <Image source={Icon.icAbt_thf} style={styles.imgIcon} />
            <Text style={styles.BoxText}>About Trihamas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => alert('Coming Soon !')}>
            <Image source={Icon.icBranch} style={styles.imgIcon} />
            <Text style={styles.BoxText}>Branch Office</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => alert('Coming Soon !')}>
            <Image source={Icon.icSetting} style={styles.imgIcon} />
            <Text style={styles.BoxText}>Setting</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.rowFooter} />
        <Text style={styles.textfooter}>ERP by Trihamas Finance</Text>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    flex: 1,
  },
  headerCaption: {
    flex: 2,
    paddingLeft: 20,
  },
  headerNav: {
    marginBottom: 10,
    marginRight: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navBox: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 50,
    height: 50,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  txtHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'roboto',
    letterSpacing: 5,
  },
  txtSubHeader: {
    fontSize: 10,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'roboto',
    letterSpacing: 2,
    marginTop: 5,
  },
  content: {
    backgroundColor: '#EFE8E8',
    marginTop: -50,
    flex: 7,
    padding: 40,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  menu: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    flex: 1,
    marginBottom: 30,
    justifyContent: 'space-between',
    alignContent: 'stretch',
  },
  box: {
    width: 120,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 4.65,
    shadowOpacity: 0.29,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgIcon: {
    width: 60,
    height: 60,
    alignContent: 'stretch',
    justifyContent: 'center',
  },
  BoxText: {
    marginTop: 10,
    color: '#837878',
    fontSize: 10,
    fontFamily: 'roboto',
    fontWeight: '400',
    letterSpacing: 2,
  },
  footer: {
    backgroundColor: '#EFE8E8',
    flex: 0,

    justifyContent: 'center',
  },
  textfooter: {
    color: 'black',
    textAlign: 'center',
    opacity: 0.5,
    fontSize: 8,
    fontFamily: 'roboto',
    letterSpacing: 2,
    marginBottom: 6,
    marginTop: 7,
  },
  rowFooter: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    color: '#8D7676',
    opacity: 0.5,
  },
  imgBg: {
    height: 220,
  },
});
