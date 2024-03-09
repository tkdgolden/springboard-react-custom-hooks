import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";


function useAxios(url) {
    const [data, setData] = useState([]);
    const makeRequest = async () => {
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }

    return [data, makeRequest];
};

export default useAxios;