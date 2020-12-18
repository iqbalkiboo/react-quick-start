import instance from "axios";
const axios = instance.create();

const url = 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com';

const Get = (path, params, bool) => {
    let getAxios;
    switch (bool) {
        case true:
            getAxios = axios.get(`${url}/${path}/${params}`);
            break;
        case false:
            getAxios = axios.get(`${url}/${path}`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            });
            break;
        default:
            break;
    }
    const promise = new Promise((resolve, reject) => {
        getAxios.then(
            res => {
                resolve(res);
            },
            err => {
                reject(err);
            }
        );
    });
    return promise;
};

export default Get;
