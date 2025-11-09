import { config } from 'dotenv';
import { createServer } from './server';

config();

const PORT = process.env.PORT || 4000;

const server = createServer();

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
