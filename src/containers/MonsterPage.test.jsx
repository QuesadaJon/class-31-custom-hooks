import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MonsterPage from './MonsterPage';


describe('MonsterPage container', () => {
  it('displays a loading screen then a list of monsters', async() => {
    render(
      <MemoryRouter> 
        <MonsterPage />
      </MemoryRouter>);

    screen.getByText('Loading...');

    const ul = await screen.findByTestId('monsters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
