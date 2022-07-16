import React from 'react';
import App from '../../src/App';
import InputForm from '../../src/InputForm';
import BucketList from '../../src/BucketList';
import ListItem from '../../src/ListItem';

describe('Bucket List Application Tests', () => {
  it('Can visit the application', () => {
    cy.visit('http://localhost:3000')
  });

  it('App component mounts', () => {
    cy.mount(<App />)
  });

  it('InputForm component mounts', () => {
    cy.mount(<InputForm />)
  });

  it('BucketList component mounts', () => {
    cy.mount(<BucketList />)
  });

  it('ListItem components mount', () => {
    cy.mount(<ListItem />)
  });




})