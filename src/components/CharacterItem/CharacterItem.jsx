import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './CharacterItem.module.css';

export const CharacterItem = ({ name, species, image, id }) => {
  const location = useLocation();
  return (
    <li className={css.item} key={id}>
      <Link to={`/character/${id}`} state={{ from: location }}>
        <div className={css.item__imgWrapper}>
          <img className={css.item__img} src={image} alt={name} />
        </div>
        <div className={css.item__descr}>
          <h2 className={css.item__name}>{name}</h2>
          <p className={css.item__species}>{species}</p>
        </div>
      </Link>
    </li>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
};
