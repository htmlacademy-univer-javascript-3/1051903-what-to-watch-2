
type VideoPlayerProps = {
  film: any;
};

const VideoPlayer = ({ film }: VideoPlayerProps) => (
  <video src={film.previewVideoLink} autoPlay muted width="280" height="175" />
);
export default VideoPlayer;
