const express = require('express');
const app = express();

const filehound = require('filehound');
const path = require('path');

const basePath = path.join(__dirname, 'guides');
const generalPath = path.join(basePath, 'General');
const rolesPath = path.join(basePath, 'Roles');

async function sidebar(req, res) {
  var guides = await filehound.create()
  .paths(generalPath)
  .find();

  let general = [];
  guides.forEach(guide => {
    const parent = path.basename(path.dirname(guide));
    general.push({
      name: parent,
      action: path.parse(guide).name,
      controller: 'Guides',
      template: path.join(parent, path.basename(guide)).replace(new RegExp(`\\${path.sep}`, 'g'), '/')
    });
  });

  var roles = await filehound.create()
    .paths(rolesPath)
    .find();

  return res.json({
    general
  });
}

app.get('/', sidebar);

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
