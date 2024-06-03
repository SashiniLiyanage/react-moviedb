import React, {useState, createContext} from 'react';

export const Context = createContext();

const UserProvider = ({children})=>{
    let init;
    if(sessionStorage.getItem('rmdbSessionId')){
        init = JSON.parse(sessionStorage.getItem('rmdbSessionId'))
    }
    const [state, setState] = useState(init);

    return (
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    )
}

export default UserProvider;