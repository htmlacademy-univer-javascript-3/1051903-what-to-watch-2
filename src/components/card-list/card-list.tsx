import { TFilm } from '../../mocks/films';
import Card from '../card/card';

type CardListProps = {
  genreFilms: TFilm[];
};

const CardsList = ({ genreFilms }: CardListProps) => (
  <div className="catalog__films-list">
    {genreFilms.map((film) => (
      <Card film={film} key={film.filmName} />
    ))}
  </div>
);

export default CardsList;

// {Array.from({ length: 20 }, (_, i) => (
//   <Card key={i} film={films[i]} />
// ))}
