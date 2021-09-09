const fs = require('fs');
const path = require('path');

//Faz a importação de todos os controllers criados e os joga para o index.js principal
module.exports = app => {
    fs
    .readdirSync(__dirname)
    .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))
    .forEach(file => require(path.resolve(__dirname, file))(app));
};