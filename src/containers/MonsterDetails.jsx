import React from 'react';
import { useMonsterDetails } from '../hooks/monsterDetails';

export default function MonsterDetails() {
  const { loading, monster } = useMonsterDetails();

  if(loading) return <h1>Loading...</h1>;
  return (
    <div data-testid="monster-details">
      <h1>{name}</h1>
      <img src={monster[0].image} alt={name} />
      <figcaption>
        <p>description:{monster[0].description}</p>
        <p>gender:{monster[0].gender}</p>
      </figcaption>
    </div>
  );
}
