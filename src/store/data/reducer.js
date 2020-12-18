
import { DATA_LIST_PRODUCT} from './actionTypes';

const initialState = {
    dataListProduct: {},
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        // masukan data sehabis fetch api ke state dataListProduct 
        case DATA_LIST_PRODUCT:
            state = {
                ...state,
                dataListProduct: action.payload,
            }
            break;
        default:
            break;
    }
    return state
}

export default dataReducer;