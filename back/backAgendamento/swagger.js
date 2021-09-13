const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/agendamento.routes.js', './routes/posto.routes.js', './routes/unidade.routes.js', './controllers/authController.js', './controllers/projectController.js'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js');
});