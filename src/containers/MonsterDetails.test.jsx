import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MonsterDetails from './MonsterDetails';


describe('MonsterPage container', () => {
  it('displays a loading screen then a list of monsters', async() => {
    render(
      <MemoryRouter>
        <MonsterDetails />
      </MemoryRouter>
    );

    screen.getByText('Loading...');
  });
});
