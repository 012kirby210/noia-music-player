import BackwardButton from "./backward.controls.component.jsx";
import PlayButton from "./play.controls.component.jsx";
import StopButton from "./stop.controls.component.jsx";
import ForwardButton from "./forward.controls.component.jsx";

const TrackControl = () => {
    return (
      <div className="flex justify-center items-center gap-6 text-4xl text-indigo-500 my-6">
          <BackwardButton />
          <PlayButton />
          <ForwardButton />
      </div>
    );
}

export default TrackControl;