import { TFilm } from '../../mocks/films';
import Card from '../card/card';

type CardListProps = {
  genreFilms: TFilm[];
};

const CardsList = ({ genreFilms }: CardListProps) => (
  <div className="catalog__films-list">
    {genreFilms.map((film) => (
      <Card film={film} key={film.name} />
    ))}
  </div>
);

export default CardsList;
