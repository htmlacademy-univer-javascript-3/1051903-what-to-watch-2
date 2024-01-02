import Logo from '../../components/logo/logo';
import { TFilm } from '../../mocks/films';

type MyListProps = {
  films: TFilm[];
};

const MyList = ({ films }: MyListProps) => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>

      <h1 className="page-title user-page__title">
        My list <span className="user-page__film-count">{films.length}</span>
      </h1>
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

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        {films.map((film) => (
          <article
            key={film.id}
            className="small-film-card catalog__films-card"
          >
            <div className="small-film-card__image">
              <img
                src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                alt={film.filmName}
                width="280"
                height="175"
              />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">
                {film.filmName}
              </a>
            </h3>
          </article>
        ))}
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
);

export default MyList;
