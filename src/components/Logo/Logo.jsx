import logo from '../../images/main_logo.png';
import css from './Logo.module.css';
export const Logo = () => {
  return <img src={logo} alt="logo" className={css.logo} />;
};
