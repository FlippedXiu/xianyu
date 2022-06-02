import axios from "axios";
import Vue from "vue";

const axiosIns = axios.create({
    baseURL: 'http://localhost:9090',
    timeout: 5000,

})

Vue.prototype.axiosIns = axiosIns;

Vue.prototype.$http = axiosIns;

export default axiosIns;
