import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const LoanCalculator = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Tenor (year)</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Tenor (year)</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
        </View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Tenor (year)</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
          <Text style={styles.textHeader}>Type</Text>
          <View style={styles.action}>
            <Picker style={styles.dropdown} mode="dropdown">
              <Picker.Item label="select one" value="" />
              <Picker.Item label="Arrear" value="Ar" />
              <Picker.Item label="Advance" value="Ad" />
            </Picker>
          </View>
        </View>
        <View style={styles.boxbutton}>
          <Button title="Calculate" color="#E01A1A" />
        </View>

        <View style={styles.garis} />
        <View style={styles.header}></View>
      </ScrollView>
    </View>
  );
};

export default LoanCalculator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5dc',
    flex: 1,
    fontFamily: 'roboto',
  },
  header: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 10,
    margin: 10,
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
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: '#22A2B4',
    marginBottom: 15,
    height: 25,
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
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
