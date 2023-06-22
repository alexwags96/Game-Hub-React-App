import { useQuery } from '@tanstack/react-query';
import platformService from '../services/platformService';
import { Platform } from "../entities/Platform";
import { FetchResponse } from "../entities/FetchResponse";
import ms from 'ms';






const usePlatforms =()=>{
    
   
    return   useQuery<FetchResponse<Platform>, Error>({
         queryKey: ['platforms'],
         queryFn: platformService?.getAll,
         staleTime: ms('24'),
         
       });
 }
 
 export default usePlatforms;