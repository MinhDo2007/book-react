import React from 'react';
import NotFound from './components/NotFound';
import BookList from './components/BookList';
import Login from './components/Login';
import Home from './components/Home'

const routes = [
  {
    path: '/',
    exact: true,
    main : () => <Home />
  },
  {
    path: '/books',
    exact: false,
    main: ({match, location}) => <BookList match={match} location={location} />
  },
  {
    path: '/login',
    exact: false,
    main: ({location}) => <Login location={location} />
  },
  {
    path: '',
    exact: false,
    main : () => <NotFound />
  }
]

export default routes;
