import fs from 'fs';
import React from 'react';
import routes from './src/routes';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import Transmit from 'react-transmit';

function handleRender(req, res) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      Transmit.renderToString(RouterContext, props).then(({reactString, reactData}) => {
        fs.readFile('./index.html', 'utf8', function(err, file) {
          if(err) {
            return console.log(err);
          }
          const document = file.replace(/<div class="container-fluid"><\/div>/, `<div class="container-fluid">${reactString}</div>`)
          const output = Transmit.injectIntoMarkup(document, reactData, ['/built/client.js']);
          res.send(output);
        })
      }).catch(e => console.log(e));
    } else {
      res.status(404).send('Not Found')
    }
  })
}

export default handleRender;
