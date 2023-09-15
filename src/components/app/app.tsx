import Main from '../../pages/main/main';

type AppProps = {
  filmTitle: string;
  genre: string;
  releaseDate: string;
};

const App = ({ filmTitle, genre, releaseDate }: AppProps) => (
  <Main filmTitle={filmTitle} genre={genre} releaseDate={releaseDate}></Main>
);

export default App;
