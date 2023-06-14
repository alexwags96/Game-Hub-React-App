import { Platform } from "../hooks/useGames";
import { APIClient } from "./api-client";



  


export default  new APIClient<Platform>('/platforms/lists/parents')