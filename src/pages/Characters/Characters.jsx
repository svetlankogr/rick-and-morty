import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCharacters, getCharacterByQuery } from 'services/api';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { Logo } from 'components/Logo/Logo';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { PaginationBlock } from 'components/PaginationBlock/PaginationBlock';

import css from './Characters.module.css';
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('query') ?? '';
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (!characterName) {
      getCharacters(page).then(({ results, info }) => {
        setCharacters(results);
        setPageCount(info.pages);
      });
      return;
    }
    getCharacterByQuery(characterName, page).then(({ results, info }) => {
      setFilteredCharacters(results);
      setPageCount(info.pages);
    });
  }, [characterName, page]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    setFilteredCharacters('');
    setPage(1);
  };

  const onChange = e => setSearchQuery(e.target.value);
  const onChangePage = (_, num) => setPage(num);
  return (
    <div className={css.charactersPage}>
      <Logo />
      <SearchForm
        searchQuery={searchQuery}
        onFormSubmit={onFormSubmit}
        onChange={onChange}
      />
      {filteredCharacters.length > 0 ? (
        <CharacterList characters={filteredCharacters} />
      ) : (
        <CharacterList characters={characters} />
      )}
      <PaginationBlock
        pageCount={pageCount}
        page={page}
        onChange={onChangePage}
      />
    </div>
  );
};
export default Characters;
