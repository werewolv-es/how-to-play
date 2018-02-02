const Filehound = require('filehound');
const path = require('path');
const express = require('express');
const app = express();

const basePath = path.join(__dirname, 'guides');
const generalPath = path.join(basePath, 'General');
const rolesPath = path.join(basePath, 'Roles');

app.get('/', (req, res) => {
  let response = {};

  Filehound.create()
    .paths(generalPath)
    .find().then(files => {
      let general = [];
      files.forEach(file => {
        const parent = path.basename(path.dirname(file));
        general.push({
          name: parent,
          action: path.parse(file).name,
          controller: 'Guides',
          tempalte: path.join(parent, path.basename(file))
        });
      });
      response.general = general;

      res.json(response);
    });
});

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
