import { TFilm } from '../../mocks/films';

type VideoPlayerProps = {
  film: TFilm;
};

const VideoPlayer = ({ film }: VideoPlayerProps) => (
  <video src={film.overviewDetails.src} autoPlay muted width="280" height="175" />
);
export default VideoPlayer;
