import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

// Без экспорта линтер выводит ошибку
export const Settings = {
  filmTitle: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: '2014',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmTitle={Settings.filmTitle}
      genre={Settings.genre}
      releaseDate={Settings.releaseDate}
    >
    </App>
  </React.StrictMode>
);
