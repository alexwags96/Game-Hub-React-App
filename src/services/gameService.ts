import { Game } from "../hooks/useGames";
import { APIClient } from "./api-client";


  


export default  new APIClient<Game>('/games')