import App from './App';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
        component: Projects,
        path: '/projects',
      },
      {
        component: Contact,
        path: '/contact',
      },

      {
        component: NotFoundPage,
      },
    ],
  },
];
