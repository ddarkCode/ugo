import { config } from 'dotenv';
config();

import express from 'express';
import React from 'react';
import debug from 'debug';
import { matchRoutes } from 'react-router-config';

import renderer from './helpers/renderer';
import errorHandler from './middlewares/errorHandler';
import Routes from './src/Routes';

const log = debug('index');
const { FRONTEND_URL } = process.env;

const PORT = process.env.PORT || 7777;

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.get('*', (req, res) => {
  const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
    return route.loadData ? route.loadData() : Promise.resolve(null);
  });

  Promise.all(promises).then(() => {
    const context = {};
    const html = renderer(req, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    return res.send(html);
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  log(`Server is running on ${PORT}`);
});
