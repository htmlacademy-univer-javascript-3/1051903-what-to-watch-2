import { TFilm } from '../../mocks/films';

type MoviePageOverviewProps = {
  selectedFilm: TFilm;
};

const MoviePageOverview = ({ selectedFilm }: MoviePageOverviewProps) => {
  const getRatingDescription = (rating: number) => {
    const ratingDescriptions: { [key: number]: string } = {
      0: 'Bad',
      1: 'Bad',
      2: 'Bad',
      3: 'Normal',
      4: 'Normal',
      5: 'Good',
      6: 'Good',
      7: 'Good',
      8: 'Very good',
      9: 'Very good',
      10: 'Awesome',
    };

    return ratingDescriptions[Math.floor(rating)] || 'Ещё не оценено';
  };
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {selectedFilm.overviewDetails.rate}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getRatingDescription(selectedFilm.overviewDetails.rate)}
          </span>
          <span className="film-rating__count">
            {selectedFilm.overviewDetails.ratingsNumber} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{selectedFilm.overviewDetails.description}</p>

        <p className="film-card__director">
          <strong>Director: {selectedFilm.overviewDetails.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {selectedFilm.overviewDetails.starring}</strong>
        </p>
      </div>
    </>
  );
};

export default MoviePageOverview;
