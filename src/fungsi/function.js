import { Alert } from 'react-native'
import { wsURL } from '../../app.json'

export function _convertToJSON(text) {
    if (Platform.OS === 'android') {
        return JSON.parse(text.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, ''));
    }
}

export function _getURL() {
    return wsURL;
}

export function _httpConnection(url, fcSuccess) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            fcSuccess(text);
        })
        .catch((error) => {
            Alert.alert("Error", error);
        });
}

export function _wsJsonConnectionHTTP(wsName, bodyParam, fcSuccess) {
    fetch(wsURL + wsName,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyParam
        })
        .then(response => response.text())
        .then(text => {
            if (text == "") fcSuccess();
            else {
                let d = _convertToJSON(text);
                fcSuccess(d);
            }

        })
        .catch((error) => {
            Alert.alert("Error", error);
        });
}

export async function _httpconnection(wsName, bodyParam) {
    try {
        const response = await fetch(wsURL + wsName,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: bodyParam
            });
        const text = await response.text();        
        return _convertToJSON(text);
    } catch (error) {
        console.error(error);
    }
    
}