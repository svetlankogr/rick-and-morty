import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCharacters, getCharacterByQuery } from 'services/api';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { Logo } from 'components/Logo/Logo';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { PaginationBlock } from 'components/PaginationBlock/PaginationBlock';
import { Loader } from 'components/Loader/Loader';
import { BtnUp } from 'components/BtnUp/BtnUp';

import css from './Characters.module.css';
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('query') ?? '';
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!characterName) {
      getCharacters(page)
        .then(({ results, info }) => {
          setCharacters(results);
          setPageCount(info.pages);
        })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false), setError(null));
      return;
    }
    getCharacterByQuery(characterName, page)
      .then(({ results, info }) => {
        setCharacters(results);
        setPageCount(info.pages);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false), setError(null));
  }, [characterName, page]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    setPage(1);
  };

  const onChange = e => setSearchQuery(e.target.value);
  const onChangePage = (_, num) => setPage(num);
  return (
    <>
      {loading && <Loader />}
      <div className={css.charactersPage}>
        <Logo />
        <SearchForm
          searchQuery={searchQuery}
          onFormSubmit={onFormSubmit}
          onChange={onChange}
        />
        {error ? (
          <p className={css.error}>
            The character was not found. Enter the correct name.
          </p>
        ) : (
          <CharacterList characters={characters} />
        )}
        {error ? (
          ''
        ) : (
          <PaginationBlock
            pageCount={pageCount}
            page={page}
            onChange={onChangePage}
          />
        )}

        <BtnUp />
      </div>
    </>
  );
};
export default Characters;
