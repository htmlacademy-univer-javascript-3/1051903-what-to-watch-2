import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GenreList from '../../components/genre-list/genre-list';
import ShowMore from '../../components/show-more/show-more';
import Spinner from '../../components/spinner/spinner';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { TFilm } from '../../mocks/films';
import Logo from '../../components/logo/logo';
import { useSelector } from 'react-redux';
import { State, logoutAction } from '../../store/api-actions';
import { store } from '../../store';
import { MoreLike } from '../../components/more-like-this/more-like-this';

type MainProps = {
  films: TFilm[];
  genres: string[];
  selectFilmsByGenre: (genre: string, films: MoreLike[]) => MoreLike[];
  isLoading: boolean;
};

type User = {
  email: string;
  name: string;
  avatarUrl: string;
};

export type PromoFilm = {
  id?: string;
  name?: string;
  posterImage?: string;
  backgroundImage?: string;
  videoLink?: string;
  genre?: string;
  released?: number;
  isFavorite?: boolean;
}

export type FavoriteFilm = {
  id?: string;
  name?: string;
  previewImage?: string;
  previewVideoLink?: string;
  genre?: string;
}

const Main = ({ films, genres, selectFilmsByGenre, isLoading }: MainProps) => {
  const [visibleFilms, setVisibleFilms] = useState(8);
  const addMoreFilms = () => setVisibleFilms(visibleFilms + 8);
  const user: User = useSelector((state:State) => state.user);
  const authStatus: string = useSelector((state:State) => state.authorizationStatus);
  const promoFilm : PromoFilm = useSelector((state: State) => state.promoFilm);
  const favoriteFilms : FavoriteFilm[] = useSelector((state: State) => state.favoriteFilms);

  const navigate = useNavigate();
  const handleSignOut = () => {
    store.dispatch(logoutAction());
    navigate(AppRoute.Main);
  };

  const changeFavoriteFilms = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(APIRoute.SignIn);
    } else {
      //code for list changing
    }
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          {authStatus === AuthorizationStatus.Auth ? (
            <ul className="user-block">
              <div className="user-name" style={{ marginRight: '20px' }}>
                {user.name}
              </div>
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src={user.avatarUrl}
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" onClick={handleSignOut}>
                  Sign out
                </a>
              </li>
            </ul>
          ) : (
            <Link
              to={AppRoute.SignIn}
              style={{ textDecoration: 'none', marginLeft: 'auto' }}
            >
              <ul className="user-block">
                <li className="user-block__item">
                  <a className="user-block__link">Sign In</a>
                </li>
              </ul>
            </Link>
          )}
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm.posterImage}
                alt={promoFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <Link
                    to={promoFilm.id ? AppRoute.Player.replace(':id', `${promoFilm.id}`) : ''}
                    style={{ textDecoration: 'none', color: '#eee5b5' }}
                  >
                    <span>Play</span>
                  </Link>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={changeFavoriteFilms}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">
                    {favoriteFilms.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {isLoading ? (
            <Spinner />
          ) : (
            <GenreList
              visibleFilms={visibleFilms}
              genres={genres}
              selectFilmsByGenre={selectFilmsByGenre}
              setVisibleFilms={setVisibleFilms}
            />
          )}

          {films.length > visibleFilms && (
            <ShowMore addMoreFilms={addMoreFilms} />
          )}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
