import React from 'react';
import { render } from '@testing-library/react';
import MonsterList from './MonsterList';
import { MemoryRouter } from 'react-router-dom';

const monsters = [
  {
    image: 'https://image.com',
    name: 'name',
  },
  {
    image: 'https://image.com',
    name: 'bob',
  },
  {
    image: 'https://image.com',
    name: 'sarah',
  }
];

describe('MonsterList component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <MonsterList monsters={monsters} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
})
;
