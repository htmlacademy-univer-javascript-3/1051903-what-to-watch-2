import { TFilm } from '../../mocks/films';
import { changeGenre } from '../../store/action';
import CardsList from '../card-list/card-list';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

type GenreListProps = {
  visibleFilms: number;
  genres: string[];
  selectFilmsByGenre: (genre: string) => TFilm[];
  setVisibleFilms: any
};

const GenreList = ({ genres, selectFilmsByGenre, visibleFilms, setVisibleFilms }: GenreListProps) => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state: any) => state.selectedGenre);
  const genreFilms = selectFilmsByGenre(selectedGenre);
  const genreFilmsToShow = genreFilms.slice(0,visibleFilms);
  useEffect(()=> {
    setVisibleFilms(8)
  }, [])
  return (
    <>
      <ul className="catalog__genres-list">
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

      <CardsList genreFilms={genreFilmsToShow} />
    </>
  );
};

export default GenreList;
