import { Game } from "../entities/Game";
import { APIClient } from "./api-client";


  


export default  new APIClient<Game>('/games')