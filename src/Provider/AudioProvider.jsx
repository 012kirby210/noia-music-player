import {createContext, useContext, useEffect} from "react";
import {useState} from "react";

const AudioProviderContext = createContext();

// eslint-disable-next-line react/prop-types
const AudioProvider = ({children}) => {
    const audioElement = new Audio('./mixe1.mp3');

    return (
        <AudioProviderContext.Provider value={{audioElement}} >
            {children}
        </AudioProviderContext.Provider>
    )
}

const useAudio = () => {
    const context = useContext(AudioProviderContext);
    if ( ! context ){
        throw new Error('useAudio doit être utilisé dans un provider AudioProvider');
    }
    return context;
}

export { AudioProvider, useAudio };