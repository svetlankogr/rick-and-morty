import PropTypes from 'prop-types';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import css from './CharacterList.module.css';

export const CharacterList = ({ characters }) => {
  const sortedCharacters = characters.sort((firstCharacter, secondCharacter) =>
    firstCharacter.name.localeCompare(secondCharacter.name)
  );
  return (
    <ul className={css.list}>
      {sortedCharacters.map(({ name, species, image, id }) => {
        return (
          <CharacterItem
            name={name}
            species={species}
            image={image}
            id={id}
            key={id}
          />
        );
      })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};
