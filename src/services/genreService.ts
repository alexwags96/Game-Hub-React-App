import { Genre } from "../hooks/useGenres";
import { APIClient } from "./api-client";



  


export default  new APIClient<Genre>('/genres')