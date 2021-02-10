import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Monster from './Monster';

const MonsterList = ({ monsters }) => {
  const monsterElements = monsters.map((monster) => (
    <li key={monster.name}>
      <Link to={`/monster/${monster.name}`}>
        <Monster
          name={monster.name}
          image={monster.image}
        />
      </Link>
    </li>
  ));
  return <ul data-testid="monsters">{monsterElements}</ul>;
};

MonsterList.propTypes = {
  monsters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MonsterList;
