import { useQuery } from '@tanstack/react-query';
import platformService, { Platform } from '../services/platformService';
import { FetchResponse } from './useData';
import ms from 'ms';






const usePlatforms =()=>{
    
   
    return   useQuery<FetchResponse<Platform>, Error>({
         queryKey: ['platforms'],
         queryFn: platformService?.getAll,
         staleTime: ms('24'),
         
       });
 }
 
 export default usePlatforms;