import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Monster from './Monster';

describe('Monster component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Monster 
          name="Fredrick"
          image="http//image.com"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
})
;
