import React from 'react';
import PropTypes from 'prop-types';

const Monster = ({ name, image }) => (
  <figure>
    <p>{name}</p>
    <img src={image} alt={name} />
  </figure>
  
);

Monster.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Monster;
