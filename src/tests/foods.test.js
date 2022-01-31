import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import renderWithRouter from '../helpers/renderWithRouter';
import Foods from '../pages/Foods/index';
import searchIcon from '../assets/images/searchIcon.svg';
import profileIcon from '../assets/images/profileIcon.svg';

describe('1 - Foods Page Header', () => {
  it('verifies search icon, user icon and page title', () => {
    renderWithRouter(<Foods />);
    const magnifierIcon = screen.getAllByRole('img')[1];
    const userIcon = screen.getAllByRole('img')[0];
    const pageTitle = screen.getByText('Foods');
    const srcMagnifierIcon = magnifierIcon.getAttribute('src');
    const srcUserIcon = userIcon.getAttribute('src');
    expect(pageTitle).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
    expect(magnifierIcon).toBeInTheDocument();
    expect(srcMagnifierIcon).toBe(searchIcon);
    expect(srcUserIcon).toBe(profileIcon);
  });

  it('verifies if the input appears when the user clicks on the search icon', () => {
    renderWithRouter(<Foods />);
    let searchTextInput = screen.queryByRole('textbox');
    expect(searchTextInput).not.toBeInTheDocument();
    const magnifierIcon = screen.getAllByRole('img')[1];
    userEvent.click(magnifierIcon);
    searchTextInput = screen.queryByRole('textbox');
    expect(searchTextInput).toBeInTheDocument();
  });

  it('verifies if there are three check boxes', () => {

  });

  it('verifies if there is a search button', () => {

  });
});

describe('2 - Foods Page', () => {
  it('verifies if there are image cards on the page', () => {

  });

  it('verifies if there is a footer in the page', () => {

  });

  it('verifies if the footer has three icons', () => {

  });
});
