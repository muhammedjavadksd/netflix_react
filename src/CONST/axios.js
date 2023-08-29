import constant from "./const";
import axios  from "axios";

export default axios.create({
    baseURL: constant.apiBaseUrl,
});

