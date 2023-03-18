import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from 'services/api';
import { Details } from 'components/Details/Details';
import { GoBack } from 'components/GoBack/GoBack';
import css from './CharacterDetails.module.css';

const CharacterDetails = () => {
  const { idCharacter } = useParams();

  const [character, setCharacter] = useState(null);
  useEffect(() => {
    getCharacterById(idCharacter).then(data => {
      setCharacter(data);
    });
  }, [idCharacter]);
  if (!character) {
    return;
  }

  const { name, gender, species, status, origin, type, image } = character;
  return (
    <div className={css.characterPage}>
      <GoBack />
      <Details
        name={name}
        gender={gender}
        species={species}
        status={status}
        origin={origin}
        type={type}
        image={image}
      />
    </div>
  );
};

export default CharacterDetails;
