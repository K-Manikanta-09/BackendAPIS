import axios from 'axios';

const baseUrl = "https://koymc3jix0.execute-api.us-east-1.amazonaws.com/devtest/";
//const baseUrl = "https://mfxlp3dt4h.execute-api.us-east-1.amazonaws.com/prd/";
//const baseUrl = "https://w801d6bl-7229.inc1.devtunnels.ms/api/"

const fetchDataWithBody = async (urlPath, axiosBody) => {
    try {
        const config = {
            method: "POST",
            url: baseUrl + urlPath,
            Headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            data: axiosBody
        }
        console.log('axios', axiosBody);
        console.log('url', urlPath);
        const response = await axios(config);
        return response.data;

    } catch (error) {
        console.log('Error while fetching data ', error);
        return;
    }

}

const fetchUpdateData = async (urlPath, axiosBody) => {
    try {
        const config = {
            method: "PUT",
            url: baseUrl + urlPath,
            Headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            data: axiosBody
        }
        const response = await axios(config);
        return response.data;

    } catch (error) {
        console.log('Error while fetching data ', error);
        return;
    }

}

const fetchAllData = async (urlPath) => {
    try {
        const config = {
            method: "GET",
            url: baseUrl + urlPath,
            Headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
        console.log('url', urlPath);
        const response = await axios.get(baseUrl + urlPath);
        //const response = await axios(config);
        return response.data;

    } catch (error) {
        console.log('Error while fetching data ', urlPath);
        return;
    }

}

export { fetchDataWithBody, fetchAllData, fetchUpdateData };