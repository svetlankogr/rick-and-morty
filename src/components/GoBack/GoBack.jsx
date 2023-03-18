import { Link, useLocation } from 'react-router-dom';
import arrowBack from '../../images/icon_arrowBack.svg';
import css from './GoBack.module.css';

export const GoBack = () => {
  const location = useLocation();
  return (
    <Link className={css.back} to={location.state?.from ?? '/'}>
      <img className={css.arrowBack} src={arrowBack} alt="arrowBack" />
      <p className={css.text}>GO BACK</p>
    </Link>
  );
};
