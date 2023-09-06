import {faBackward} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAudio} from "../Provider/AudioProvider.jsx";

const BackwardButton = () => {
    const { audioElement } = useAudio();
    const fastBackward = () => {
        let currentTime = audioElement.currentTime - 10;
        audioElement.currentTime = currentTime < 0 ? 0 : currentTime ;
    }

    return (
        // <button className="cursor-pointer hover:text-indigo-700 fa-solid fa-forward"></button>

        <button className="cursor-pointer hover:text-indigo-700 border-0 fa-solid p-1 bg-transparent
        focus:outline-0 appearance-none "
                onClick={fastBackward}
        ><FontAwesomeIcon className="drop-shadow-lg hover:drop-shadow-md" icon={ faBackward } /></button>

    );
}

export default BackwardButton;