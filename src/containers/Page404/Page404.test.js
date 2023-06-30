import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page404 from './Page404';

describe('Page404', () => {
  it('should navigate to home page when button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );

    fireEvent.click(getByText('Back Home'));
    expect(global.window.location.pathname).toBe('/');
  });
});