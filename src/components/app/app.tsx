import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import PageNotFound from '../../pages/404-not-found/404-not-found';
import PrivateRoute from '../private-root/private-root';
import { TFilm } from '../../mocks/films';
import { checkAuthAction } from '../../store/api-actions';

type AppProps = {
  filmTitle: string;
  genre: string;
  releaseDate: string;
  films: TFilm[];
  genres: string[];
  selectFilmsByGenre: (genre: string, films: TFilm[]) => TFilm[];
  auth: string;
};

const App = ({filmTitle, genre, releaseDate, films, genres, selectFilmsByGenre, auth}: AppProps) => {
  useEffect(() => {
    checkAuthAction();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              films={films}
              filmTitle={filmTitle}
              genre={genre}
              releaseDate={releaseDate}
              genres={genres}
              selectFilmsByGenre={selectFilmsByGenre}
              auth = {auth}
            />
          }
        ></Route>
        <Route path={AppRoute.SignIn} element={<SignIn />}></Route>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path={AppRoute.Film}
          element={<MoviePage films={films} />}
        ></Route>
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films={films} />}
        ></Route>
        <Route
          path={AppRoute.Player}
          element={<Player films={films} />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
