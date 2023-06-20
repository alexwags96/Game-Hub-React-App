import { useInfiniteQuery} from "@tanstack/react-query";
import { Platform } from "../services/platformService";
import gameService from "../services/gameService";
import { FetchResponse } from "./useData";
import ms from "ms";
import useGameQueryStore from "../store";




export interface Game {
    id: number;
    name: string;
    background_image:string;	
    parent_platforms:{platform: Platform}[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw:string
  }

  
  
 
 

const useGames=()=>{
 const gameQuery = useGameQueryStore(s=>s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
  
    queryKey: ['games',gameQuery],
    queryFn:({pageParam=1})=> gameService.getAll({
      params:{
        genres:gameQuery.genreId,
    parent_platforms:gameQuery.platformId,
      ordering:gameQuery.sortOrder,
      search:gameQuery.searchText,
      page: pageParam,
      page_size: 20,
      }
    }),
    
      
  
    staleTime: ms('24'),
    keepPreviousData:true,
          getNextPageParam:(lastPage,allPages)=>{
              return lastPage.next? allPages.length+1:undefined;}
  });
}

 

export default useGames;