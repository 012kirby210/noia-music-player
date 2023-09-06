import {useAudio} from "../Provider/AudioProvider.jsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

const PlayButton = () => {

    const [ playState, setPlayState ] = useState(false);
    const { audioElement } = useAudio();

    const togglePlay = (event) => {
         ! playState ? audioElement.play() : audioElement.pause();
        setPlayState( ! playState );
    }

    return (
        <button className="cursor-pointer hover:text-indigo-700 border-0 fa-solid p-1 bg-transparent
        focus:outline-0 appearance-none "
        onClick={togglePlay}
        ><FontAwesomeIcon className="drop-shadow-lg hover:drop-shadow-md" icon={ playState ? faPause : faPlay} /></button>
    );
}

export default PlayButton;