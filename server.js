const express = require('express');
const app = express();
const filehound = require('filehound');
const path = require('path');

const basePath = path.join(__dirname, 'guides');
const generalPath = path.join(basePath, 'General');
const rolesPath = path.join(basePath, 'Roles');

async function sidebar(req, res) {
  let general = [];
  await filehound
    .create()
    .paths(generalPath)
    .depth(1)
    .find()
    .each(guide => {
      general.push({
        name: getParent(guide),
        action: path.parse(guide).name,
        controller: 'Guides',
        template: getTemplate(guide)
      });
    });

  let roles = [];
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
        action: 'Index',
        controller: 'Roles',
        template: `${getTemplate(faction)}.cshtml`,
        roles: []
      };

      const factionRoles = filehound
        .create()
        .paths(path.join(rolesPath, factionFolder))
        .discard(`${factionFolder}.cshtml`)
        .depth(1)
        .findSync();

      factionRoles.forEach(factionRole => {
        const roleName = path.parse(factionRole).name;
        roleFaction.roles.push({
          name: roleName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim(),
          action: roleName,
          controller: 'Roles',
          template: `${factionName}/${getTemplate(factionRole)}`
        })
      });

      roles.push(roleFaction);
    });

  return res.json({
    general,
    roles
  });
}

function getParent(file) {
  return path.basename(path.dirname(file));
}

function getTemplate(file) {
  return path.join(getParent(file), path.basename(file)).replace(new RegExp(`\\${path.sep}`, 'g'), '/')
}

app.set('json spaces', 2);

app.get('/', sidebar);

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
