import {useAudio} from "../Provider/AudioProvider.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStop} from "@fortawesome/free-solid-svg-icons";

const StopButton = () => {

    const {audioElement} = useAudio();

    const toggleStop = () => {
        audioElement.pause();
    }

    return (
        <button className="cursor-pointer hover:text-indigo-700 border-0 fa-solid p-1 bg-transparent
        focus:outline-0 appearance-none "
                onClick={toggleStop}
        ><FontAwesomeIcon className="drop-shadow-lg hover:drop-shadow-md" icon={ faStop } /></button>
    );
}

export default StopButton;