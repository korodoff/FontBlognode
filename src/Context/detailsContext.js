// import React from "react";
// import { useState, useContext } from "react";
// // import { articleDetails } from "./Details";
// import { dataApi } from "./Details";

// const DetailsContext = React.createContext();

// export const DetailsContextProvider = ({children})=>{
//     const [details, setDetails] = useState(dataApi)
//     return(
//         <DetailsContext.Provider value={{details, setDetails}} >
//             {children}
//         </DetailsContext.Provider>
//     )
// }

// export const useDetailsContextConsumer = () => {
//     return useContext(DetailsContext);
// }