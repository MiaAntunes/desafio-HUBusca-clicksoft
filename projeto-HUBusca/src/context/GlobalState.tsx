import {Dispatch, SetStateAction, createContext, useState } from "react"


type ContextType = {
    detailsUser: IUserGithub | [];
    setDetailsUser: Dispatch<SetStateAction<IUserGithub | []>>;
};

export const GlobalContext = createContext<ContextType | undefined>(undefined);

export const GlobalState = (props:any) =>{
    const [detailsUser, setDetailsUser] = useState<IUserGithub | []>([]);


    const context : ContextType = {
       detailsUser,
       setDetailsUser
    }

    return(
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}