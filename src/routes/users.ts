import { IncomingMessage, ServerResponse } from 'http';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController';

export const handleUsersRoute = (req: IncomingMessage, res: ServerResponse) => {
    const urlParts = req.url?.split('/') || [];

    if (req.method === 'GET' && urlParts.length === 3) {
        return getAllUsers(res);
    }

    if (req.method === 'GET' && urlParts.length === 4) {
        return getUserById(res, urlParts[3]);
    }

    if (req.method === 'POST' && urlParts.length === 3) {
        return createUser(req, res);
    }

    if (req.method === 'PUT' && urlParts.length === 4) {
        return updateUser(req, res, urlParts[3]);
    }

    if (req.method === 'DELETE' && urlParts.length === 4) {
        return deleteUser(res, urlParts[3]);
    }

    res.writeHead(404);
    res.end('Route not found');
};
