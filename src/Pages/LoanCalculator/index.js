import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const LoanCalculator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TitleBox}>Loan Information</Text>
      <View style={styles.boxContent}>
        <View style={styles.BoxInput}>
          <View>
            <Text>Type</Text>
            <TextInput />
            <TextInput />
          </View>
          <Text>1</Text>
        </View>
      </View>
      <View style={styles.boxContent}>
        <View></View>
      </View>
      <View style={styles.boxContent}>
        <View></View>
      </View>
    </View>
  );
};

export default LoanCalculator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5dc',
    flex: 1,
    padding: 20,
  },
  TitleBox: {
    fontFamily: 'roboto',
    fontWeight: '700',
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 6,
  },
  boxContent: {
    backgroundColor: '#FBFBFB',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowRadius: 4.65,
    shadowOpacity: 0.29,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    padding: 5,
  },
  BoxInput: {
    backgroundColor: 'grey',
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
  },
});
