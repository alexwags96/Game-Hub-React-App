import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genreService from '../services/genreService';
import { Genre } from "../entities/Genre";
import { FetchResponse } from './useData';
import genres from '../data/genres';






const useGenres =()=>{
    
   
    return   useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
         queryFn: genreService?.getAll,
         staleTime: ms('24'),
         initialData: genres
       });
 }
 
 export default useGenres;