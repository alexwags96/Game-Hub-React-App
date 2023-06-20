import { APIClient } from "./api-client";
import { Platform } from "../entities/Platform";


export default  new APIClient<Platform>('/platforms/lists/parents')