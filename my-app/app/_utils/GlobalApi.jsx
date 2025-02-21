const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api'
});

const getCategory = () => axiosClient.get('/categories');

export default {
    getCategory
}

// import axios from "axios";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:1337/api'
// });

// const getCategory = () => {
//     return axiosClient.get("/categories");
// };

// export { getCategory }; // ✅ Export ฟังก์ชันแยกออกมา
// export default axiosClient; // ✅ Export axiosClient เพื่อให้ใช้งาน API อื่น ๆ ได้
