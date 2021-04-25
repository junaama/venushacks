import { useEffect } from 'react';
import videojs from 'video.js';
import "video.js/dist/video-js.css";

const VideoPlayer = ({videoRef}) => {
    const videoRef = React.useRef();
    const {id, url, thumbnail} = video;

    useEffect(()=> {
        const videoJsPlayer = videojs(videoRef.current);

        videoJsPlayer.poster(thumbnail);
        videoJsPlayer.src(url);

        videoJsPlayer.on("ended", () => {
            //addVideoView(id);
        })
    },[id, thumbnail,url])

    return (
        <div>
            <video controls ref={videoRef} className=""></video>
        </div>
    )
}
export default VideoPlayer;