import http from 'http';
import { handleUsersRoute } from './routes/users';

export const createServer = () =>
    http.createServer((req, res) => {
        const url = req.url || '';
        if (url.startsWith('/api/users')) {
            handleUsersRoute(req, res);
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    });