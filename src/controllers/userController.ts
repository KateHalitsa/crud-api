import { IncomingMessage, ServerResponse } from 'http';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import { users } from '../db/inMemoryDb';
import { User } from '../models/user';

export const getAllUsers = (res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
};

export const getUserById = (res: ServerResponse, id: string) => {
    if (!uuidValidate(id)) {
        res.writeHead(400);
        res.end('Invalid userId');
        return;
    }

    const user = users.find(u => u.id === id);
    if (!user) {
        res.writeHead(404);
        res.end('User not found');
        return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
};

export const createUser = (req: IncomingMessage, res: ServerResponse) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            const { username, age, hobbies } = data;

            if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
                res.writeHead(400);
                res.end('Invalid user data');
                return;
            }

            const newUser: User = {
                id: uuidv4(),
                username,
                age,
                hobbies
            };

            users.push(newUser);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newUser));
        } catch {
            res.writeHead(400);
            res.end('Invalid JSON');
        }
    });
};

export const updateUser = (req: IncomingMessage, res: ServerResponse, id: string) => {
    if (!uuidValidate(id)) {
        res.writeHead(400);
        res.end('Invalid userId');
        return;
    }

    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            const { username, age, hobbies } = data;

            const userIndex = users.findIndex(u => u.id === id);
            if (userIndex === -1) {
                res.writeHead(404);
                res.end('User not found');
                return;
            }

            if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
                res.writeHead(400);
                res.end('Invalid user data');
                return;
            }

            users[userIndex] = { id, username, age, hobbies };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users[userIndex]));
        } catch {
            res.writeHead(400);
            res.end('Invalid JSON');
        }
    });
};

export const deleteUser = (res: ServerResponse, id: string) => {
    if (!uuidValidate(id)) {
        res.writeHead(400);
        res.end('Invalid userId');
        return;
    }

    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        res.writeHead(404);
        res.end('User not found');
        return;
    }

    users.splice(userIndex, 1);
    res.writeHead(204);
    res.end();
};
