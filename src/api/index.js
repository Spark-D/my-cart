import axios from 'axios';

const config = {
    baseurl: 'http://localhost:8080'
}

function getProductList (pageNo) {
    return axios.get( `${config.baseurl}/productList/${pageNo}`);
}

function getCartList () {
    return axios.get( `${config.baseurl}/grpCartList`);
}

export {
    getProductList,
    getCartList,
    // deleteTask,
    // detailTask,
    // updateTask,
    // getTaskWithComments
}