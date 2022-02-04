import { Notify } from 'notiflix';
import React, { useContext, useEffect, useState } from 'react';
import { getMoviesByQuery } from '../api/api';
import SearchForm from '../Components/SearchForm';
import MoviesList from '../Components/MoviesList/MoviesList';
import { QueryContext } from '../Components/App';

const MoviesView = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const { query, setQuery } = useContext(QueryContext);

  useEffect(() => {
    let cancelled = false;

    query &&
      getMoviesByQuery(query)
        .then(data => !cancelled && setMovies(data))
        .catch(() => Notify.failure('Something went wrong!'));

    return () => {
      cancelled = true;
    };
  }, [query]);

  const onSubmit = query => setQuery(query);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesView;
