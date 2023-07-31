const TrackingProgress = () => {
    return (
        <div className="w-full bg-white h-4 flex flex-col
        items-center justify-center relative rounded-xl"
        id="progress-container"
        >
            <div className="w-[30%] h-full
            bg-black absolute top-0 left-0 rounded-xl" id="progress"></div>
            <div className="w-full flex justify-center items-center
            text-slate-800 text-sm
            " id="progress-duration">
                <span>0:00</span>
                <span>0:00</span>
            </div>
        </div>
    );
}

export default TrackingProgress;