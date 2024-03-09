import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";


function useAxios(baseUrl) {
    const [data, setData] = useState([]);
    const makeRequest = async (append="") => {
        const response = await axios.get(baseUrl + append);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }

    return [data, makeRequest];
};

export default useAxios;