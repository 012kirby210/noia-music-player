import Artist from "./artist.trackingfeature.component.jsx";
import Title from "./title.trackingfeature.component.jsx";

const TrackingfeaturesComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center text-slate-800">
            <Title />
            <Artist />
        </div>
    );
}

export default TrackingfeaturesComponent;