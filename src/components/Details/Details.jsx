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
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>Informations</h3>
      <ul>
        <li>
          <p>Gender</p>
          <p>{gender}</p>
        </li>
        <li>
          <p>Status</p>
          <p>{status}</p>
        </li>
        <li>
          <p>Specie</p>
          <p>{species}</p>
        </li>
        <li>
          <p>Origin</p>
          <p>{origin.name}</p>
        </li>
        <li>
          <p>Type</p>
          <p>{type}</p>
        </li>
      </ul>
    </div>
  );
};
