import { APIClient } from "./api-client";
import { Genre } from "../entities/Genre";

export default  new APIClient<Genre>('/genres')