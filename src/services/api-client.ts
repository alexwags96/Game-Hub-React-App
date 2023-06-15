import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../hooks/useData";


export const ApiClient= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"6563026b84ef4a6094dfc276bcfeff0a"
    }
});

export class APIClient<T> {

    constructor(public endpoint:string,){

    }

    getAll=(config:AxiosRequestConfig)=>{
      return  ApiClient.get<FetchResponse<T>>(this.endpoint,config)
        .then(res=>res.data)
    }

    // post=(data:T)=>{
    //    return ApiClient.post<T>(this.endpoint,data)
    //     .then(res=>res.data)
    // }
}

export default ApiClient;