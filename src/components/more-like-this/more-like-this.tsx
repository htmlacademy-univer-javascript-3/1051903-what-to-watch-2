import { TFilm } from '../../mocks/films';

type MoreLikeThisProps = {
  films: TFilm[];
  filmGenre: string;
};

const MoreLikeThis = ({ films, filmGenre }: MoreLikeThisProps) => {
  const movieList = films.filter((film) => film.genre === filmGenre);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {movieList.map((film) => (
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
                {film.filmName}
              </a>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MoreLikeThis;
