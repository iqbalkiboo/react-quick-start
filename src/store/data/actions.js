
import { DATA_LIST_PRODUCT } from './actionTypes';

export const getListData = (data) => {
    return {
        type: DATA_LIST_PRODUCT,
        payload: { data }
    }
}