import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Image, Alert, ToastAndroid } from 'react-native'
import { _wsJsonConnectionHTTP } from '../../fungsi/function';
import AsyncStorage from '@react-native-async-storage/async-storage';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    brs: {
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    lbl_text: {
        //fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: 'bold'
    },
    inp: {
        backgroundColor: '#DDDDDD',
        fontSize: 15,
        padding: 5
    },
    logo: {
        width: 200,
        height: 200,
    }
});

async function storeData(email, pass) {
    try {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('pass', pass);
    } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
    }
    return true; d
}

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            pass: ""
        }
    }

    async getData() {
        try {
            const email_val = await AsyncStorage.getItem('email');
            const pass_val = await AsyncStorage.getItem('pass');
            if (email_val !== null) {
                this.setState({ email: email_val, pass: pass_val });

            }
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error));
        }
    }

    do_login() {
        

        _wsJsonConnectionHTTP("dat_email_login", "email_name=" + this.state.email + "&pin=" + this.state.pass, (d) => {
            if (d.value == "accept") {
                storeData(this.state.email, this.state.pass);
                this.props.navigation.navigate('LoanCalculator', { email_id: this.state.email });
            } else Alert.alert("Error", "Email tidak terdaftar atau Pin Salah");            
        });
    }
    register_email() {
        if (this.state.email == "") Alert.alert("Error", "Isikan Email!");
        else {
            ToastAndroid.showWithGravity(
                "Register email sedang di proses...",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            _wsJsonConnectionHTTP("ses_email_request", "email_name=" + this.state.email, (d) => {
                Alert.alert("Register Email", d.value);
            });

        }
    }
    request_pin() {

        if (this.state.email == "") Alert.alert("Error", "Isikan Email!");
        else {
            ToastAndroid.showWithGravity(
                "Permintaan pin baru sedang di proses...",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            _wsJsonConnectionHTTP("ses_emailpin_request", "email_name=" + this.state.email, (d) => {
                Alert.alert("Permintaan Pin Baru", d.value);
            });
        }
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '100%', borderStyle: 'solid' }}>
                    <View style={styles.brs, { alignItems: 'center' }}>
                        <Image style={styles.logo} source={require('../../images/logo.png')} />
                    </View>
                    <View style={styles.brs}>
                        <Text style={styles.lbl_text}> Email :</Text>
                        <TextInput keyboardType="email-address" style={styles.inp, { backgroundColor: '#817F7F' }} value={this.state.email} onChangeText={(text) => this.setState({ email: text })}></TextInput>
                    </View>
                    <View style={styles.brs}>
                        <Text style={styles.lbl_text}> Pin :</Text>
                        <TextInput secureTextEntry={true} keyboardType='number-pad' style={styles.inp} value={this.state.pass} onChangeText={(value) => this.setState({ pass: value })}></TextInput>
                    </View>
                    <View style={styles.brs}>
                        <Button title="Login" onPress={() => this.do_login()}></Button>
                    </View>
                    <View style={styles.brs, { paddingTop: 25, flex: 0, flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={styles.lbl_text, { padding: 5, fontSize: 15, flex: 0, textDecorationLine: 'underline', textAlign: 'center', backgroundColor: '#817F7F', paddingRight: 20 }} onPress={() => this.register_email()}>Daftarkan Email</Text>
                        <Text style={styles.lbl_text, { padding: 5, fontSize: 15, flex: 0, textDecorationLine: 'underline', textAlign: 'center', backgroundColor: '#DDDDDD' }} onPress={() => this.request_pin()}>Permintaan Pin Baru</Text>


                    </View>
                </View>
            </View>
        )
    }
}

export default Login;