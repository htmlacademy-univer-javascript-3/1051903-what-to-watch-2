type MoreLike = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
};

type MoreLikeThisProps = {
  films: MoreLike[];
  filmGenre: string;
};

const MoreLikeThis = ({ films, filmGenre }: MoreLikeThisProps) => {
  const movieList = films.filter((film) => film.genre === filmGenre);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {movieList.map((film) => (
          <article
            className="small-film-card catalog__films-card"
            key={film.name}
          >
            <div className="small-film-card__image">
              <img
                src={film.previewImage}
                alt={film.name}
                width="280"
                height="175"
              />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">
                {film.name}
              </a>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MoreLikeThis;
