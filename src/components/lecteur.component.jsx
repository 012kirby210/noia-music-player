import TrackimageComponent from "./trackimage.component.jsx";
import imgurl from '../assets/images/rick_and_morty.png';
import TrackFeatures from "./trackingfeatures.component.jsx";
import TrackProgress from "./trackprogress.component.jsx";
import TrackControl from "./controls.component.jsx";

const track = {
    path: 'assets/mixe1.mp3',
    title: 'Hopkins mix',
    artist: 'John Hopkins'
}

const LecteurComponent = () => {

    return (
        <div className="bg-slate-200 max-w-md w-full rounded-xl h-md
            flex flex-col justify-center items-center p-4
        ">
            <TrackimageComponent source={imgurl} alternate="Rick and Morty" />
            <TrackFeatures />
            <TrackProgress />
            <TrackControl />
        </div>
    );
}

export default LecteurComponent;