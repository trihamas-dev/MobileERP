import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import imgHeader from '../../Assets/Img/header.png';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}> */}
      <ImageBackground source={imgHeader} style={styles.imgBg}>
        <View style={styles.headerNav}></View>
        <View style={styles.headerCaption}>
          <Text style={styles.txtHeader}>Dashboard</Text>
          <Text style={styles.txtSubHeader}>Welcome ....</Text>
        </View>
      </ImageBackground>
      {/* </View> */}
      <View style={styles.content}>
        <View style={styles.menu}>
          <View style={styles.menu}>
            <View style={styles.box} />
          </View>
          <View>
            <Text>1</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>1</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>1</Text>
          </View>
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
    backgroundColor: '#EFE8E8',
    flex: 1,
  },
  headerCaption: {
    flex: 2,
    padding: 20,
  },
  headerNav: {
    marginBottom: 10,
    borderWidth: 2,
    flex: 1,
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
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
  },
  menu: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    flex: 1,
  },
  box: {
    borderWidth: 1,
    width: 120,
    height: 100,
    backgroundColor: 'white',
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
