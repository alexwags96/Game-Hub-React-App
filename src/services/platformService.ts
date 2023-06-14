import { APIClient } from "./api-client";


export interface Platform{
    id: number;
    name: string ;
    slug:string;
}
  


export default  new APIClient<Platform>('/platforms/lists/parents')