import { useQuery } from '@tanstack/react-query';

import genreService, { Genre } from '../services/genreService';
import { FetchResponse } from './useData';
import genres from '../data/genres';






const useGenres =()=>{
    
   
    return   useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
         queryFn: genreService?.getAll,
         staleTime: 24*60*60*1000,
        //  initialData: {count: genres.length, results: genres}
       });
 }
 
 export default useGenres;