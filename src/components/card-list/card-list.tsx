import { TFilm } from '../../mocks/films';
import Card from '../card/card';

type CardListProps = {
  films: TFilm[];
};

const CardsList = ({ films }: CardListProps) => (
  <div className="catalog__films-list">
    {Array.from({ length: 20 }, (_, i) => (
      <Card key={i} film={films[i]} />
    ))}
  </div>
);

export default CardsList;
