import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getMonsterByName } from '../services/xfilesApi';

export default function MonsterDetails() {
  const [monster, setMonster] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getMonsterByName(name)
      .then((monster) => setMonster(monster));
  }, []);

  const { image, description, categories, gender } = monster;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image}/>
      <figcaption>
        <p>{description}</p>
        <p>{categories}</p>
        <p>{gender}</p>
      </figcaption>
      <Link to="/">List Page</Link>
    </div>
  );
};

MonsterDetails.propTypes = {
  match: PropTypes.shape({
    params: 
  })
}
