import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getCharacterById } from 'services/api';
import { Details } from 'components/Details/Details';
// import css from './MovieDetails.module.css';

const CharacterDetails = () => {
  const location = useLocation();

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
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <Details
        name={name}
        gender={gender}
        species={species}
        status={status}
        origin={origin}
        type={type}
        image={image}
      />
    </>
  );
};

export default CharacterDetails;
