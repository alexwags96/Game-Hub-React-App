import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres'
import genreService, { Genre } from '../services/genreService';






const useGenres =()=>{
    
   
    return   useQuery<Genre[], Error>({
         queryKey: ['genres'],
         queryFn: genreService?.getAll,
         staleTime: 24*60*60*1000,
         initialData: genres
       });
 }
 
 export default useGenres;