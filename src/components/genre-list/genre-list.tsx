import { TFilm } from '../../mocks/films';
import { changeGenre } from '../../store/action';
import CardsList from '../card-list/card-list';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

type GenreListProps = {
  films: TFilm[];
  genres: string[];
  selectFilmsByGenre: (genre: string) => TFilm[];
};

const GenreList = ({ genres, selectFilmsByGenre }: GenreListProps) => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state: any) => state.selectedGenre);
  const genreFilms = selectFilmsByGenre(selectedGenre);
  return (
    <>
      <ul className="catalog__genres-list">
        {/* <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">
            All genres
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Comedies
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Crime
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Documentary
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Dramas
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Horror
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Kids & Family
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Romance
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Sci-Fi
          </a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">
            Thrillers
          </a>
        </li> */}
        {genres.map((genre) => (
          <li
            className={cn('catalog__genres-item', {
              'catalog__genres-item--active': genre === selectedGenre,
            })}
          >
            <p
              className="catalog__genres-link"
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(changeGenre(genre))}
            >
              {genre}
            </p>
          </li>
        ))}
      </ul>

      <CardsList genreFilms={genreFilms} />
    </>
  );
};

export default GenreList;
