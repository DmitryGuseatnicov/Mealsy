import express from 'express';
import sequelize from './database/database';

sequelize.sync({ force: true }).then(() => console.log('db is ready'))
const server = express();
server.use(express.json())




const PORT = 5002;


server.listen(PORT, () => console.log(`Server working on port ${PORT}`));
