
// eslint-disable-next-line react/prop-types
const ImageTrack = ({source, alternate}) => {
    return (
        <div className="w-full max-w-xs h-full max-h-xs overflow-hidden rounded-xl">
            <img src={source} alt={alternate} className="" />
        </div>
    );
}



export default ImageTrack;