import axios from 'axios';

const getData = (custid) => {
    const URL = `https://script.google.com/macros/s/AKfycbxnGUpO38iAqTWko8AZHGDjrmYGgjPDZ48kL85elaz0AZKE9rYF650A3dJ1R31WWnA68Q/exec`

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
            "Authorization": "Bearer KfycbxnGUpO38iAqTWko8AZHGDjrmYGgjPDZ48kL85elaz0AZKE9rYF650A3dJ1R31WWnA68Q"
        }
    }

    const data = {
        test: 1,
        custid,
    }

    return axios.get(URL, { params: data }, config)
}

export {
    getData
};