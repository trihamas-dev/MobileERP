import React, { Component } from 'react'
import { Text, View, ToastAndroid, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { _wsJsonConnectionHTTP } from '../../fungsi/function';

const ResultTitle = (props) => {
    return (
        <View>
            <View style={styles.BoxContent}>
                <Text style={styles.textHeader}>{props.title1}</Text>
                <Text style={styles.textHeader}>{props.title2}</Text>
                <Text style={styles.textHeader}>{props.title3}</Text>
            </View>
        </View>
    );
};

const LoanItemResult = (props) => {
    const screenWidth = Dimensions.get('window').width;
    return (
        <View>
            <View style={styles.item}>
                <Text style={styles.title}>{props._title}</Text>
                <Text style={styles.titleValue}>{props._value}</Text>
            </View>
        </View>
    );
};

export default class result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            param: "",
            p_otr: "0",
            p_otr: "0",
            p_rate: "0",
            p_insrate: "0",
            p_ph: "0",

            p_sprate: "0",
            p_provisi: "0",

            rate: 0, insrate: 0, otr: 0, ph: 0, arr_rateins_amortisasi: []
        }
    }

    componentDidMount() {
        //ToastAndroid.show(this.props.route.params.param,ToastAndroid.SHORT);
        //this.setState({ param: this.props.route.params.param });
        _wsJsonConnectionHTTP("get_calculator2",
            this.props.route.params.param,
            (d) => {
                this.setState({
                    p_otr: d.otr.toString(),
                    p_otr: 0,
                    p_rate: d.rate.toString(),
                    p_insrate: d.insrate.toString(),
                    p_ph: d.ph.toString(),

                    p_sprate: this.props.route.params.sprate,
                    p_provisi: this.props.route.params.provisi,

                    rate: d.rate, insrate: d.insrate, otr: d.otr, ph: d.ph, arr_rateins_amortisasi: d.arr_rateins_amortisasi

                })

                //this.set_ph();

            });
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <Text> {this.state.param} </Text> */}
                <Text style={styles.textInfo}>Loan Information</Text>
                <View style={styles.header}>
                    <ResultTitle title1="Rate" title2="SP.Rate" title3="Provisi"></ResultTitle>
                    <View style={styles.BoxContent}>
                        <View style={styles.actionInput}>
                            <TextInput
                                style={styles.Input, { textAlign: 'center' }}
                                placeholder="0"
                                keyboardType="numeric"
                                value={this.state.p_rate}
                            />
                        </View>
                        <View style={styles.actionInput}>
                            <TextInput
                                style={styles.Input, { textAlign: 'center' }}
                                placeholder="0"
                                keyboardType="numeric"
                                value={this.state.p_sprate}
                            />
                        </View>
                        <View style={styles.actionInput}>
                            <TextInput
                                style={styles.Input, { textAlign: 'center' }}
                                placeholder="0"
                                keyboardType="numeric"
                                value={this.state.p_provisi}
                            />
                        </View>
                    </View>


                </View>
                <Text style={styles.textInfo}>Estimation Result Loan</Text>
                <ScrollView horizontal pagingEnabled={true}>
                    <View style={styles.result}>
                        <LoanItemResult _title="Tenor" _value="1"></LoanItemResult>
                        <LoanItemResult _title="OTR" _value="100.000.000"></LoanItemResult>
                        <LoanItemResult _title="DP" _value="20.000.000"></LoanItemResult>
                        <LoanItemResult _title="PH" _value="80.000.000"></LoanItemResult>
                        <LoanItemResult _title="Premi Asuransi" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Bunga" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Pokok + Bunga" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Jangka Waktu" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Angsuran" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Administrasi" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Angsuran I" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Provisi" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Total Potongan" _value="0"></LoanItemResult>
                        <LoanItemResult _title="Total Dana Cair" _value="0"></LoanItemResult>
                    </View>

                    <View style={styles.result}>
                        <LoanItemResult _title="Tenor" _value="2"></LoanItemResult>
                        <LoanItemResult _title="OTR" _value="100.000.000"></LoanItemResult>
                        <LoanItemResult _title="DP" _value="20.000.000"></LoanItemResult>
                        <LoanItemResult _title="PH" _value="80.000.000"></LoanItemResult>
                    </View>

                    <View style={styles.result}>
                        <LoanItemResult _title="Tenor" _value="3"></LoanItemResult>
                        <LoanItemResult _title="OTR" _value="100.000.000"></LoanItemResult>
                        <LoanItemResult _title="DP" _value="20.000.000"></LoanItemResult>
                        <LoanItemResult _title="PH" _value="80.000.000"></LoanItemResult>
                    </View>
                </ScrollView>
            </ScrollView>

        )
    }
}


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
        marginBottom: 3,
        width: '30%',
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
        width: '25%',
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
        //backgroundColor: '#22A2B4',
        opacity: 0.5,
        //height: 30,
        padding: 3,
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
        fontSize: 15,
        fontFamily: 'roboto',
        letterSpacing: 2,
        fontWeight: '400',
        color: 'black',
    },
    titleValue: {
        fontSize: 17,
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
        width: Dimensions.get('window').width-20,
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
