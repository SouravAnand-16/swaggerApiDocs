const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'User Management System',
        version: '1.0.0',
      },
      servers:[
          {
                url:"http://localhost:3000"
          }
      ]
    },
    apis: ["./routes/*.js"], 
  };
  const openapiSpecification = swaggerJsdoc(options);

  module.exports = openapiSpecification ;