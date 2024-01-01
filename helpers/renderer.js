import React from 'react';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import Routes from '../src/Routes';

export default function renderer(req, context) {
  const stringContent = renderToString(
    <StaticRouter location={req.path} context={context}>
      {renderRoutes(Routes)}
    </StaticRouter>
  );

  return `
 <!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Ugo</title>
   
  </head>

  <body>
    <div id="root">${stringContent}</div>


    <script src="/bundle.js"></script>
  </body>
</html>

  
  `;
}
