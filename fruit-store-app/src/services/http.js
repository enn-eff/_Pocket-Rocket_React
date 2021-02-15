import axios from 'axios';

export default class FetchingDataService {
    constructor() {
        this.config = {
            method: 'get',
            url:
                'https://pocket-rocket-public.s3.eu-central-1.amazonaws.com/code-challenge/products.json',
            headers: {},
        };
    }

    request() {
        return new Promise((resolve, reject) => {
            axios(this.config)
                .then(function ({ data }) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}
