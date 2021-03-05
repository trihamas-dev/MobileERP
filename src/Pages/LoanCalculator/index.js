import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from 'react-native-reanimated';

const Hasil = [
  {id: '1', name: 'ulum', nilai: 10},
  {id: '2', name: 'ulum', nilai: 10},
  {id: '3', name: 'ulum', nilai: 10},
  {id: '4', name: 'ulum', nilai: 10},
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LoanCalculator = () => {
  const renderItem = ({item}) => <Item title={item.name} />;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.textInfo}>Loan Information</Text>
        <View style={styles.header}>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
        </View>
        <Text style={styles.textInfo}>Assets Information</Text>
        <View style={styles.header}>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
        </View>
        <Text style={styles.textInfo}>Insurance Information</Text>
        <View style={styles.header}>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" />
              </Picker>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.boxbutton}>
          <Text style={styles.textButton}>Calculate</Text>
        </TouchableOpacity>

        <View style={styles.garis} />

        <Text style={styles.textInfo}>Estimation Result Loan</Text>
        <View style={styles.result}>
          <View style={styles.item}>
            <Text style={styles.title}>Installment</Text>
            <Text style={styles.titleValue}>3.000.000</Text>
          </View>
          <View style={styles.item2}>
            <Text style={styles.title}>Total Fee</Text>
            <Text style={styles.titleValue}>3.000.000</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Total Fee</Text>
            <Text style={styles.titleValue}>3.000.000</Text>
          </View>
          <View style={styles.item2}>
            <Text style={styles.title}>Total Fee</Text>
            <Text style={styles.titleValue}>3.000.000</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Total Fee</Text>
            <Text style={styles.titleValue}>3.000.000</Text>
          </View>
          <View style={styles.item2}>
            <Text style={styles.title}>Total Fee</Text>
            <Text style={styles.titleValue}>3.000.000</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoanCalculator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0ffff',
    flex: 1,
    fontFamily: 'roboto',
  },
  header: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 4.65,
    shadowOpacity: 0.29,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
  textHeader: {
    color: 'black',
    fontSize: 12,
    marginLeft: 4,
    letterSpacing: 2,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '50%',
  },
  action: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: '#22A2B4',
    marginBottom: 15,
    height: 25,
    width: '50%',
    marginHorizontal: 5,
  },
  dropdown: {
    flex: 1,
    height: 25,
    color: '#A48E8E',
  },
  drapdownItem: {
    fontFamily: 'roboto',
    fontSize: 10,
  },
  garis: {
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    color: '#8D7676',
    opacity: 0.8,
  },
  boxbutton: {
    flex: 3,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 40,
    backgroundColor: '#A40505',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 4.65,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
  },
  textButton: {
    fontSize: 18,
    fontFamily: 'roboto',
    color: '#E2DCDC',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  item: {
    backgroundColor: '#22A2B4',
    opacity: 0.5,
    height: 30,
    padding: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item2: {
    backgroundColor: '#FBFBFB',
    opacity: 0.5,
    height: 30,
    padding: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 10,
    fontFamily: 'roboto',
    letterSpacing: 2,
    fontWeight: '400',
    color: 'black',
  },
  titleValue: {
    fontSize: 10,
    fontFamily: 'roboto',
    letterSpacing: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  result: {
    flex: 7,
    backgroundColor: 'white',
    marginHorizontal: 10,

    marginBottom: 30,
    shadowColor: '#000',
    shadowRadius: 4.65,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
  },
  textInfo: {
    color: 'black',
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  BoxContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
});
