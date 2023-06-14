import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres'
import useData from './useData';
import { APIClient } from '../services/api-client';
import genreService from '../services/genreService';
import { Platform } from './useGames';
import platformService from '../services/platformService';

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}




const usePlatforms =()=>{
    
   
    return   useQuery<Platform[], Error>({
         queryKey: ['platforms'],
         queryFn: platformService?.getAll,
         staleTime: 24*60*60*1000,
         
       });
 }
 
 export default usePlatforms;