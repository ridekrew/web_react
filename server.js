import express from 'express';
import path from 'path';
import handleRender from './built/server.js';

const app = express();
app.use('/built', express.static(path.join(__dirname, 'built')));
app.get('*', handleRender);
app.listen(3000);
console.log('=== Go to http://localhost:3000 ===');
