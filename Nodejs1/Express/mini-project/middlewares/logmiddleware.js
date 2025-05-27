
import { FILE } from 'dns';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const logmiddleware = (req,res,next)=>{
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`
    const logfile = path.join(__dirname, '../logs/access.log');
    
    fs.appendFile(logfile , log , (err) =>{
        if(err){
            console.error('Error writing to log file:', err);
        }
    });
    next();         
}
export default logmiddleware;