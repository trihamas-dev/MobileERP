import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Dimensions,
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

  const LoanTitle = (props) => {
    return (
      <View>
        <View style={styles.BoxContent}>
          <Text style={styles.textHeader}>{props.title1}</Text>
          <Text style={styles.textHeader}>{props.title2}</Text>
        </View>
      </View>
    );
  };

  const LoanItemResult = (props) => {
    const screenWidth = Dimensions.get('window').width;
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.title}>{props.itemWhiteLeft}</Text>
          <Text style={styles.titleValue}>{props.itemWhiteRight}</Text>
        </View>
        <View style={styles.item2}>
          <Text style={styles.title}>{props.itemColorLeft}</Text>
          <Text style={styles.titleValue}>{props.itemColorRight}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textInfo}>Loan Information</Text>
      <View style={styles.header}>
        <LoanTitle title1="Type" title2="Tenor" />
        <View style={styles.BoxContent}>
          <View style={styles.action}>
            <Picker
              style={styles.dropdown}
              mode="dropdown"
              selectedValue={
                (selectedValueType, console.log(selectedValueType))
              }
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValueType(itemIndex)
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

        <LoanTitle title1="Admin Fee" title2="Down Payment" />
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

        <LoanTitle title1="Margin Rate" title2="Wilayah" />
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
        <LoanTitle title1="Usage" title2="Condition" />
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

        <LoanTitle title1="Kind" title2="Category" />
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

        <LoanTitle title1="Merk" title2="Model" />
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

        <LoanTitle title1="Built Year" title2="Unit Type" />
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
        <LoanTitle title1="Status" title2="Insurance Type" />
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
        <LoanTitle title1="Rate Margin" title2="Type" />
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
      <ScrollView horizontal pagingEnabled={true}>
        <View style={styles.result}>
          <LoanItemResult
            itemWhiteLeft="Off The Road Price"
            itemWhiteRight="120.000.000"
            itemColorLeft="Down Payment"
            itemColorRight="20.000.000"
          />
          <LoanItemResult
            itemWhiteLeft="Principal"
            itemWhiteRight="180.000.000"
            itemColorLeft="Insurance Premi"
            itemColorRight="1.500.000"
          />
          <LoanItemResult
            itemWhiteLeft="Interest"
            itemWhiteRight="10.000.000"
            itemColorLeft="Principal+interest"
            itemColorRight="190.000.000"
          />
          <LoanItemResult
            itemWhiteLeft="tenor (month)"
            itemWhiteRight="24"
            itemColorLeft="Installment"
            itemColorRight="5.300.000"
          />
          <LoanItemResult
            itemWhiteLeft="Admin Fee"
            itemWhiteRight="500.000"
            itemColorLeft="Provisi"
            itemColorRight="500.000"
          />
          <LoanItemResult
            itemWhiteLeft="Discon"
            itemWhiteRight="5.000.000"
            itemColorLeft="Total Disburse"
            itemColorRight="170.000.000"
          />
        </View>
        <View style={styles.result}>
          <LoanItemResult
            itemWhiteLeft="Off The Road Price"
            itemWhiteRight="120.000.000"
            itemColorLeft="Down Payment"
            itemColorRight="20.000.000"
          />
          <LoanItemResult
            itemWhiteLeft="Principal"
            itemWhiteRight="180.000.000"
            itemColorLeft="Insurance Premi"
            itemColorRight="1.500.000"
          />
          <LoanItemResult
            itemWhiteLeft="Interest"
            itemWhiteRight="10.000.000"
            itemColorLeft="Principal+interest"
            itemColorRight="190.000.000"
          />
          <LoanItemResult
            itemWhiteLeft="tenor (month)"
            itemWhiteRight="24"
            itemColorLeft="Installment"
            itemColorRight="5.300.000"
          />
          <LoanItemResult
            itemWhiteLeft="Admin Fee"
            itemWhiteRight="500.000"
            itemColorLeft="Provisi"
            itemColorRight="500.000"
          />
          <LoanItemResult
            itemWhiteLeft="Discon"
            itemWhiteRight="5.000.000"
            itemColorLeft="Total Disburse"
            itemColorRight="170.000.000"
          />
        </View>
        <View style={styles.result}>
          <LoanItemResult
            itemWhiteLeft="Off The Road Price"
            itemWhiteRight="120.000.000"
            itemColorLeft="Down Payment"
            itemColorRight="20.000.000"
          />
          <LoanItemResult
            itemWhiteLeft="Principal"
            itemWhiteRight="180.000.000"
            itemColorLeft="Insurance Premi"
            itemColorRight="1.500.000"
          />
          <LoanItemResult
            itemWhiteLeft="Interest"
            itemWhiteRight="10.000.000"
            itemColorLeft="Principal+interest"
            itemColorRight="190.000.000"
          />
          <LoanItemResult
            itemWhiteLeft="tenor (month)"
            itemWhiteRight="24"
            itemColorLeft="Installment"
            itemColorRight="5.300.000"
          />
          <LoanItemResult
            itemWhiteLeft="Admin Fee"
            itemWhiteRight="500.000"
            itemColorLeft="Provisi"
            itemColorRight="500.000"
          />
          <LoanItemResult
            itemWhiteLeft="Discon"
            itemWhiteRight="5.000.000"
            itemColorLeft="Total Disburse"
            itemColorRight="170.000.000"
          />
        </View>
      </ScrollView>
    </ScrollView>
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

    fontWeight: 'bold',
    color: 'black',
  },
  result: {
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
    width: Dimensions.get('window').width,
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
    justifyContent: 'space-between',
    alignContent: 'space-around',
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
