const express = require('express');
const app = express();
const filehound = require('filehound');
const path = require('path');

const basePath = path.join(__dirname, 'guides');
const generalPath = path.join(basePath, 'General');
const rolesPath = path.join(basePath, 'Roles');

async function sidebar(req, res) {
  let guides = [];
  let general = {
    name: 'General',
    guides: []
  };
  await filehound
    .create()
    .paths(generalPath)
    .depth(1)
    .find()
    .each(guide => {
      general.guides.push({
        name: formatName(getParent(guide)),
        id: path.parse(guide).name,
        template: `General/${getTemplate(guide)}`
      });
    });
  guides.push(general);

  await filehound
    .create()
    .paths(rolesPath)
    .directory()
    .depth(1)
    .find()
    .each(faction => {
      const factionFolder = path.basename(faction);
      const factionName = factionFolder.replace(/\d+-/, '');
      let roleFaction = {
        name: `The ${factionName}`,
        id: factionName,
        template: `${getTemplate(faction)}.cshtml`,
        guides: []
      };

      const factionRoles = filehound
        .create()
        .paths(path.join(rolesPath, factionFolder))
        .discard(`${factionFolder}.cshtml`)
        .depth(1)
        .findSync();

      factionRoles.forEach(factionRole => {
        const roleName = path.parse(factionRole).name;
        roleFaction.guides.push({
          name: formatName(roleName),
          id: roleName,
          template: `Roles/${getTemplate(factionRole)}`
        })
      });

      guides.push(roleFaction);
    });

  return res.json(guides);
}

function getParent(file) {
  return path.basename(path.dirname(file));
}

function getTemplate(file) {
  return path.join(getParent(file), path.basename(file)).replace(new RegExp(`\\${path.sep}`, 'g'), '/')
}

function formatName(name) {
  return name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim()
}

app.set('json spaces', 2);

app.get('/', sidebar);

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
