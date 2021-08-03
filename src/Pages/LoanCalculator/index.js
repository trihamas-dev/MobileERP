import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid
} from 'react-native';
import { _wsJsonConnectionHTTP } from '../../fungsi/function';
import Autocomplete from 'react-native-autocomplete-input';
import Clipboard from '@react-native-clipboard/clipboard';

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

class LoanCalculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      p_tenor: "0",
      p_type: "0",
      p_vehicletype: "0",
      p_vehiclekondisi: "0",
      p_vehiclekategory: "0",
      p_region: "0",
      p_merk: "0",
      p_year: "0",
      p_instype: "0",
      p_usedfor: "0",
      p_insstatus: "0",

      p_model: "0",
      p_cartype: "0",

      arr_tenor: [],
      arr_type: [],
      arr_vehiclekondisi: [],
      arr_vehicletype: [],
      arr_vehiclecategory: [],
      arr_region: [],
      arr_merek: [],
      arr_year: [],
      arr_instype: [],
      arr_usedfor: [],
      arr_insstatus: [],

      arr_model: [],
      arr_cartype: [],

      p_defotr: "0",
      p_otr: "0",
      p_rate: "0",
      p_sprate: "7",
      p_insrate: "0",
      p_provisi: "3",
      p_ph: "0",

      p_message: "",
      p_iotr: "0",
      p_idp: "0",

      rate: 0, insrate: 0, otr: 0, ph: 0, arr_rateins_amortisasi: []
    }
  }
  componentDidMount() {
    // ToastAndroid.show("Selamat Datang "+this.props.route.params.email_id, ToastAndroid.SHORT);
    ToastAndroid.showWithGravity(
      "Selamat Datang " + this.props.route.params.email_id,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );

    _wsJsonConnectionHTTP("loancalculator_data", "", (data) => {
      this.setState({
        arr_tenor: data.p_tenor,
        arr_type: data.p_type,
        arr_vehiclekondisi: data.p_vehiclekondisi,
        arr_vehicletype: data.p_vehicletype,
        arr_vehiclecategory: data.p_vehiclekategory,
        arr_region: data.p_region,
        arr_merek: data.p_merk,
        arr_year: data.p_years,
        arr_instype: data.p_instypes,
        arr_usedfor: data.p_usedfors,
        arr_insstatus: data.p_insstatuss
      })
    });
  }

  set_ph() {
    // Alert.alert("Info","carmerk_id=" + this.state.p_merk + "&carmodel_id=" + this.state.p_model + "&cartype_id=" + this.state.p_cartype +
    // "&caryear=" + this.state.p_year + "&vehiclecondition_id=" + this.state.p_vehiclekondisi + "&vehiclecategory_id=" + this.state.p_vehiclekategory +
    // "&region_id=" + this.state.p_region);
    _wsJsonConnectionHTTP("get_ph",
      "carmerk_id=" + this.state.p_merk + "&carmodel_id=" + this.state.p_model + "&cartype_id=" + this.state.p_cartype +
      "&caryear=" + this.state.p_year + "&vehiclecondition_id=" + this.state.p_vehiclekondisi + "&vehiclecategory_id=" + this.state.p_vehiclekategory +
      "&region_id=" + this.state.p_region,
      (d) => {
        //Alert.alert("info",d.value.toString());
        this.setState({
          p_defotr: d.value.toString()
        })
      });
  }

  onchange_merk(value, index) {
    this.setState({ p_merk: value });


    //get data di API untuk model dengan value merk diatas "set_carmodel_list"
    _wsJsonConnectionHTTP("set_carmodel_list", "carmerk_id=" + value, (arr) => {
      this.setState({
        p_model: "0",
        arr_model: arr,
        p_cartype: "0",
        arr_cartype: []
      })

      //this.set_ph();
    });
    //masukan ke array dropdown model
    //set value dropdown model '0'
  }

  onchange_model(value, index) {
    this.setState({ p_model: value });
    // Alert.alert("Info",this.state.p_merk);
    //get data di API untuk model dengan value merk diatas "set_carmodel_list"
    _wsJsonConnectionHTTP("set_cartype_list", "carmerk_id=" + this.state.p_merk + "&carmodel_id=" + value, (arr) => {
      this.setState({
        p_cartype: "0",
        arr_cartype: arr
      })

      //this.set_ph();
    });
    //masukan ke array dropdown model
    //set value dropdown model '0'
  }

  onchange_type(value, index) {
    this.setState({ p_cartype: value });
    //this.set_ph();
  }

  onchange_year(value) {
    this.setState({ p_year: value })
    //this.set_ph();
  }

  input_validation() {
    if (this.state.p_type == "0" ||
      this.state.p_tenor == "0" ||
      this.state.p_region == "0" ||
      this.state.p_sprate == "" ||
      this.state.p_provisi == "" ||
      this.state.p_iotr == "" ||
      this.state.p_idp == "" ||
      this.state.p_usedfor == "0" ||
      this.state.p_vehiclekondisi == "0" ||
      this.state.p_vehicletype == "0" ||
      this.state.p_vehiclekategory == "0" ||
      this.state.p_merk == "0" ||
      this.state.p_model == "0" ||
      this.state.p_year == "0" ||
      this.state.p_type == "0" ||
      this.state.p_insstatus == "0" ||
      this.state.p_instype == "0") {
      Alert.alert("Error", "Invalid entry !!!");
      return false;
    } else return true;

  }

  getdata() {
    
    if (this.input_validation() == true) {
      ToastAndroid.show("Loading data...", ToastAndroid.SHORT);
      let sprate =  parseFloat(this.state.p_sprate) / 100.0;
      let provisi = parseFloat(this.state.p_provisi) / 100.0;
      let idp = parseFloat(this.state.p_idp) / 100.0;

      let str_param = "carmerk_id=" + this.state.p_merk + "&carmodel_id=" + this.state.p_model + "&cartype_id=" + this.state.p_cartype +
        "&caryear=" + this.state.p_year + "&vehiclecondition_id=" + this.state.p_vehiclekondisi + "&vehiclecategory_id=" + this.state.p_vehiclekategory +
        "&region_id=" + this.state.p_region + "&tenor=" + this.state.p_tenor + "&instype_id=" + this.state.p_instype +
        "&usedfor_id=" + this.state.p_usedfor + "&vehicletype_id=" + this.state.p_vehicletype + "&instatus_id=" + this.state.p_insstatus +
        "&sprate=" + sprate.toString() + "&provisi=" + provisi.toString() + "&loantype_id=" + this.state.p_type + "&iotr=" + this.state.p_iotr +
        "&idp=" + idp.toString();

      this.setState({ p_message: str_param });

      //str_param = "carmerk_id=9&carmodel_id=96&cartype_id=924&caryear=2010&vehiclecondition_id=1&vehiclecategory_id=2&region_id=1&tenor=4&instype_id=2&usedfor_id=1&vehicletype_id=5&instatus_id=1&sprate=0.07&provisi=0.03&loantype_id=1&iotr=0&idp=0";
      Clipboard.setString(str_param);
      this.props.navigation.navigate('result', { param: str_param });
    }
  }

  render() {
    // const {query} = this.state;
    // const data = filterData(query);
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
                selectedValue={this.state.p_type}
                onValueChange={(value, index) => this.setState({ p_type: value })}
              >
                <Picker.Item label="select one" value="0" />
                {this.state.arr_type.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={this.state.p_tenor}
                onValueChange={(value, index) => this.setState({ p_tenor: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_tenor.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
          </View>

          <LoanTitle title1="Wilayah" title2="" />
          <View style={styles.BoxContent}>
            {/* <View style={styles.actionInput}>
              <TextInput
                style={styles.Input}
                placeholder="0"
                keyboardType="decimal-pad"
              />
            </View> */}
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={this.state.p_region}
                onValueChange={(value, index) => this.setState({ p_region: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_region.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
          </View>

          <LoanTitle title1="SP.Rate(%)" title2="Provisi(%)" />
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
                value={this.state.p_sprate}
                onChangeText={(value) => this.setState({ p_sprate: value })}
              />
            </View>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
                value={this.state.p_provisi}
                onChangeText={(value) => this.setState({ p_provisi: value })}
              />
            </View>
          </View>

          <LoanTitle title1="OTR" title2="DP(%)" />
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
                value={this.state.p_iotr}
                onChangeText={(value) => this.setState({ p_iotr: value })}
              />
            </View>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
                value={this.state.p_idp}
                onChangeText={(value) => this.setState({ p_idp: value })}
              />
            </View>
          </View>

          {/* <LoanTitle title1="Admin Fee" title2="Down Payment" />
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
          </View> */}



        </View>
        <Text style={styles.textInfo}>Assets Information</Text>
        <View style={styles.header}>
          <LoanTitle title1="Usage" title2="Condition" />
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={this.state.p_vehiclekategory}
                onValueChange={(value, index) => this.setState({ p_usedfor: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_usedfor.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker
                style={styles.dropdown}
                mode="dropdown"
                selectedValue={this.state.p_vehiclekondisi}
                onValueChange={(value, index) => this.setState({ p_vehiclekondisi: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_vehiclekondisi.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
          </View>

          <LoanTitle title1="Kind" title2="Category" />
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_vehicletype}
                onValueChange={(value, index) => this.setState({ p_vehicletype: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_vehicletype.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}

              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_vehicletype}
                onValueChange={(value, index) => this.setState({ p_vehiclekategory: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_vehiclecategory.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}

              </Picker>
            </View>
          </View>

          <LoanTitle title1="Merk" title2="Model" />
          <View style={styles.BoxContent}>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_merk}
                onValueChange={(value, index) => this.onchange_merk(value, index)}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_merek.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}

              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_model}
                onValueChange={(value, index) => this.onchange_model(value, index)}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_model.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}

              </Picker>
            </View>
          </View>

          <LoanTitle title1="Built Year" title2="Unit Type" />
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_year}
                onValueChange={(value, index) => this.onchange_year(value)}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_year.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}

              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_type}
                onValueChange={(value, index) => this.onchange_type(value, index)}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_cartype.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
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
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_insstatus}
                onValueChange={(value, index) => this.setState({ p_insstatus: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_insstatus.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
            <View style={styles.action}>
              <Picker style={styles.dropdown} mode="dropdown"
                selectedValue={this.state.p_instype}
                onValueChange={(value, index) => this.setState({ p_instype: value })}>
                <Picker.Item label="select one" value="0" />
                {this.state.arr_instype.map((d, i) => {
                  return (
                    <Picker.Item
                      label={d.label}
                      value={d.value}
                      key={i}
                    />
                  ); //if you have a bunch of keys value pair
                })}
              </Picker>
            </View>
          </View>

          {/* <LoanTitle title1="Rate Margin" title2="Type" />
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
          </View> */}

        </View>


        <TouchableOpacity
          style={styles.boxbutton}
          onPress={() => this.getdata()}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>

        {/* <View>
          <TextInput value={this.state.p_message}></TextInput>
        </View> */}

        {/* Default Entry */}
        {/* <Text style={styles.textInfo}>Rate Information</Text>
        <View style={styles.header}>
          <LoanTitle title1="Def.OTR" title2="OTR" />
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
                editable={false}
                value={this.state.p_defotr}
              />
            </View>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
              />
            </View>
          </View>

          <LoanTitle title1="Rate" title2="Ins.Rate" />
          <View style={styles.BoxContent}>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
                editable={false}
                value={this.state.p_rate}
              />
            </View>
            <View style={styles.actionInput}>
              <TextInput
                style={styles.Input, { textAlign: 'right' }}
                placeholder="0"
                keyboardType="numeric"
                editable={false}
                value={this.state.p_insrate}
              />
            </View>

          </View>


        </View> */}



        {/* <TouchableOpacity
          style={styles.boxbutton}
          onPress={() => alert('function is not ready !')}>
          <Text style={styles.textButton}>Priview</Text>
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
        </ScrollView> */}
      </ScrollView>

    )
  }
}

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
    height: 45,
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
    height: 45,
  },
  dropdown: {
    flex: 1,
    height: 25,
    color: '#A48E8E',
  },
  Input: {
    // color: '#A48E8E',
    color: '#4F4F4F',
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
