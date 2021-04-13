import axios from 'axios';

const config = {
    baseurl: 'http://localhost:8080'
}

function getProductList (pageNo) {
    return axios.get( `${config.baseurl}/productList/${pageNo}`);
}

export {
    getProductList,
    // insertTask,
    // deleteTask,
    // detailTask,
    // updateTask,
    // getTaskWithComments
}