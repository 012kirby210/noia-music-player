import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForward} from "@fortawesome/free-solid-svg-icons";
import {useAudio} from "../Provider/AudioProvider.jsx";

const ForwardButton = () => {

    const { audioElement } = useAudio();

    const fastForward = () => {
        audioElement.currentTime = audioElement.currentTime + 10;
    }

    return (
        // <button className="cursor-pointer hover:text-indigo-700 fa-solid fa-forward"></button>

    <button className="cursor-pointer hover:text-indigo-700 border-0 fa-solid p-1 bg-transparent
        focus:outline-0 appearance-none "
            onClick={fastForward}
    ><FontAwesomeIcon className="drop-shadow-lg hover:drop-shadow-md" icon={ faForward } /></button>

    );
}

export default ForwardButton;