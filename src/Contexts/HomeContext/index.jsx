import { createContext } from "react";

const HomeContext = createContext()

export const HomeProvider = ((children) => {
    return (
        <HomeContext.Provider value={{
            imgState,
            setImgState
        }}>
            {children}
        </HomeContext.Provider>
    )
})