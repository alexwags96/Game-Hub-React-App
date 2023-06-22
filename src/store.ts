import { create } from "zustand";

 interface GameQuery {
    
    genreId?:number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
    reset?:'',
  
  }

interface GameQueryStore{
    gameQuery:GameQuery;
    setSearchText:(searchText:string)=>void;
    setGenreId:(genreId:number)=>void;
    setPlatformId:(platformId:number)=>void;
    setSortOrder:(sortOrder:string)=>void;
    SetReset:(reset:'')=>void;
   
}









const useGameQueryStore=create<GameQueryStore>(set=>({
  gameQuery:{},
    setSearchText:(searchText)=>set(()=>({gameQuery:{searchText}})),
    setGenreId:(genreId)=>set(store=>({gameQuery: {...store.gameQuery, genreId}})),
    setPlatformId:(platformId)=>set(store=>({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery, sortOrder}})),
    SetReset:(reset)=>set(()=>({gameQuery: {reset}})),
    
    

}));

export default useGameQueryStore;

