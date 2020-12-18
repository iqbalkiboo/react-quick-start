import Get from "./get";

// get to axios
const getListData = () => Get('fe_code_challenge/campaign.json', "", false);

const API = {
    getListData
}

export default API;