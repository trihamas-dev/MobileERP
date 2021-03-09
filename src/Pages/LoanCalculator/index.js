import React, {useState} from 'react';
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
import DataAPI from '../DataAPI';

const LoanCalculator = () => {
  const [selectedValueType, setSelectedValueType] = useState('');
  const [selectedValueTenor, setSelectedValueTenor] = useState('');
  const [selectedValueWilayah, setSelectedValueWilayah] = useState('');
  const [selectedValueUsage, setSelectedValueUsage] = useState('');
  const [selectedValueCondition, setSelectedValueCondition] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.textInfo}>Loan Information</Text>
        <View style={styles.header}>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Type</Text>
            <Text style={styles.textHeader}>Tenor</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={selectedValueType}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueType(itemValue)
                }>
                <Picker.Item label="select one" value="" />
                {Object.keys(DataAPI.type).map((key) => {
                  return (
                    <Picker.Item
                      label={DataAPI.type[key]}
                      value={key}
                      key={key}
                    />
                  ); //if you have a bunch of keys value pair
                })}
                {/* <Picker.Item label="Arrear" value="Ar" />
                <Picker.Item label="Advance" value="Ad" /> */}
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={selectedValueTenor}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueTenor(itemValue)
                }>
                <Picker.Item label="select one" value="" />
                {Object.keys(DataAPI.tenor).map((key) => {
                  return (
                    <Picker.Item
                      label={DataAPI.tenor[key]}
                      value={key}
                      key={key}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Admin Fee</Text>
            <Text style={styles.textHeader}>Down Payment</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input}
                placeholder="0"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input}
                placeholder="0"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Margin rate</Text>
            <Text style={styles.textHeader}>Wilayah</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input}
                placeholder="0"
                keyboardType="decimal-pad"
              />
            </View>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={selectedValueWilayah}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueWilayah(itemValue)
                }>
                <Picker.Item label="select one" value="" />
                {Object.keys(DataAPI.wilayah).map((key) => {
                  return (
                    <Picker.Item
                      label={DataAPI.wilayah[key]}
                      value={key}
                      key={key}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
          </View>
        </View>
        <Text style={styles.textInfo}>Assets Information</Text>
        <View style={styles.header}>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Usage</Text>
            <Text style={styles.textHeader}>Condition</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={selectedValueUsage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueUsage(itemValue)
                }>
                <Picker.Item label="select one" value="" />
                {Object.keys(DataAPI.usage).map((key) => {
                  return (
                    <Picker.Item
                      label={DataAPI.usage[key]}
                      value={key}
                      key={key}
                    />
                  ); //if you have a bunch of keys value pair
                })}
                {/* <Picker.Item label="Pribadi/Dinas" value="Pribadi/Dinas" />
                <Picker.Item label="Komersil" value="Komersil" /> */}
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={selectedValueCondition}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueCondition(itemValue)
                }>
                <Picker.Item label="select one" value="" />
                {Object.keys(DataAPI.condition).map((key) => {
                  return (
                    <Picker.Item
                      label={DataAPI.condition[key]}
                      value={key}
                      key={key}
                    />
                  ); //if you have a bunch of keys value pair
                })}
                {/* <Picker.Item label="Used" value="Used" />
                <Picker.Item label="New" value="New" /> */}
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Kind</Text>
            <Text style={styles.textHeader}>Category</Text>
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
            <Text style={styles.textHeader}>Merk</Text>
            <Text style={styles.textHeader}>Model</Text>
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
            <Text style={styles.textHeader}>Built Year</Text>
            <Text style={styles.textHeader}>Unit Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input}
                placeholder="0000"
                keyboardType="numeric"
              />
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

        {/* asuransi */}
        <Text style={styles.textInfo}>Insurance Information</Text>
        <View style={styles.header}>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Status</Text>
            <Text style={styles.textHeader}>Insurance Type</Text>
          </View>
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="insurance" value="0" />
                <Picker.Item label="non insurance" value="1" />
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown">
                <Picker.Item label="select one" value="" />
                <Picker.Item label="All Risk" value="AT" />
                <Picker.Item label="TLO" value="TLO" />
              </Picker>
            </View>
          </View>
          <View style={styles.BoxContent}>
            <Text style={styles.textHeader}>Rate Margin</Text>
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
        <TouchableOpacity
          style={styles.boxbutton}
          onPress={() => alert('function is not ready !')}>
          <Text style={styles.textButton}>Calculate</Text>
        </TouchableOpacity>

        <View style={styles.garis} />

        <Text style={styles.textInfo}>Estimation Result Loan</Text>
        <ScrollView>
          <View style={styles.result}>
            <View style={styles.item}>
              <Text style={styles.title}>Off The Road Price</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.title}>Down Payment</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Principal</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.title}>Insurance Premi</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Interest</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.title}>Principal + Interest</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Tenor (month)</Text>
              <Text style={styles.titleValue}>12</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.title}>Installment</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Admin Fee</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.title}>Provisi</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Diskon</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
            <View style={styles.itemtotal}>
              <Text style={styles.title}>Total Disburse</Text>
              <Text style={styles.titleValue}>3.000.000</Text>
            </View>
          </View>
        </ScrollView>
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
  actionInput: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: '#22A2B4',
    marginBottom: 15,
    width: '50%',
    marginHorizontal: 5,
    height: 25,
  },
  dropdown: {
    flex: 1,
    height: 25,
    color: '#A48E8E',
  },
  Input: {
    color: '#A48E8E',
    fontSize: 12,
    backgroundColor: 'transparent',

    padding: 0,
    marginLeft: 5,
  },
  drapdownItem: {
    fontFamily: 'roboto',
    fontSize: 10,
    margin: 0,
    padding: 0,
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
  itemtotal: {
    borderTopWidth: 1.5,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    padding: 10,
  },
});
