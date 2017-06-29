import routes from './src/routes';
import React from 'react';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import express from 'express';

const app = express();

app.use(express.static('/style'));

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml));
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/style/style.css">
        <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">
        <title>Krew</title>
      </head>
      <body>
        <div class="container-fluid">${appHtml}</div>
      </body>
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXFNPrKzchkSiVScDviUHMuPHXlp6sTqA&libraries=places"></script>
      <script src="/bundle.js"></script>
    </html>
  `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
