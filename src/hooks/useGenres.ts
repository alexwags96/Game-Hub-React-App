import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres'
import useData from './useData';
import { APIClient } from '../services/api-client';
import genreService from '../services/genreService';

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}




const useGenres =()=>{
    
   
    return   useQuery<Genre[], Error>({
         queryKey: ['genres'],
         queryFn: genreService?.getAll,
         staleTime: 24*60*60*1000,
         initialData: genres
       });
 }
 
 export default useGenres;