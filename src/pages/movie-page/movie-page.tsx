import { Link, useParams } from 'react-router-dom';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import Tabs from '../../components/tabs/tabs';
import { AppRoute } from '../../const';
import { Film, TFilm } from '../../mocks/films';
import { store } from '../../store';
import PageNotFound from '../404-not-found/404-not-found';
import { State, fetchSelectedFilmAction, fetchMoreLikeFilmsAction, fetchCommentsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



type Films = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
};

const MoviePage = () => {
  const { id } = useParams();
  const films: Films[] = useSelector((state: State) => state.previewFilms) 
  if (id === undefined || !films.find((film) => film.id === id)) {
    return <PageNotFound />;
  } else {
    const film: Film = useSelector((state: State) => state.selectedFilm);
    const moreLikeFilms: Films[] = useSelector((state: State) => state.moreLike);
    useEffect(() => {
      store.dispatch(fetchSelectedFilmAction(id));
      store.dispatch(fetchMoreLikeFilmsAction(id));
      store.dispatch(fetchCommentsAction(id));
    }, [id]);
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img
                src="img/bg-the-grand-budapest-hotel.jpg"
                alt="The Grand Budapest Hotel"
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img
                      src="img/avatar.jpg"
                      alt="User avatar"
                      width="63"
                      height="63"
                    />
                  </div>
                </li>
                <li className="user-block__item">
                  <a className="user-block__link">Sign out</a>
                </li>
              </ul>
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
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
                      to={AppRoute.Player.replace(':id', `${film.id}`)}
                      style={{ textDecoration: 'none', color: '#eee5b5' }}
                    >
                      <span>Play</span>
                    </Link>
                  </button>
                  <button
                    className="btn btn--list film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{films.length}</span>
                  </button>
                  <Link
                    to={AppRoute.AddReview.replace(':id', `${film.id}`)}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img
                  src={film.posterImage}
                  alt={film.name}
                  width="218"
                  height="327"
                />
              </div>

              <Tabs selectedFilm={film} />
            </div>
          </div>
        </section>

        <div className="page-content">
          <MoreLikeThis films={moreLikeFilms} />

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
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
  }
};

export default MoviePage;
