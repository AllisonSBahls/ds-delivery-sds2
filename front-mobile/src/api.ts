import axios from "axios";
const API_URL = 'https://bahls-sds-deliver.herokuapp.com:8080';
export function fetchOrders(){
    return axios(`${API_URL}/Orders`);
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}