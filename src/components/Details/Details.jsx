import css from './Details.module.css';
export const Details = ({
  name,
  gender,
  species,
  status,
  origin,
  type,
  image,
}) => {
  return (
    <>
      <div className={css.imgWrapper}>
        <img src={image} alt={name} />
      </div>
      <h2 className={css.name}>{name}</h2>
      <h3 className={css.title}>Informations</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.subtitle}>Gender</p>
          <p className={css.descr}>{gender}</p>
        </li>
        <li className={css.item}>
          <p className={css.subtitle}>Status</p>
          <p className={css.descr}>{status}</p>
        </li>
        <li className={css.item}>
          <p className={css.subtitle}>Specie</p>
          <p className={css.descr}>{species}</p>
        </li>
        <li className={css.item}>
          <p className={css.subtitle}>Origin</p>
          <p className={css.descr}>{origin.name}</p>
        </li>
        <li className={css.item}>
          <p className={css.subtitle}>Type</p>
          <p className={css.descr}>{type ? type : 'unknown'}</p>
        </li>
      </ul>
    </>
  );
};
