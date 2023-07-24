import { createContext, useContext } from "react";
import Youtube from "../api/youtube";

// createContext()의 역할) 
// 1. provider api 제공( YoutubeApiContext.Provider )  
// 2. useContext로 전역으로 value를 사용하고 싶은 컴포넌트에서 자유롭게 사용할 수 있도록 제공( useContext(YoutubeApiContext) )
export const YoutubeApiContext = createContext();

// youtube API를 사용하는 class 생성자
const youtube = new Youtube();

export function YoutubeApiProvider({children}) {
    return <YoutubeApiContext.Provider value={{youtube}}>{children}</YoutubeApiContext.Provider>
}

// YoutubeApiProvider에 해당하는 모든 children에서 useYoutubeApi를 사용할 수 있음!
export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}