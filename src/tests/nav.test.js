import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/nav';

test('renders Nav component without errors', () => {
    render(
      <Router>
        <Nav />
      </Router>
    );
  });
  