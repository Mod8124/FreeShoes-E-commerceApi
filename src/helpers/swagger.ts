import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi, { serve } from 'swagger-ui-express';
import express, { Request, Response, Express } from 'express';

// Basic Meta Information about our API
const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Shoes Api',
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
    servers: [
      {
        url: 'https://freeshoesapi-production.up.railway.app/api/v1/',
        description: 'production server',
      },
      {
        url: 'http://localhost:3000/api/v1/',
        description: 'development server',
      },
    ],
  },
  apis: ['./src/helpers/swaggerDocs.yml'],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app: express.Express, port: string | number) => {
  //swagger page
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON Format
  app.get('/api/v1/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Version 1 Docs are available on http://localhost:${port}/api/v1/docs`);
};

export default swaggerDocs;
