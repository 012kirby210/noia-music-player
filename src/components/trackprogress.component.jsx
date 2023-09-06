import {useAudio} from "../Provider/AudioProvider.jsx";
import {useEffect, useState} from "react";

const TrackingProgress = () => {

    const { audioElement } = useAudio();

    const [ currentTime, setCurrentTime ] = useState(audioElement.currentTime);

    const reactToTimeUpdateListener = (event) => {
        setCurrentTime(audioElement.currentTime);
    }


    useEffect(() => {
        audioElement.removeEventListener( 'timeupdate', reactToTimeUpdateListener );
        audioElement.addEventListener( 'timeupdate', reactToTimeUpdateListener );
    });


    const formatTime = (timeToFormat) => {
        const hours = Math.floor(timeToFormat/3600);
        const minutes = Math.floor(timeToFormat/60).toString().padStart(2,'0');
        const secondes = Math.floor(timeToFormat%60).toString().padStart(2,'0');
        return (( ! isNaN(hours) && hours > 0 ) ? hours.toString() + ':' : '') + `${minutes}:${secondes}`;
    };

    const currentProgress = ( isNaN(audioElement.duration)
        || isNaN(audioElement.currentTime) || currentTime === 0 ) ? 0 :
        Math.floor((  currentTime / audioElement.duration ) * 100 );

    return (
        <div className="w-full flex flex-col
        items-center justify-center"
        id="progress-container"
        >
            <div className="w-full bg-amber-200 h-4 rounded-full flex justify-start overflow-hidden">
                <div className=" bg-amber-700 opacity-40" style={{ width: `${currentProgress}%`}} ></div>
            </div>
            {/*<progress className="w-full bg-amber-50 text-amber-300" max="100" value={currentProgress}></progress>*/}
            {/*<div className="w-[30%] h-full*/}
            {/*bg-black absolute top-0 left-0 rounded-xl" id="progress"></div>*/}
            <div className="w-full flex justify-center items-center
            text-slate-800 text-sm
            " id="progress-duration">
                <span>{formatTime(currentTime)}</span> |
                <span>{formatTime(audioElement.duration)}</span>
            </div>
        </div>
    );
}

export default TrackingProgress;