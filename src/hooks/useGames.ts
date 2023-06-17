import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "../services/platformService";
import gameService from "../services/gameService";
import { Genre } from "../services/genreService";
import { FetchResponse } from "./useData";




export interface Game {
    id: number;
    name: string;
    background_image:string;	
    parent_platforms:{platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }

  export interface GameQuery {
    
    genreId?:number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
  
  }
  
 
 

const useGames=(gameQuery:GameQuery)=>useInfiniteQuery<FetchResponse<Game>, Error>({
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
  
    

  staleTime: 24*60*60*1000,
  keepPreviousData:true,
        getNextPageParam:(lastPage,allPages)=>{
            return lastPage.next? allPages.length+1:undefined;}
});
 

export default useGames;