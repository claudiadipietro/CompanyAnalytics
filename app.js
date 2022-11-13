import express from 'express';
import itemRoutes from './routes/company.js';
import bodyParser from 'body-parser';
const app = express();

app.use(express());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', itemRoutes);

export default app;