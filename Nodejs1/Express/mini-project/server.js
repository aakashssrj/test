import express from 'express';


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import logmiddleware from './middlewares/logmiddleware.js';

//* Many times required for the importing of modules in Node.js
//* __dirname is not available in ES modules, so we create it using fileURLToPath

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


if(!fs.existsSync(path.join(__dirname, 'logs'))){
    fs.mkdirSync(path.join(__dirname, "logs"))
}


import publicRoutes from './routers/public.routes.js';
import privateRoutes from './routers/private.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(logmiddleware);

app.use('/public' , publicRoutes);
app.use('/private', privateRoutes);

app.get('/',(req,res)=>{
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








