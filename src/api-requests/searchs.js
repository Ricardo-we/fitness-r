import axios from "axios";
import { APIDATA } from "../App";

export default async function searchFood(food=''){
    const response = await axios.get(APIDATA.url, {
        headers: APIDATA.headers, 
        params: {keyword: food.toLowerCase()}
    })
    return response.data;
}