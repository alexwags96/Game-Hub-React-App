import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "../services/platformService";
import useData from "./useData";
import gameService from "../services/gameService";




export interface Game {
    id: number;
    name: string;
    background_image:string;	
    parent_platforms:{platform: Platform}[];
    metacritic: number;
    rating_top: number;
    



  }
  
 

const useGames=(gameQuery:GameQuery)=>useQuery<Game[], Error>({
  queryKey: ['games',gameQuery,
  

],
  queryFn:()=> gameService.getAll({
    params:{
      genres:gameQuery.genre?.id,
  parent_platforms:gameQuery.platform?.id,
    ordering:gameQuery.sortOrder,
    search:gameQuery.searchText,
    }
  }),
  
    

  staleTime: 24*60*60*1000,
  
});
 

export default useGames;