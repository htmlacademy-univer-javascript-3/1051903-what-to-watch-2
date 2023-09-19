import { Link, useParams } from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import { AppRoute } from '../../const';
import { TFilm } from '../../mocks/films';
import PageNotFound from '../404-not-found/404-not-found';
import MoreLikeThis from '../../components/more-like-this/more-like-this';

type MoviePageProps = {
  films: TFilm[];
};

const MoviePage = ({ films }: MoviePageProps) => {

  const { id } = useParams();
  if (id === undefined) {
    return <PageNotFound />;
  } else {
    const selectedFilm = films[parseInt(id, 10) - 1];
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
                <h2 className="film-card__title">{selectedFilm.filmName}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{selectedFilm.genre}</span>
                  <span className="film-card__year">{selectedFilm.year}</span>
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
                      to={AppRoute.Player.replace(':id', `${selectedFilm.id}`)}
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
                    to={AppRoute.AddReview.replace(':id', `${selectedFilm.id}`)}
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
                  src="img/the-grand-budapest-hotel-poster.jpg"
                  alt="The Grand Budapest Hotel poster"
                  width="218"
                  height="327"
                />
              </div>

              <Tabs selectedFilm={selectedFilm} />
            </div>
          </div>
        </section>

        <div className="page-content">
          <MoreLikeThis films={films} filmGenre={selectedFilm.genre}/>

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
