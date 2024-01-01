import App from './App';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true,
      },

      {
        component: NotFoundPage,
      },
    ],
  },
];
