import { AppRoute } from '../../const';
import { TFilm } from '../../mocks/films';
import PageNotFound from '../404-not-found/404-not-found';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';


type MoviePageProps = {
  films: TFilm[];
};

const MoviePage = ({ films }: MoviePageProps) => {
  // const getRatingDescription = (rating: number) => {
  //   const ratingDescriptions: { [key: number]: string } = {
  //     1: 'Bad',
  //     2: 'Bad',
  //     3: 'Bad',
  //     4: 'Bad',
  //     5: 'Bad',
  //     6: 'Normal',
  //     7: 'Good',
  //     8: 'Very good',
  //     9: 'Awesome',
  //     10: 'Awesome',
  //   };

  //   return ratingDescriptions[Math.floor(rating)] || 'Ещё не оценено';
  // };
  const [activeButton, setActiveButton] = useState('Overview');


  const { id } = useParams();
  if (id === undefined) {
    return <PageNotFound />;
  } else {
    const selectedFilm = films[parseInt(id) - 1];
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
                    <Link to={AppRoute.Player.replace(':id', `${selectedFilm.id}`)} style={{ textDecoration: 'none', color:'#eee5b5'}}>
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
                  <Link to={AppRoute.AddReview.replace(':id', `${selectedFilm.id}`)} className="btn film-card__button">
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

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className={`film-nav__item ${activeButton === 'Overview' ? 'film-nav__item--active' : ''}`}>
                      <p className="film-nav__link" onClick={() => setActiveButton('Overview')} style={{cursor:'pointer'}}>
                        Overview
                      </p>
                    </li>
                    <li className={`film-nav__item ${activeButton === 'Details' ? 'film-nav__item--active' : ''}`} >
                      <p className="film-nav__link" onClick={() => setActiveButton('Details')} style={{cursor:'pointer'}}>
                        Details
                      </p>
                    </li>
                    <li className={`film-nav__item ${activeButton === 'Reviews' ? 'film-nav__item--active' : ''}`}>
                      <p className="film-nav__link" onClick={() => setActiveButton('Reviews')} style={{cursor:'pointer'}}>
                        Reviews
                      </p>
                    </li>
                  </ul>
                </nav>
                {activeButton === 'Overview' && <MoviePageOverview selectedFilm={selectedFilm}/>}
                {activeButton === 'Details' && <MoviePageDetails selectedFilm={selectedFilm}/>}
                {activeButton === 'Reviews' && <MoviePageReviews selectedFilm={selectedFilm}/>}
                
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img
                    src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                    alt="Fantastic Beasts: The Crimes of Grindelwald"
                    width="280"
                    height="175"
                  />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">
                    Fantastic Beasts: The Crimes of Grindelwald
                  </a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img
                    src="img/bohemian-rhapsody.jpg"
                    alt="Bohemian Rhapsody"
                    width="280"
                    height="175"
                  />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">
                    Bohemian Rhapsody
                  </a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img
                    src="img/macbeth.jpg"
                    alt="Macbeth"
                    width="280"
                    height="175"
                  />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">
                    Macbeth
                  </a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img
                    src="img/aviator.jpg"
                    alt="Aviator"
                    width="280"
                    height="175"
                  />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">
                    Aviator
                  </a>
                </h3>
              </article>
            </div>
          </section>

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
